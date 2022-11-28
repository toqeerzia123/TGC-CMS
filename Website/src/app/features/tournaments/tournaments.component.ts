import { Component, OnInit } from '@angular/core';
import { TournamentModel } from 'src/app/core/models/tournament.model';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'tournaments',
  templateUrl: './tournaments.component.html'
})
export class TournamentsComponent implements OnInit {

  tournaments: TournamentModel[] = new Array();

  constructor(private _service:APIService) { }

  ngOnInit(): void {

    this._service.getAllCategories().subscribe(
      res => {
          var categories = res.result.items as Array<any>;
          let item = categories.find(f => f.categoryName == 'Tournaments');
          this.getallTournaments(item.id);
      },
      err => {

      }
    );
  }
  
  getallTournaments(categId : number){
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
     return images?.length > 0 ? {'background-image':'url('+ images[0].imageUrl +')'} : {'background-image':'url(../../../assets/images/default-image.jpg)'};
  }

}
