import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'social-bar',
  templateUrl: './social-bar.component.html'
})
export class SocialBarComponent implements OnInit {

  socialLinks : any[] =[];
  currentDate : Date | undefined;
  constructor(private _service:APIService) { 
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.getSocialLinks();
  }

  getSocialLinks(){
    this._service.getSocialLinks().subscribe(
      res => {
          this.socialLinks = res;
      }
    )
  }

}
