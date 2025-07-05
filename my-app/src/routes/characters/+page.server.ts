import type { PageServerLoad } from './$types'
import { supabase } from '$lib';

export const load: PageServerLoad = async ({ fetch }) => {

  const { data: response, error } = await supabase.functions.invoke('get-characters')

  if (error) {
    console.error('Error fetching characters:', error)
    return { response: [] }
  }

  return {
    response,
  }
}