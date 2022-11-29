import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentModel } from 'src/app/core/models/tournament.model';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html'
})
export class BlogDetailsComponent implements OnInit {

  detailModel : TournamentModel | undefined;
  constructor(private route: ActivatedRoute,private _service:APIService) { }

  ngOnInit(): void {
    debugger;
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.getPostDetailsById(parseInt(params["p"]));
    }
  );

  }

  getPostDetailsById(id:number){
    this._service.getPostsDetailsById(id).subscribe(
      res => {
        if(res.success){
            this.detailModel = res.result;
        }
      },
      err => {
      }
    )
  }

  loadImage(item:any){
    let images = item?.postImages;
    return images?.length > 0 ? images[0].imageUrl : '';
  }
  

}
