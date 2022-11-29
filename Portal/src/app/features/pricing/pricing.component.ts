import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent implements OnInit {
  packages:any[]=[];
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getallPackages();
  }

  getallPackages(){
    this._service.getAllPackages().subscribe(
      res => {
        if(res.success){
            this.packages = res.result.items;
        }
      },
      err => {
      }
    )
  }

}
