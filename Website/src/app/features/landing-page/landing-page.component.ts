import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { LayoutOptionsModel } from 'src/app/core/models/layout.model';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {


  constructor() {
  }
  ngOnInit(): void {
    
  }

}
