import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { LayoutOptionsModel } from 'src/app/core/models/layout.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent extends BaseComponent {

  constructor(private _router:Router) { 
    super(_router);
    debugger;
    var f = this.layoutOptionsModel;
  }
}
