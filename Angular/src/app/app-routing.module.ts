import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { GamesComponent } from './games/games.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ArticlesComponent } from './articles/articles.component';
import { SlidersComponent } from './sliders/sliders.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    // { path: 'tournaments', component: TournamentsComponent, data: { permission: 'Pages.Tournaments' }, canActivate: [AppRouteGuard] },
                    { path: 'tournaments', component: TournamentsComponent, data: { permission: 'Pages.Tournaments' } },
                    { path: 'games', component: GamesComponent, data: { permission: 'Pages.Games' }, canActivate: [AppRouteGuard] },
                    { path: 'announcements', component: AnnouncementsComponent, data: { permission: 'Pages.Announcements' }, canActivate: [AppRouteGuard] },
                    
                    { path: 'blogs', component: BlogsComponent, data: { permission: '' } },
                    { path: 'articles', component: ArticlesComponent, data: { permission: '' } },
                    { path: 'slider', component: SlidersComponent, data: { permission: '' } },
                    
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent, canActivate: [AppRouteGuard] },
                    { path: 'update-password', component: ChangePasswordComponent, canActivate: [AppRouteGuard] }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
