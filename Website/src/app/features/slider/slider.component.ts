import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {
  sliders:any[]=[];
  baseUrl : string | undefined;
  constructor(private _service:APIService) {
    this.baseUrl = environment.apiUrl;
   }

  ngOnInit(): void {
    this.getSliderData();
  }

  getSliderData(){
    this._service.getSliderData().subscribe(
      res => {
        debugger;
        if(res.success){
            this.sliders = res.result.items;
            this.sliders.forEach(elem => {
              elem.imagePath = this.baseUrl + '/sliderimages/' + elem.imagePath
            });
        }
      },
      err => {
      }
    )
  }

}
