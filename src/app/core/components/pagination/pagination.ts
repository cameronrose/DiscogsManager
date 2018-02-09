import { Component, Input, Output, EventEmitter } from '@angular/core';
import {PageEvent} from '@angular/material';
import {Pagination} from '../../models/pagination';

@Component({
  selector: 'dc-pagination',
  templateUrl: './pagination.html'
})
export class PaginationComponent {
    @Input()
    pagination: Pagination;

    @Output()
    onPageChange = new EventEmitter<PageEvent>();
}
