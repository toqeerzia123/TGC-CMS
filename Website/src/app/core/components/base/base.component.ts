import { Component, Directive, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RoutesRecognized } from '@angular/router';
import { LayoutOptionsModel } from '../../models/layout.model';


export class BaseComponent {

  layoutOptionsModel:LayoutOptionsModel | undefined
  constructor(private router1: Router) {
    this.BuildLayout(router1);
  }
  
  BuildLayout(router: Router){
    debugger;
    this.router1.events.subscribe((data) => {
      if (data instanceof ActivatedRouteSnapshot) {
        debugger;
       //this.layoutOptionsModel = data.data.root.firstChild?.data['layout'];
      }
    });
  }

}
