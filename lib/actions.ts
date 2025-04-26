import supabase from './supabase';

export interface Server {
    id: number;
    title?: string;
    logo_url?: string;
    github_url?: string;
    readme_url?: string;
    stars?: number;
    description?: string;
    tags?: string[];
    search_id?: string;
}

export async function getServerBySearchId(searchid: string): Promise<Server | null> {
    const { data, error } = await supabase
        .from('mcp_servers')
        .select('id, title, logo_url, description, tags, readme_url, github_url')
        .eq('search_id', searchid)
        .single();

    if (error) {
        console.error('Error fetching server:', error);
        return null;
    }

    return data;
}

export async function getNextServers(
    startFrom: number,
    searchQuery?: string,
    selectedCategory?: string
): Promise<Server[]> {
    let query = supabase
        .from('mcp_servers')
        .select('id, title, logo_url, stars, description, tags, search_id')
        .order('id', { ascending: true });

    if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
    }

    const validCategories = ["analyticsdata", "aimachinelearning", "crm", "devtools", "filemanagement", "communication", "collaboration", "fintech"];

    if (selectedCategory && validCategories.includes(selectedCategory)) {
        query = query.contains('tags', JSON.stringify([selectedCategory]));
    }

    query = query.range(startFrom, startFrom + 19);

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching servers:', error);
        return [];
    }

    return data || [];
}
