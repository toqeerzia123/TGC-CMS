import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { FileParameter, PostDto, PostServiceProxy } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html'
})
export class BlogEditComponent extends AppComponentBase
implements OnInit {
saving = false;
post: PostDto = new PostDto();
files:FileParameter[]=[];
id: number;
post_categoryId : number = 0;
@Output() onSave = new EventEmitter<any>();
localPostDate : string="";
removedFiles : number[] = [];
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
    this.localPostDate = result.postDate.format("YYYY-MM-DDTHH:mm:ss");

    //render images list
    this.post.postImages.forEach(element => {

      let imgArrList = element.imageUrl.split('/');

      let imgName = imgArrList[imgArrList.length - 1];
      
      var obj = {
        "data": null,
        "fileName": imgName,
        "dimension":664 + '*' + 516,
        "id":element.id
      }

      this.files.push(obj);
    });
  });
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
  let file = this.files[index];
  
  this.files.splice(index,1);
}


fileChangeEvent(fileInput: any) {
  //this.imageError = null;
  if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      // const max_size = 20971520;
      // const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 516;
      const max_width = 664;

      // if (fileInput.target.files[0].size > max_size) {
      //     // this.imageError =
      //     //     'Maximum size allowed is ' + max_size / 1000 + 'Mb';

      //     return false;
      // }

      // if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
      //     //this.imageError = 'Only Images are allowed ( JPG | PNG )';
      //     return false;
      // }
      const reader = new FileReader();
      reader.onload = (e: any) => {
          const image = new Image();
          image.src = e.target.result;
          image.onload = rs => {
              const img_height = rs.currentTarget['height'];
              const img_width = rs.currentTarget['width'];

              console.log(img_height, img_width);


              if (img_height >= max_height && img_width >= max_width) {
                
                for (let i = 0; i < fileInput.target.files.length; i++) {

                  var obj = {
                          "data": fileInput.target.files[i],
                          "fileName": fileInput.target.files[i].name,
                          "dimension":img_width + '*' + img_height
                        }
                        this.files.push(obj);
                      }

              } else {
                alert("Invalid image upload");
              }
          };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
  }
}


save(): void {
  this.saving = true;
  var date = moment(this.post.postDate);
  this.post.prize="";
  this.post.amount=0;
  this.post.elimination="";
  this._service.update(this.post.id,[],this.post.title,this.post.description,date,this.post.prize,this.post.amount,this.post.elimination,this.post_categoryId,1,[]).subscribe(
    () => {
      this.notify.info(this.l('UpdatedSuccessfully'));
      this.bsModalRef.hide();
      this.onSave.emit();
    },
    () => {
      this.saving = false;
    }
  );
}
}
