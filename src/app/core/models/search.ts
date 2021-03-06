import { Pagination } from '../../core/models/pagination';
import { SearchResult } from './searchResult';

export interface Search{
    pagination: Pagination;
    results: SearchResult[];
}