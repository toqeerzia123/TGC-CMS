import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { FileParameter, PostServiceProxy } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';
import { FileUploader } from 'ng2-file-upload';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { pipe } from 'rxjs';

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
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html'
})

export class TournamentCreateComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  post: CreatePostDto = new CreatePostDto();
  files:FileParameter[];
  singleFile:FileParameter;
  @Output() onSave = new EventEmitter<any>();
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;
  _url:string = 'https://evening-anchorage-3159.herokuapp.com/api/';
  constructor(
    injector: Injector,
    public _service: PostServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.uploader = new FileUploader({
      url: this._url,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
 
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
 
    this.response = '';
 
    this.uploader.response.subscribe( res => this.response = res );
  }

  handleFileInput(event: any){
    debugger;
    event.target.files.forEach(element => {
      this.singleFile.fileName=element.name;
      this.singleFile.data=element;
      this.files.push(this.singleFile);
    });
  }

  save(): void {
    this.saving = true;

    var postDate = moment(this.post.postDate);
    
    this._service.create(this.post.title,this.post.description,postDate,this.post.prize,this.post.amount,this.post.elimination,2,1,this.files).subscribe(
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