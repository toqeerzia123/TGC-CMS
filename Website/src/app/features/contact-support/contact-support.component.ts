import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-contact-support',
  templateUrl: './contact-support.component.html'
})
export class ContactSupportComponent implements OnInit {

  model : any;
  constructor(private _service:APIService) { }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(){
    this._service.getContactSupportPageData().subscribe(
      res => {
        this.model = res;
      },
      err => {

      }
    )
  }
}
