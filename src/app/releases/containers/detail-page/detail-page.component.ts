import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromRoot from "../../reducers";

import { Release } from "../../models";
import * as search from "../../actions/releases";
import * as layout from "../../../core/actions/layout";

import { PageEvent } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/map";

import { Add } from "../../../collection/actions/collection";

@Component({
  selector: "dc-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.css"]
})
export class DetailPageComponent implements OnInit {
  release$: Observable<Release>;
  loading$: Observable<boolean>;
  _id: number;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this._id = +params["id"];
    });

    const id: Observable<number> = route.params.map(p => p.id);

    this.release$ = store.select(fromRoot.getSelectedRelease);
    this.loading$ = store.select(fromRoot.getReleaseLoading);
  }

  ngOnInit() {
    this.store.dispatch(new search.Load(this._id));
  }

  addToCollection($event: any) {
    this.store.dispatch(new Add({ user: $event.user, release_id: $event.releaseId }));
  }
}
