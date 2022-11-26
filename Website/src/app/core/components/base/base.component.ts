import { Component, Directive, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { LayoutOptionsModel } from '../../models/layout.model';

@Directive({
  selector: 'app-base'
})
export class BaseComponent implements OnInit {

  layoutOptionsModel:LayoutOptionsModel | undefined
  constructor(private router: Router) {}
  
  ngOnInit() {
    debugger;
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
       this.layoutOptionsModel = data.state.root.firstChild?.data['layout'];
      }
    });
  }

}
