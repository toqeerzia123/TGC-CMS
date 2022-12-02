import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentModel } from 'src/app/core/models/tournament.model';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {

  articles: TournamentModel[] = new Array();
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
          let item = categories.find(f => f.categoryName == 'Articles');
          this.getAllArticles(item.id);
      },
      err => {

      }
    );
  }
  
  getAllArticles(categId:number){
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
