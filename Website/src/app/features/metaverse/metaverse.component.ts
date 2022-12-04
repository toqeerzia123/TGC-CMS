import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-metaverse',
  templateUrl: './metaverse.component.html'
})
export class MetaverseComponent implements OnInit {
  model : any;
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(){
    this._service.getMetaversePageData().subscribe(
      res => {
        this.model = res;
      },
      err => {

      }
    )
  }

}
