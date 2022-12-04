import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html'
})
export class LegalComponent implements OnInit {

  model : any;
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(){
    this._service.getLegalPageData().subscribe(
      res => {
        this.model = res;
      },
      err => {

      }
    )
  }

}
