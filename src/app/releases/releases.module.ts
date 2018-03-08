import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { ComponentsModule } from "./components";
import { SearchEffects } from "./effects/search";
import { ReleaseEffects } from "./effects/release";

import { SearchPageComponent } from "./containers/search-page/search-page.component";

import { MaterialModule } from "../material";
import { CoreModule } from "../core/core.module";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { reducers } from "./reducers";
import { DetailPageComponent } from "./containers/detail-page/detail-page.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    AngularFontAwesomeModule,
    
    RouterModule.forChild([
      { path: "find", component: SearchPageComponent },
      {
        path: "",
        component: SearchPageComponent
      },
      {
        path: "detail/:id",
        component: DetailPageComponent
      }
    ]),
    StoreModule.forFeature("releases", reducers),
    EffectsModule.forFeature([SearchEffects, ReleaseEffects]),
    CoreModule
  ],
  declarations: [SearchPageComponent, DetailPageComponent]
})
export class ReleasesModule {}
