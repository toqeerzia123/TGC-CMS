import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-remoteconnection',
  templateUrl: './remoteconnection.component.html',
  styleUrls: ['./remoteconnection.component.css']
})
export class RemoteconnectionComponent extends BaseComponent{

  constructor(private _oute:ActivatedRoute,private _service:APIService) {super(_oute)
   // myfunction

  
  }
  ngOnInit() {
  
  }

}
