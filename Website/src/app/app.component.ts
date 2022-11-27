import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { BaseComponent } from './core/components/base/base.component';
import { LayoutOptionsModel } from './core/models/layout.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  title = 'the-game-company';

  constructor(private _router:Router) {
    debugger;
    super(_router);
  }
  
}


