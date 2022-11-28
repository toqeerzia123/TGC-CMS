import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { BaseComponent } from './core/components/base/base.component';
import { LayoutOptionsModel } from './core/models/layout.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the-game-company';

  constructor() {
  } 
  ngOnInit(): void {
  }
  
}


