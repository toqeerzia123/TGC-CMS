import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { PostDto, PostServiceProxy } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tournament-edit',
  templateUrl: './tournament-edit.component.html'
})

export class TournamentEditComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  post: PostDto = new PostDto();
  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: PostServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._service.get(this.id).subscribe((result: PostDto) => {
      this.post = result;
    });
  }

  save(): void {
    this.saving = true;
    var date = moment(this.post.postDate);
    this._service.update(this.post.id,[],this.post.title,this.post.description,date,this.post.prize,this.post.amount,this.post.elimination,1,1,[]).subscribe(
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
