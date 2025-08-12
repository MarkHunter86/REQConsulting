import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create a singleton server client
let supabaseServerClient: ReturnType<typeof createClient> | null = null

export const supabaseServer = (() => {
  if (!supabaseServerClient && supabaseUrl && supabaseServiceKey) {
    supabaseServerClient = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  } else if (!supabaseServerClient) {
    console.error("Supabase URL or Service Role Key is missing. Please check your environment variables.")
    // Provide a fallback to prevent runtime errors
    supabaseServerClient = {
      from: () => ({
        select: () => ({ data: null, error: new Error("Supabase server client not initialized") }),
        insert: () => ({ data: null, error: new Error("Supabase server client not initialized") }),
        update: () => ({ data: null, error: new Error("Supabase server client not initialized") }),
        delete: () => ({ data: null, error: new Error("Supabase server client not initialized") }),
      }),
    } as any
  }
  return supabaseServerClient
})()
