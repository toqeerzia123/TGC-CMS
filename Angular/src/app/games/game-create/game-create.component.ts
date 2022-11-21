import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { PostServiceProxy } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';
import { BsModalRef } from 'ngx-bootstrap/modal';

export class CreatePostDto {
  title: string;
  description: string;
  postDate: string;
  prize: string;
  amount: number | null;
  elimination: string;
  categoryId: number;
  displayOrderNo: number;
}

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html'
})

export class GameCreateComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  post: CreatePostDto = new CreatePostDto();
  files:[];
  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: PostServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    //this.tenant.isActive = true;
  }

  save(): void {
    this.saving = true;

    var postDate = moment(this.post.postDate);

    this._service.create(this.post.title,this.post.description,postDate,this.post.prize,this.post.amount,this.post.elimination,3,1,this.files).subscribe(
      () => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();
      },
      () => {
        this.saving = false;
      }
    );
  }
}