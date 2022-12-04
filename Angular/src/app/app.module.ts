import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { GamesComponent } from './games/games.component';
import { TournamentCreateComponent } from './tournaments/tournament-create/tournament-create.component';
import { TournamentEditComponent } from './tournaments/tournament-edit/tournament-edit.component';
import { GameCreateComponent } from './games/game-create/game-create.component';
import { GameEditComponent } from './games/game-edit/game-edit.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementCreateComponent } from './announcements/announcement-create/announcement-create.component';
import { AnnouncementEditComponent } from './announcements/announcement-edit/announcement-edit.component';
import { FileUploadModule } from 'ng2-file-upload';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogCreateComponent } from './blogs/blog-create/blog-create.component';
import { BlogEditComponent } from './blogs/blog-edit/blog-edit.component';
import { WatchusComponent } from './watchus/watchus.component';
import { WatchusCreateComponent } from './watchus/watchus-create/watchus-create.component';
import { WatchusEditComponent } from './watchus/watchus-edit/watchus-edit.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FaqCreateComponent } from './faqs/faq-create/faq-create.component';
import { FaqEditComponent } from './faqs/faq-edit/faq-edit.component';
import { SlidersComponent } from './sliders/sliders.component';
import { SliderCreateComponent } from './sliders/slider-create/slider-create.component';
import { SliderEditComponent } from './sliders/slider-edit/slider-edit.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionCreateComponent } from './promotions/promotion-create/promotion-create.component';
import { PromotionEditComponent } from './promotions/promotion-edit/promotion-edit.component';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { InviteFriendCreateComponent } from './invite-friend/invite-friend-create/invite-friend-create.component';
import { InviteFriendEditComponent } from './invite-friend/invite-friend-edit/invite-friend-edit.component';
import { NavigationsComponent } from './navigations/navigations.component';
import { NavigationCreateComponent } from './navigations/navigation-create/navigation-create.component';
import { NavigationEditComponent } from './navigations/navigation-edit/navigation-edit.component';
import { SupportLinksComponent } from './support-links/support-links.component';
import { SupportLinkCreateComponent } from './support-links/support-link-create/support-link-create.component';
import { SupportLinkEditComponent } from './support-links/support-link-edit/support-link-edit.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { SocialLinkCreateComponent } from './social-links/social-link-create/social-link-create.component';
import { SocialLinkEditComponent } from './social-links/social-link-edit/social-link-edit.component';
import { FavouriteGamesComponent } from './favourite-games/favourite-games.component';
import { FavouriteGameCreateComponent } from './favourite-games/favourite-game-create/favourite-game-create.component';
import { FavouriteGameEditComponent } from './favourite-games/favourite-game-edit/favourite-game-edit.component';
import { HowThisWorksComponent } from './how-this-works/how-this-works.component';
import { HowThisWorkCreateComponent } from './how-this-works/how-this-work-create/how-this-work-create.component';
import { HowThisWorkEditComponent } from './how-this-works/how-this-work-edit/how-this-work-edit.component';
import { AdvertismentOneComponent } from './advertisment-one/advertisment-one.component';
import { AdvertismentOneCreateComponent } from './advertisment-one/advertisment-one-create/advertisment-one-create.component';
import { AdvertismentOneEditComponent } from './advertisment-one/advertisment-one-edit/advertisment-one-edit.component';
import { AdvertismentTwoComponent } from './advertisment-two/advertisment-two.component';
import { AdvertismentTwoCreateComponent } from './advertisment-two/advertisment-two-create/advertisment-two-create.component';
import { AdvertismentTwoEditComponent } from './advertisment-two/advertisment-two-edit/advertisment-two-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    HeaderLeftNavbarComponent,
    HeaderLanguageMenuComponent,
    HeaderUserMenuComponent,
    FooterComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarUserPanelComponent,
    SidebarMenuComponent,
    TournamentsComponent,
    TournamentCreateComponent,
    TournamentEditComponent,

    GamesComponent,
    GameCreateComponent,
    GameEditComponent,
    
    AnnouncementsComponent,
    AnnouncementCreateComponent,
    AnnouncementEditComponent,
    BlogsComponent,
    BlogCreateComponent,
    BlogEditComponent,
    WatchusComponent,
    WatchusCreateComponent,
    WatchusEditComponent,
    ArticlesComponent,
    ArticleCreateComponent,
    ArticleEditComponent,
    FaqsComponent,
    FaqCreateComponent,
    FaqEditComponent,
    SlidersComponent,
    SliderCreateComponent,
    SliderEditComponent,
    PromotionsComponent,
    PromotionCreateComponent,
    PromotionEditComponent,
    InviteFriendComponent,
    InviteFriendCreateComponent,
    InviteFriendEditComponent,
    NavigationsComponent,
    NavigationCreateComponent,
    NavigationEditComponent,
    SupportLinksComponent,
    SupportLinkCreateComponent,
    SupportLinkEditComponent,
    SocialLinksComponent,
    SocialLinkCreateComponent,
    SocialLinkEditComponent,
    FavouriteGamesComponent,
    FavouriteGameCreateComponent,
    FavouriteGameEditComponent,
    HowThisWorksComponent,
    HowThisWorkCreateComponent,
    HowThisWorkEditComponent,
    AdvertismentOneComponent,
    AdvertismentOneCreateComponent,
    AdvertismentOneEditComponent,
    AdvertismentTwoComponent,
    AdvertismentTwoCreateComponent,
    AdvertismentTwoEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    FileUploadModule 
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
  ],
})
export class AppModule {}
