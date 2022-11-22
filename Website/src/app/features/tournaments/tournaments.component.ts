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
    this.getallTournaments();
  }
  
  getallTournaments(){
    this._service.getTournaments().subscribe(
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
