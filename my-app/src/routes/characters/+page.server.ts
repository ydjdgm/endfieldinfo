import { createClient } from '@supabase/supabase-js'
import type { PageServerLoad } from './$types'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

let _PUBLIC_SUPABASE_URL = PUBLIC_SUPABASE_URL;
let _PUBLIC_SUPABASE_ANON_KEY = PUBLIC_SUPABASE_ANON_KEY;

export const load: PageServerLoad = async ({ fetch }) => {
  const supabase = createClient(
    _PUBLIC_SUPABASE_URL,
    _PUBLIC_SUPABASE_ANON_KEY
  )

  const { data: response, error } = await supabase.functions.invoke('get-characters')

  if (error) {
    console.error('Error fetching characters:', error)
    return { response: [] }
  }

  return {
    response,
  }
}