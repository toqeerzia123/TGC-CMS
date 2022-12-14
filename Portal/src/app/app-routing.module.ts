import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { ProfileInfoComponent } from './account/profile-info/profile-info.component';
import { RegisterComponent } from './account/register/register.component';
import { VerifyCodeComponent } from './account/verify-code/verify-code.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LayoutModel } from './core/models/layout.model';
import { AwardsComponent } from './features/awards/awards.component';
import { BlogDetailsComponent } from './features/blogs/blog-details/blog-details.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { GamesComponent } from './features/games/games.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { PricingComponent } from './features/pricing/pricing.component';
import { RemoteconnectionComponent } from './features/remoteconnection/remoteconnection.component';
import { ResultsComponent } from './features/Results/Results.component';
import { TeamsComponent } from './features/teams/teams.component';
import { TournamentsComponent } from './features/tournaments/tournaments.component';
import { TransactionHistoryComponent } from './features/TransactionHistory/TransactionHistory.component';
import { WatchusComponent } from './features/watchus/watchus.component';


//configure layout options here
var layout = new LayoutModel();
// layout.setNavbar();
// layout.setFooter();
// layout.setSocialbar();

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component:LandingPageComponent,
  //   data:{layout : layout.buildFullLayout(),body_class:"homePg"}
  // },
  {
    path: 'watchus',
    pathMatch: 'full',
    component:WatchusComponent,
    data:{layout : layout.buildFullLayout(),body_class:"watchUsPg innerPg"}
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component:DashboardComponent,
    data:{layout : layout.buildFullLayout(),body_class:"dashboardPg innerPg"}
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
    path: '',
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
    path: 'remote',
    pathMatch: 'full',
    component:RemoteconnectionComponent,
 
  },
  {
    path: 'games',
    pathMatch: 'full',
    component:GamesComponent,
 
  },
 { 
    path: 'tournaments',
    pathMatch: 'full',
    component:TournamentsComponent,
 
  },
  { 
    path: 'results',
    pathMatch: 'full',
    component:ResultsComponent,
 
  },
  { 
    path: 'teams',
    pathMatch: 'full',
    component:TeamsComponent,
 
  },
  { 
    path: 'awards',
    pathMatch: 'full',
    component:AwardsComponent,
 
  },
  { 
    path: 'transactions',
    pathMatch: 'full',
    component:TransactionHistoryComponent,
 
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
