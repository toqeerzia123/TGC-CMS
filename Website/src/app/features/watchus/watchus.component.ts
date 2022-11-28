import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { TournamentModel } from 'src/app/core/models/tournament.model';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-watchus',
  templateUrl: './watchus.component.html'
})
export class WatchusComponent extends BaseComponent {
  
  articles: TournamentModel[] = new Array();

  constructor(private _oute:ActivatedRoute,private _service:APIService) {super(_oute) }

  ngOnInit(): void {
    this._service.getAllCategories().subscribe(
      res => {
          var categories = res.result.items as Array<any>;
          let watch = categories.find(f => f.categoryName == 'WatchUs');
          this.getallWatchUs(watch?.id);
      },
      err => {

      }
    );
  }
  
  getallWatchUs(categId:number){
    this._service.getPostsByCategory(categId).subscribe(
      res => {
        if(res.success){
            this.articles = res.result.items;
        }
      },
      err => {
      }
    )
  }

  loadImage(item:any){
    let images = item?.postImages;
    return images?.length > 0 ? {'background-image':'url('+ images[0].imageUrl +')'} : {'background-image':'url()'};
 }

}
