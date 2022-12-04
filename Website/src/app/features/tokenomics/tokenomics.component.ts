import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html'
})
export class TokenomicsComponent implements OnInit {

  model : any;
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(){
    this._service.getTokenomicsPageData().subscribe(
      res => {
        this.model = res;
      },
      err => {

      }
    )
  }
}
