import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html'
})
export class InviteFriendComponent implements OnInit {

  inviteFriend:any;
  baseUrl:string | undefined;
  constructor(private _service:APIService) {
    this.baseUrl = environment.apiUrl
   }

  ngOnInit(): void {
    this.getInviteData();
  }

  getInviteData(){
    this._service.getInviteData().subscribe(
      res => {
        if(res.success){
            this.inviteFriend = res.result.items[0];
            this.inviteFriend.imagePath = this.baseUrl + "/invitefriendimages/" + this.inviteFriend.imagePath;
        }
      },
      err => {
      }
    )
  }

}
