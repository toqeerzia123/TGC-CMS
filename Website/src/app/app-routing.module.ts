import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './core/enums/layout.enum';
import { LayoutModel } from './core/models/layout.model';
import { TournamentsComponent } from './features/tournaments/tournaments.component';


//configure layout options here
var layout = new LayoutModel();
// layout.setNavbar();
// layout.setFooter();
// layout.setSocialbar();

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:TournamentsComponent,
    data:{layout : layout.buildFullLayout()}
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
