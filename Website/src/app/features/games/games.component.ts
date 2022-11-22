import { Component, OnInit } from '@angular/core';
import { TournamentModel } from 'src/app/core/models/tournament.model';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'games-list',
  templateUrl: './games.component.html'
})

export class GamesComponent implements OnInit {

  tournaments: TournamentModel[] = new Array();

  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getallGamess();
  }
  
  getallGamess(){
    this._service.getGames().subscribe(
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

