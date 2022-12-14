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
import { ContentPagesComponent } from './features/content-pages/content-pages.component';
import { ArticlesComponent } from './features/articles/articles.component';
import { FaqsComponent } from './features/faqs/faqs.component';
import { GameDevComponent } from './features/game-dev/game-dev.component';
import { MetaverseComponent } from './features/metaverse/metaverse.component';
import { ContactSupportComponent } from './features/contact-support/contact-support.component';
import { SocialLinkPageComponent } from './features/social-link-page/social-link-page.component';
import { VideoStreamComponent } from './features/video-stream/video-stream.component';
import { TokenomicsComponent } from './features/tokenomics/tokenomics.component';
import { LegalComponent } from './features/legal/legal.component';
import { TermsOfServicesComponent } from './features/terms-of-services/terms-of-services.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { LeaderBoardComponent } from './features/leader-board/leader-board.component';
import { TestComponent } from './features/test/test.component';

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
    InviteFriendComponent,
    ContentPagesComponent,
    ArticlesComponent,
    FaqsComponent,
    GameDevComponent,
    MetaverseComponent,
    ContactSupportComponent,
    SocialLinkPageComponent,
    VideoStreamComponent,
    TokenomicsComponent,
    LegalComponent,
    TermsOfServicesComponent,
    PrivacyPolicyComponent,
    LeaderBoardComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
