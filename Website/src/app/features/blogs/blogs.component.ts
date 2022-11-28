import { Component, OnInit } from '@angular/core';
import { TournamentModel } from 'src/app/core/models/tournament.model';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent implements OnInit {

  articles: TournamentModel[] = new Array();
  
  blog1 : TournamentModel | undefined;
  blog2 : TournamentModel | undefined;
  blog3 : TournamentModel | undefined;
  blog4 : TournamentModel | undefined;
  blog5 : TournamentModel | undefined;

  news1 : TournamentModel | undefined;
  news2 : TournamentModel | undefined;
  news3 : TournamentModel | undefined;
  news4 : TournamentModel | undefined;
  news5 : TournamentModel | undefined;


  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this._service.getAllCategories().subscribe(
      res => {
          var categories = res.result.items as Array<any>;
          let blog = categories.find(f => f.categoryName == 'Blogs');
          let announcement = categories.find(f => f.categoryName == 'Announcements');
          let article = categories.find(f => f.categoryName == 'Articles');
          this.getallBlogs(blog?.id);
          this.getallAnnouncements(announcement?.id);
          this.getAllArticles(article?.id);
      },
      err => {

      }
    );
  }
  
  getallBlogs(categId:number){
    this._service.getPostsByCategory(categId).subscribe(
      res => {
        if(res.success){
            let items = res.result.items;
            this.blog1 = items.length > 0 ? items[0] : undefined;
            this.blog2 = items.length > 1 ? items[1] : undefined;
            this.blog3 = items.length > 2 ? items[2] : undefined;
            this.blog4 = items.length > 3 ? items[3] : undefined;
            this.blog5 = items.length > 4 ? items[4] : undefined;
        }
      },
      err => {
      }
    )
  }

  getallAnnouncements(categId:number){
    this._service.getPostsByCategory(categId).subscribe(
      res => {
        if(res.success){
            let news = res.result.items;
            this.news1 = news.length > 0 ? news[0] : undefined;
            this.news2 = news.length > 1 ? news[1] : undefined;
            this.news3 = news.length > 2 ? news[2] : undefined;
            this.news4 = news.length > 3 ? news[3] : undefined;
            this.news5 = news.length > 4 ? news[4] : undefined;
        }
      },
      err => {
      }
    )
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

 loadNewsImage(item:any){
  let images = item?.postImages;
  return images?.length > 0 ? images[0].imageUrl : '';
}

}
