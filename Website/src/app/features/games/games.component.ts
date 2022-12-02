import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentModel } from 'src/app/core/models/tournament.model';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'games-list',
  templateUrl: './games.component.html'
})

export class GamesComponent implements OnInit {

  tournaments: TournamentModel[] = new Array();
  isViewAll : boolean = false;

  constructor(private _service:APIService, private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this._route.data.subscribe(
      res =>{
        if(res["viewall"] == true){
          this.isViewAll = true;
        }
      }
  );

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

 loadImage2(item:any){
  let images = item?.postImages;
  return images?.length > 0 ? {'background-image':'url('+ images[0].imageUrl +')'} : {'background-image':'url()'};
}
}

