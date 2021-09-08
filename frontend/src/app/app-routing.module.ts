import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterGuard } from './auth/router.guard';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, canActivate: [RouterGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: '**', component: ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
