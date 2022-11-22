import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { FileParameter, PostServiceProxy } from '@shared/service-proxies/service-proxies';
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
  selector: 'app-announcement-create',
  templateUrl: './announcement-create.component.html'
})

export class AnnouncementCreateComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  post: CreatePostDto = new CreatePostDto();
  files:FileParameter[]=[];
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

  handleFileInput(event: any){
    for (let i = 0; i < event.target.files.length; i++) {

var g = event.target.files[i];
var obj = {
        "data": event.target.files[i],
        "fileName": event.target.files[i].name
      }
      this.files.push(obj);
    }
  }
  removeFile(index){
    this.files.splice(index,1);
  }
  save(): void {
    this.saving = true;

    var postDate = moment(this.post.postDate);

    this._service.create(this.post.title,this.post.description,postDate,"prize",600,"single",3,1,this.files).subscribe(
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