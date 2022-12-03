import { Component, OnInit } from '@angular/core';
import { TournamentModel } from '../../models/tournament.model';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  tournaments: TournamentModel[] = new Array();
  navigations : any[] =[];
  supportLinks : any[] =[];
  socialLinks : any[] =[];

  constructor(private _service:APIService) { }

  ngOnInit(): void {

    this._service.getAllCategories().subscribe(
      res => {
          var categories = res.result.items as Array<any>;
          let item = categories.find(f => f.categoryName == 'Games');
          this.getallGamess(item.id);
      },
      err => {

      }
    );

    this.getNavigations();
    this.getSupportLinks();
  }
  
  getallGamess(categId:number){
    this._service.getPostsByCategory(categId).subscribe(
      res => {
        if(res.success){
            this.tournaments = res.result.items;
        }
      },
      err => {
      }
    )
  }

  getNavigations(){
    this._service.getNavigations().subscribe(
      res => {
          this.navigations = res;
      }
    )
  }

  getSupportLinks(){
    this._service.getSupportLinks().subscribe(
      res => {
          this.supportLinks = res;
      }
    )
  }

  getSocialLinks(){
    this._service.getNavigations().subscribe(
      res => {
          this.socialLinks = res;
      }
    )
  }
}
