import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create a singleton client to avoid multiple instances
let supabaseClient: ReturnType<typeof createClient> | null = null

export const supabase = (() => {
  if (!supabaseClient && supabaseUrl && supabaseAnonKey) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  } else if (!supabaseClient) {
    console.error("Supabase URL or Anon Key is missing. Please check your environment variables.")
    // Provide a fallback to prevent runtime errors
    supabaseClient = {
      from: () => ({
        select: () => ({ data: null, error: new Error("Supabase client not initialized") }),
        insert: () => ({ data: null, error: new Error("Supabase client not initialized") }),
        update: () => ({ data: null, error: new Error("Supabase client not initialized") }),
        delete: () => ({ data: null, error: new Error("Supabase client not initialized") }),
      }),
      auth: {
        signInWithOtp: () => Promise.resolve({ data: null, error: new Error("Supabase client not initialized") }),
        signOut: () => Promise.resolve({ error: null }),
      },
      storage: {
        from: () => ({
          upload: () => Promise.resolve({ data: null, error: new Error("Supabase client not initialized") }),
          download: () => Promise.resolve({ data: null, error: new Error("Supabase client not initialized") }),
        }),
      },
    } as any
  }
  return supabaseClient
})()

export type ContactSubmission = {
  id?: string
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  status?: string
  notes?: string
  created_at?: string
}

export const CONTACT_STATUS_OPTIONS = [
  { value: "new", label: "New" },
  { value: "in-progress", label: "In Progress" },
  { value: "contacted", label: "Contacted" },
  { value: "completed", label: "Completed" },
  { value: "archived", label: "Archived" },
]
