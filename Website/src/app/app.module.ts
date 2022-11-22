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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './core/interceptor/request.Interceptor';
import { GamesComponent } from './features/games/games.component';
import { LatestnewsComponent } from './features/latestnews/latestnews.component';

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
