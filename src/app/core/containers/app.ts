import { Observable } from "rxjs";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as fromRoot from "../../reducers";
//import * as fromAuth from '../../auth/reducers';
import * as layout from "../actions/layout";
//import * as Auth from '../../auth/actions/auth';
import { OAuthService } from "angular-oauth2-oidc";
import { JwksValidationHandler } from "angular-oauth2-oidc";
import { authConfig } from "../../auth.config";

@Component({
  selector: "dc-app",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./app.html"
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    //this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    this.loading$ = this.store.pipe(select(fromRoot.isLoading));
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenav());
  }

  logout() {
    this.closeSidenav();
  }
}
