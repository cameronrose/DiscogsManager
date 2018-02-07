import { Pagination } from './pagination';
import { SearchResult } from './searchResult';

export interface Search{
    pagination: Pagination;
    results: SearchResult[];
}