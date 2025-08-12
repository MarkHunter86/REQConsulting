"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from "@/lib/supabase"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ContactFormProps {
  children: React.ReactNode
}

export default function ContactForm({ children }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Only include basic fields that we know exist
      const submissionData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        phone: formData.phone || null,
        message: formData.message,
      }

      const { error } = await supabase.from("contact_submissions").insert([submissionData])

      if (error) throw error

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })

      setIsOpen(false)
      alert("Thank you for your message! We'll get back to you soon.")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you as soon as possible.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
          </div>
          <div>
            <Input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="How can we help you? *"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
