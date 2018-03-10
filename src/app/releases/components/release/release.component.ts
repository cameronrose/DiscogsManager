import { Component, Input } from '@angular/core';
import {Release} from '../../models';
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
  
  constructor() { }
}
