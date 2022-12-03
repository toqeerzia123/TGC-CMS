import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentModel } from '../../models/tournament.model';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  tournaments: TournamentModel[] = new Array();

  constructor(private _service:APIService, private _route:ActivatedRoute) { }

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
  
  loadImage(index:number){
    let images = this.tournaments[index].postImages;
    return images?.length > 0 ? images[0].imageUrl : '';
 }

}
