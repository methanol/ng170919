import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { URL } from './config';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: URL.BACKOFFICE
  },
  {
    path: URL.LOGIN,
    loadChildren: () => import('./content/login/login.module').then((m => m.LoginModule)),
    canActivate: [AuthGuardService]
  },
  {
    path: URL.SIGNUP,
    loadChildren: () => import('./content/signup/signup.module').then((m => m.SignupModule)),
    canActivate: [AuthGuardService]
  },
  {
    path: URL.BACKOFFICE,
    loadChildren: () => import('./content/backoffice/backoffice.module').then((m => m.BackofficeModule)),
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: URL.BACKOFFICE
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
