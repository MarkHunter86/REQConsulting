"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Save, RefreshCw } from "lucide-react"
import type { ContactSubmission } from "@/lib/supabase"
import { CONTACT_STATUS_OPTIONS } from "@/lib/supabase"

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [hasNotesColumn, setHasNotesColumn] = useState(false)
  const [hasStatusColumn, setHasStatusColumn] = useState(false)

  useEffect(() => {
    checkTableSchema()
    fetchSubmissions()
  }, [])

  async function checkTableSchema() {
    try {
      // Try to fetch a single record to check what columns exist
      const { data, error } = await supabase.from("contact_submissions").select("*").limit(1)

      if (!error && data && data.length > 0) {
        const firstRecord = data[0]
        setHasNotesColumn("notes" in firstRecord)
        setHasStatusColumn("status" in firstRecord)
      } else {
        // If no records exist, try to insert and immediately delete a test record to check schema
        const testRecord = {
          name: "test",
          email: "test@test.com",
          message: "test",
          status: "new",
          notes: "test",
        }

        const { error: insertError } = await supabase.from("contact_submissions").insert([testRecord]).select()

        if (!insertError) {
          setHasNotesColumn(true)
          setHasStatusColumn(true)
          // Delete the test record
          await supabase.from("contact_submissions").delete().eq("email", "test@test.com")
        } else {
          // Try without notes and status
          const basicRecord = {
            name: "test",
            email: "test@test.com",
            message: "test",
          }

          const { error: basicInsertError } = await supabase.from("contact_submissions").insert([basicRecord]).select()

          if (!basicInsertError) {
            setHasNotesColumn(false)
            setHasStatusColumn(false)
            // Delete the test record
            await supabase.from("contact_submissions").delete().eq("email", "test@test.com")
          }
        }
      }
    } catch (error) {
      console.error("Error checking table schema:", error)
      setHasNotesColumn(false)
      setHasStatusColumn(false)
    }
  }

  async function fetchSubmissions() {
    setLoading(true)
    try {
      const query = supabase.from("contact_submissions").select("*")

      const { data, error } = await query.order("created_at", { ascending: false })

      if (error) throw error

      // Ensure all submissions have default values for missing columns
      const processedData = (data || []).map((submission) => ({
        ...submission,
        status: hasStatusColumn ? submission.status || "new" : "new",
        notes: hasNotesColumn ? submission.notes || "" : "",
      }))

      setSubmissions(processedData)
    } catch (error) {
      console.error("Error fetching submissions:", error)
      alert("Failed to load submissions")
    } finally {
      setLoading(false)
    }
  }

  async function updateSubmission(id: string, updates: Partial<ContactSubmission>) {
    setSavingId(id)
    try {
      // Only include fields that exist in the database
      const filteredUpdates: any = {}

      if (updates.status && hasStatusColumn) {
        filteredUpdates.status = updates.status
      }

      if (updates.notes !== undefined && hasNotesColumn) {
        filteredUpdates.notes = updates.notes
      }

      if (Object.keys(filteredUpdates).length === 0) {
        alert("Cannot update: required database columns are missing. Please run the database migration script.")
        return
      }

      const { error } = await supabase.from("contact_submissions").update(filteredUpdates).eq("id", id)

      if (error) throw error

      // Update local state
      setSubmissions(submissions.map((sub) => (sub.id === id ? { ...sub, ...updates } : sub)))
    } catch (error) {
      console.error("Error updating submission:", error)
      alert("Failed to update submission. Please ensure the database schema is up to date.")
    } finally {
      setSavingId(null)
    }
  }

  async function deleteSubmission(id: string) {
    if (!confirm("Are you sure you want to delete this submission? This action cannot be undone.")) {
      return
    }

    setDeletingId(id)
    try {
      const { error } = await supabase.from("contact_submissions").delete().eq("id", id)
      if (error) throw error

      // Update local state
      setSubmissions(submissions.filter((sub) => sub.id !== id))
    } catch (error) {
      console.error("Error deleting submission:", error)
      alert("Failed to delete submission")
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Contact form submissions</p>
            {(!hasStatusColumn || !hasNotesColumn) && (
              <div className="mt-2 p-3 bg-yellow-100 border border-yellow-400 rounded-md">
                <p className="text-sm text-yellow-800">
                  <strong>Notice:</strong> Some features are limited because database columns are missing.
                  {!hasStatusColumn && " Status tracking is disabled."}
                  {!hasNotesColumn && " Notes functionality is disabled."}
                  <br />
                  Please run the database migration script to enable all features.
                </p>
              </div>
            )}
          </div>
          <Button
            onClick={fetchSubmissions}
            className="flex items-center gap-2 bg-transparent"
            variant="outline"
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        <div className="grid gap-6">
          {submissions && submissions.length > 0 ? (
            submissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span className="text-lg font-semibold text-navy-900">{submission.name}</span>
                    <div className="flex items-center gap-2">
                      {hasStatusColumn && (
                        <Select
                          value={submission.status || "new"}
                          onValueChange={(value) => updateSubmission(submission.id!, { status: value })}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            {CONTACT_STATUS_OPTIONS.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      <span className="text-sm text-gray-500">
                        {new Date(submission.created_at!).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email:</p>
                      <p className="text-sm text-gray-900">{submission.email}</p>
                    </div>
                    {submission.company && (
                      <div>
                        <p className="text-sm font-medium text-gray-700">Company:</p>
                        <p className="text-sm text-gray-900">{submission.company}</p>
                      </div>
                    )}
                    {submission.phone && (
                      <div>
                        <p className="text-sm font-medium text-gray-700">Phone:</p>
                        <p className="text-sm text-gray-900">{submission.phone}</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Message:</p>
                    <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{submission.message}</p>
                  </div>
                  {hasNotesColumn && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Notes:</p>
                      <Textarea
                        value={submission.notes || ""}
                        onChange={(e) => {
                          const newNotes = e.target.value
                          setSubmissions(
                            submissions.map((sub) => (sub.id === submission.id ? { ...sub, notes: newNotes } : sub)),
                          )
                        }}
                        placeholder="Add notes about this contact..."
                        className="min-h-[100px]"
                      />
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteSubmission(submission.id!)}
                    disabled={deletingId === submission.id}
                    className="flex items-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                  {hasNotesColumn && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateSubmission(submission.id!, { notes: submission.notes })}
                      disabled={savingId === submission.id}
                      className="flex items-center gap-2"
                    >
                      <Save className="h-4 w-4" />
                      Save Notes
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">{loading ? "Loading submissions..." : "No contact submissions yet."}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
