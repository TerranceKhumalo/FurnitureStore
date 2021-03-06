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
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';
import { OderHistoryComponent } from './components/oder-history/oder-history.component';

// const oktaConfig = Object.assign({
//   onAuthRequired: (oktaAuth, inject: { get: (arg0: typeof Router) => any; })=>{
//     const router = inject.get(Router);
//     router.navigate(['/login']);
//   }
// }, myAppConfig.oidc);


const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [OktaAuthGuard]},
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'orders', component: OderHistoryComponent, canActivate: [OktaAuthGuard]},
  {path: 'shop', component: ProductsPageComponent},
  {path: 'cart', component: CartPageComponent, canActivate: [OktaAuthGuard]},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'category/:id', component: ProductsPageComponent},
  {path: 'search/:keyword', component: ProductsPageComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: [OktaAuthGuard]},
  {path: '**', component: ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
