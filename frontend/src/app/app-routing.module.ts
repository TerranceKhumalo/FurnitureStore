import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RouterGuard } from './auth/router.guard';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

// const oktaConfig = Object.assign({
//   onAuthRequired: (inject: { get: (arg0: typeof Router) => any; })=>{
//     const router = inject.get(Router);
//     router.navigate(['/login']);
//   }
// }, myAppConfig.oidc);


const routes: Routes = [
  {path: 'home', component: HomePageComponent, canActivate: [OktaAuthGuard]},
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'shop', component: ProductsPageComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'category/:id', component: ProductsPageComponent},
  {path: 'search/:keyword', component: ProductsPageComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: '**', component: ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
