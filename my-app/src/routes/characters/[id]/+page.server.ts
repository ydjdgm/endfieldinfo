import type { PageServerLoad } from './$types'
const SUPABASE_URL = 'https://kartzmrpjvrdkcbmynlk.supabase.co';

export const load: PageServerLoad = async ({ params }) => {
    const { id } = params;
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthcnR6bXJwanZyZGtjYm15bmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTc4MTQsImV4cCI6MjA2NzEzMzgxNH0.xuj9vVCT4wx0dXo1V0q200--D54asxDixNF0pt_5EqQ';
    const response = await fetch(`${SUPABASE_URL}/functions/v1/get-character-detail?id=${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching character data:', response.status, errorText);
        return { character: [] };
    }

    const data = await response.json();



    return {
        character: data,
    };
};