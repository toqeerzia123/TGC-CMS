import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-game-dev',
  templateUrl: './game-dev.component.html'
})
export class GameDevComponent implements OnInit {

  model : any;
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(){
    this._service.getGameDevPageData().subscribe(
      res => {
        this.model = res;
      },
      err => {

      }
    )
  }

}
