import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html'
})
export class PromotionComponent implements OnInit {

  promotion:any;
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getPromotionData();
  }

  getPromotionData(){
    this._service.getPromotionData().subscribe(
      res => {
        if(res.success){
            this.promotion = res.result.items[0];
        }
      },
      err => {
      }
    )
  }
}
