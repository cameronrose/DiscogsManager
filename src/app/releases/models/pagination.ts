export interface Pagination{
    per_page: number;
    pages: number;
    page: number;
    items: number;
}

export interface Urls{
    next: string;
    last: string;
}