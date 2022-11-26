import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/components/base/base.component';

@Component({
  selector: 'app-watchus',
  templateUrl: './watchus.component.html'
})
export class WatchusComponent extends BaseComponent {

  constructor(private _router:Router) {super(_router) }

}
