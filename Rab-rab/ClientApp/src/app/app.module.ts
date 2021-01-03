import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './front-end/home/home.component';
import { AboutComponent } from './front-end/about/about.component';
import { PortfolioComponent } from './front-end/portfolio/portfolio.component';
import { ShopComponent } from './front-end/shop/shop.component';
import { ContactComponent } from './front-end/contact/contact.component';
import { BackendModule } from './back-end/backend.module';
import { LoginComponent } from './back-end/login/login.component';
import { BackMainComponent } from './back-end/back-main/back-main.component';
import { BackNavBarComponent } from './back-end/back-nav-bar/back-nav-bar.component';
import { BackAsideBarComponent } from './back-end/back-aside-bar/back-aside-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ShopComponent,
    ContactComponent,
    LoginComponent,
    BackMainComponent,
    BackNavBarComponent,
    BackAsideBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BackendModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'about', component: AboutComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'rabback/login', component: LoginComponent },
      { path: 'rabback/home', component: BackMainComponent },
      { path: 'rabback', component: LoginComponent },
      //{ path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
