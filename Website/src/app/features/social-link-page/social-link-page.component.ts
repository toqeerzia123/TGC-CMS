import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-social-link-page',
  templateUrl: './social-link-page.component.html'
})
export class SocialLinkPageComponent implements OnInit {

  model : any;
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(){
    this._service.getSocialMediaLinkPageData().subscribe(
      res => {
        this.model = res;
      },
      err => {

      }
    )
  }

}
