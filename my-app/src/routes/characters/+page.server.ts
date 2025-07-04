
import { createClient } from '@supabase/supabase-js'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
  const supabase = createClient(
    'https://kartzmrpjvrdkcbmynlk.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthcnR6bXJwanZyZGtjYm15bmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTc4MTQsImV4cCI6MjA2NzEzMzgxNH0.xuj9vVCT4wx0dXo1V0q200--D54asxDixNF0pt_5EqQ'
  )

  const { data: characters, error } = await supabase.functions.invoke('get-characters')

  if (error) {
    console.error('Error fetching characters:', error)
    return { characters: [] }
  }

  return {
    characters,
  }
}
