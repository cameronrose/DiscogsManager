export interface SearchResult{
    id: number;
    style: string[];
    thumb: string;
    title: string;
    country: string;
    format: string[];
    uri: string;
    community: Community;
    label: string[];
    catno: string;
    year: string;
    genre: string[];
    resource_url: string;
    type: string;
}

interface Community{
    want: number;
    have: number;
}