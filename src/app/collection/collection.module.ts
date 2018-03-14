import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { MaterialModule } from "../material";
import { CoreModule } from "../core/core.module";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { reducers } from "./reducers";
import { CollectionComponent } from "./containers/collection/collection.component";
import { CollectionEffects } from "./effects/collection";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularFontAwesomeModule,

    RouterModule.forChild([
      { path: "collection", component: CollectionComponent }
    ]),
    StoreModule.forFeature("collection", reducers),
    EffectsModule.forFeature([CollectionEffects]),
    CoreModule
  ],
  declarations: [CollectionComponent]
})
export class CollectionModule {}
