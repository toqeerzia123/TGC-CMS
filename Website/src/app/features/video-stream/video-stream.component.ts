import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-video-stream',
  templateUrl: './video-stream.component.html'
})
export class VideoStreamComponent implements OnInit {

  model : any;
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(){
    this._service.getVideoStreamData().subscribe(
      res => {
        this.model = res;
      },
      err => {

      }
    )
  }

}
