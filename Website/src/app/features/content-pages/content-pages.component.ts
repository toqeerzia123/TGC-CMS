import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-pages',
  templateUrl: './content-pages.component.html'
})
export class ContentPagesComponent implements OnInit {

  @Input() data : any[] = []
  constructor() { }

  ngOnInit(): void {
  }

  loadImage(index:number){
    let images = this.data[index].postImages;
    return images?.length > 0 ? {'background-image':'url('+ images[0].imageUrl +')'} : {'background-image':'url(../../../assets/images/default-image.jpg)'};
 }

}
