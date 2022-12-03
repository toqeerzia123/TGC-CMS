import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html'
})
export class FaqsComponent implements OnInit {

  faqs: any[] = new Array();

  constructor(private _service:APIService) {
    
   }

  ngOnInit(): void {
    this.getFaqs();
  }
  
  getFaqs(){
    this._service.getFaqs().subscribe(
      res => {
        debugger;
            this.faqs = res;
      },
      err => {
      }
    )
  }

}
