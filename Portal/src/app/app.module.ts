import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SocialBarComponent } from './core/components/social-bar/social-bar.component';
import { PurchaseBannerComponent } from './features/purchase-banner/purchase-banner.component';
import { TournamentsComponent } from './features/tournaments/tournaments.component';
import { APIService } from './core/services/api.service';
import { HttpClientModule} from '@angular/common/http';
import { GamesComponent } from './features/games/games.component';
import { LatestnewsComponent } from './features/latestnews/latestnews.component';
import { RegisterComponent } from './account/register/register.component';
import { VerifyCodeComponent } from './account/verify-code/verify-code.component';
import { ProfileInfoComponent } from './account/profile-info/profile-info.component';
import { PricingComponent } from './features/pricing/pricing.component';
import { WatchusComponent } from './features/watchus/watchus.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { BlogDetailsComponent } from './features/blogs/blog-details/blog-details.component';
import { LoginComponent } from './account/login/login.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { BodyThemeDirective } from './core/directives/body-theme.directive';
import { SliderComponent } from './features/slider/slider.component';
import { PromotionComponent } from './features/promotion/promotion.component';
import { InviteFriendComponent } from './features/invite-friend/invite-friend.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NotifierModule } from 'angular-notifier';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SocialBarComponent,
    PurchaseBannerComponent,
    TournamentsComponent,
    GamesComponent,
    LatestnewsComponent,
    LoginComponent,
    RegisterComponent,
    VerifyCodeComponent,
    ProfileInfoComponent,
    PricingComponent,
    WatchusComponent,
    BlogsComponent,
    BlogDetailsComponent,
    LandingPageComponent,
    BodyThemeDirective,
    SliderComponent,
    PromotionComponent,
    InviteFriendComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
       // tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
     
  ],
  providers: [APIService,
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: RequestInterceptor,
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
