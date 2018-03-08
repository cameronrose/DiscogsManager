import { Observable } from "rxjs/Observable";
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

  constructor(
    private store: Store<fromRoot.State>
  ) {
    // this.configureWithNewConfigApi();
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    //this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  // private configureWithNewConfigApi() {
  //   this.oauthService.configure(authConfig);
  //   this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();
  // }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new layout.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenav());
  }

  logout() {
    this.closeSidenav();

    //this.store.dispatch(new Auth.Logout());
  }
}
