import { Component, OnInit, Input } from '@angular/core';
import {Release} from '../../models';
@Component({
  selector: 'dc-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {
  @Input()
  release: Release;
  @Input()
  loading: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
