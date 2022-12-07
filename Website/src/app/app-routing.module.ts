import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { ProfileInfoComponent } from './account/profile-info/profile-info.component';
import { RegisterComponent } from './account/register/register.component';
import { VerifyCodeComponent } from './account/verify-code/verify-code.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LayoutModel } from './core/models/layout.model';
import { ArticlesComponent } from './features/articles/articles.component';
import { BlogDetailsComponent } from './features/blogs/blog-details/blog-details.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { ContactSupportComponent } from './features/contact-support/contact-support.component';
import { ContentPagesComponent } from './features/content-pages/content-pages.component';
import { FaqsComponent } from './features/faqs/faqs.component';
import { GameDevComponent } from './features/game-dev/game-dev.component';
import { GamesComponent } from './features/games/games.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { LatestnewsComponent } from './features/latestnews/latestnews.component';
import { LeaderBoardComponent } from './features/leader-board/leader-board.component';
import { LegalComponent } from './features/legal/legal.component';
import { MetaverseComponent } from './features/metaverse/metaverse.component';
import { PricingComponent } from './features/pricing/pricing.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { SocialLinkPageComponent } from './features/social-link-page/social-link-page.component';
import { TermsOfServicesComponent } from './features/terms-of-services/terms-of-services.component';
import { TokenomicsComponent } from './features/tokenomics/tokenomics.component';
import { TournamentsComponent } from './features/tournaments/tournaments.component';
import { VideoStreamComponent } from './features/video-stream/video-stream.component';
import { WatchusComponent } from './features/watchus/watchus.component';


//configure layout options here
var layout = new LayoutModel();
// layout.setNavbar();
// layout.setFooter();
// layout.setSocialbar();

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:LandingPageComponent,
    data:{layout : layout.buildFullLayout(),body_class:"homePg"}
  },
  {
    path: 'watchus',
    pathMatch: 'full',
    component:WatchusComponent,
    data:{layout : layout.buildFullLayout(),body_class:"watchUsPg innerPg"}
  },
  {
    path: 'blogs',
    pathMatch: 'full',
    component:BlogsComponent,
    data:{body_class : "blogPg innerPg"}
  },
  {
    path: 'blog-details',
    component:BlogDetailsComponent,
    data:{body_class:"blogDetailsPg innerPg"},

  },
  {
    path: 'pricing',
    pathMatch: 'full',
    component:PricingComponent,
    data:{body_class:"pricingPg innerPg"}
  },
  {
    path: 'login',
    pathMatch: 'full',
    component:LoginComponent,
    data:{body_class:"LoginPg innerPg"}
  },
  {
    path: 'register',
    pathMatch: 'full',
    component:RegisterComponent,
    data:{body_class:"signUpPg innerPg"}
  },
  {
    path: 'profile-info',
    pathMatch: 'full',
    component:ProfileInfoComponent,
    data:{body_class:"profileInfoPg innerPg"}
  },
  {
    path: 'verify-code',
    pathMatch: 'full',
    component:VerifyCodeComponent,
    data:{body_class:"verifyCodePg innerPg"}
  },
  {
    path: 'tournaments',
    pathMatch: 'full',
    component:TournamentsComponent,
    data:{body_class:"homePg contentPg innerPg",viewall:true}
  },
  {
    path: 'latest-news',
    pathMatch: 'full',
    component:LatestnewsComponent,
    data:{body_class:"blogPg contentPg innerPg",viewall:true}
  },
  {
    path: 'games',
    pathMatch: 'full',
    component:GamesComponent,
    data:{body_class:"homePg contentPg innerPg",viewall:true}
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component:ArticlesComponent,
    data:{body_class:"blogPg contentPg innerPg",viewall:true}
  },
  {
    path: 'faqs',
    pathMatch: 'full',
    component:FaqsComponent,
    data:{body_class:"blogPg contentPg innerPg",viewall:true}
  },
  {
    path: 'game-dev',
    pathMatch: 'full',
    component:GameDevComponent,
    data:{body_class:"metaversePg2 innerPg"}
  },
  {
    path: 'metaverse',
    pathMatch: 'full',
    component:MetaverseComponent,
    data:{body_class:"metaversePg2 innerPg"}
  },
  {
    path: 'contact-support',
    pathMatch: 'full',
    component:ContactSupportComponent,
    data:{body_class:"metaversePg2 innerPg"}
  },
  {
    path: 'social-links',
    pathMatch: 'full',
    component:SocialLinkPageComponent,
    data:{body_class:"metaversePg2 innerPg"}
  },
  {
    path: 'video-stream',
    pathMatch: 'full',
    component:VideoStreamComponent,
    data:{body_class:"metaversePg2 innerPg"}
  },
  {
    path: 'tokenomics',
    pathMatch: 'full',
    component:TokenomicsComponent,
    data:{body_class:"toomicsPg2 innerPg"}
  },
  {
    path: 'privacy-policy',
    pathMatch: 'full',
    component:PrivacyPolicyComponent,
    data:{body_class:"metaversePg2 innerPg"}
  },
  {
    path: 'terms-of-services',
    pathMatch: 'full',
    component:TermsOfServicesComponent,
    data:{body_class:"metaversePg2 innerPg"}
  },
  {
    path: 'leader-board',
    pathMatch: 'full',
    component:LeaderBoardComponent,
    data:{body_class:"leaderboardPg innerPg2"}
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
