import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { LayoutOptionsModel } from './core/models/layout.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-game-company';
  layoutOptionsModel:LayoutOptionsModel | undefined
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
       this.layoutOptionsModel = data.state.root.firstChild?.data['layout'];
      }
    });
  }
  
}


