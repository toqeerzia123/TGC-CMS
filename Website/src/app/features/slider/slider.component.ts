import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {
  sliders:any[]=[];
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getSliderData();
  }

  getSliderData(){
    this._service.getSliderData().subscribe(
      res => {
        if(res.success){
            this.sliders = res.result.items;
        }
      },
      err => {
      }
    )
  }

}
