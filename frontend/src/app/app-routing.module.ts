import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterGuard } from './auth/router.guard';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, canActivate: [RouterGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'category/:id', component: ProductsPageComponent},
  {path: 'search/:keyword', component: ProductsPageComponent},
  {path: 'shop', component: ProductsPageComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: '**', component: ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
