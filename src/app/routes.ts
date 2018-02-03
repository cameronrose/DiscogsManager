import { Routes } from '@angular/router';
//import { AuthGuard } from './auth/services/auth-guard.service';
import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/releases', pathMatch: 'full' },
  {
    path: 'releases',
    loadChildren: './releases/releases.module#ReleasesModule'
    //canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];
