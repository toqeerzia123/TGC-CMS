import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { ProfileInfoComponent } from './account/profile-info/profile-info.component';
import { RegisterComponent } from './account/register/register.component';
import { VerifyCodeComponent } from './account/verify-code/verify-code.component';
import { LayoutModel } from './core/models/layout.model';
import { BlogDetailsComponent } from './features/blogs/blog-details/blog-details.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { PricingComponent } from './features/pricing/pricing.component';
import { TournamentsComponent } from './features/tournaments/tournaments.component';
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
    data:{layout : layout.buildFullLayout()},
    
  },
  {
    path: 'watchus',
    pathMatch: 'full',
    component:WatchusComponent,
    data:{layout : layout.buildFullLayout()}
  },
  {
    path: 'blogs',
    pathMatch: 'full',
    component:BlogsComponent
  },
  {
    path: 'blog-details',
    pathMatch: 'full',
    component:BlogDetailsComponent
  },
  {
    path: 'pricing',
    pathMatch: 'full',
    component:PricingComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component:LoginComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component:RegisterComponent
  },
  {
    path: 'profile-info',
    pathMatch: 'full',
    component:ProfileInfoComponent
  },
  {
    path: 'verify-code',
    pathMatch: 'full',
    component:VerifyCodeComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
