import { Component, Directive, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RoutesRecognized } from '@angular/router';
import { LayoutOptionsModel } from '../../models/layout.model';


export class BaseComponent {

  layoutOptionsModel:LayoutOptionsModel | undefined
  constructor(private _activatedRoute:ActivatedRoute) {
    this.BuildLayout(_activatedRoute);
  }
  
  BuildLayout(router: ActivatedRoute){
this._activatedRoute.data.subscribe(res =>{
  this.layoutOptionsModel = res["layout"];
});
  }

}
