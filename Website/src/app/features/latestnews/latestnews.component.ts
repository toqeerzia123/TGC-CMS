import { Component, OnInit } from '@angular/core';
import { TournamentModel } from 'src/app/core/models/tournament.model';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'latest-news',
  templateUrl: './latestnews.component.html'
})
export class LatestnewsComponent implements OnInit {

  tournaments: TournamentModel[] = new Array();

  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getLatestNews();
  }
  
  getLatestNews(){
    this._service.getLatestNews().subscribe(
      res => {
        if(res.success){
            this.tournaments = res.result;
        }
      },
      err => {
      }
    )
  }

}
