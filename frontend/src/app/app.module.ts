import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HttpInterceptBasicAuthService } from './services/http/http-intercept-basic-auth.service';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { OktaAuthModule, OKTA_CONFIG, OktaCallbackComponent } from '@okta/okta-angular';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { Router } from '@angular/router';
import myAppConfig from './config/my-app-config';

const oktaConfig = Object.assign({
  onAuthRequired: (inject: any)=>{
    const router = inject.get(Router);
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    ErrorPageComponent,
    ProductsPageComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    LoginStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OktaAuthModule,
    NgbModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptBasicAuthService, multi: true}
    {provide: OKTA_CONFIG, useValue: oktaConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
