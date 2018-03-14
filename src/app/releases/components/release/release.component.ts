import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Release} from '../../models';
import {Add} from '../../../collection/models/add';

@Component({
  selector: 'dc-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent{
  @Input()
  release: Release;
  @Input()
  loading: boolean;
  @Output()
  onAddToCollection: EventEmitter<Add>;
  
  constructor() { }
}
