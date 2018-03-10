import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./containers/app";
import { NotFoundPageComponent } from "./containers/not-found-page";
import { LayoutComponent } from "./components/layout/layout";
import { NavItemComponent } from "./components/nav-item/nav-item";
import { SidenavComponent } from "./components/sidenav/sidenav";
import { ToolbarComponent } from "./components/toolbar/toolbar";
import { PaginationComponent } from "./components/pagination/pagination";
import { LoadingComponent } from "./components/loading/loading";

import { MaterialModule } from "../material";

import { DiscogsService } from "./services/discogs.service";

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
  PaginationComponent,
  LoadingComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [DiscogsService]
    };
  }
}
