import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html'
})
export class VerifyCodeComponent implements OnInit {
digit1:string;
digit2:string;
digit3:string;
digit4:string;
digit5:string;
  constructor(  private route: ActivatedRoute,
    private _service:APIService,
    private router: Router) { }

  ngOnInit( ): void {
  }
  submitdata() {
    debugger;
    var code=this.digit1+this.digit2+this.digit3+this.digit4+this.digit5;
    var ucodeverify={"VerificationCode":code,"UserName":localStorage.getItem("Email")?.toString()}
    this._service.codeVerification(ucodeverify)    
    .subscribe(
      data => {
        debugger
        if(data.success==true)
        {
          var obj={"userNameOrEmailAddress":localStorage.getItem("Email") ,"password":localStorage.getItem("Password")}
          this._service.login(obj).subscribe(          
            data => {
              debugger;
            localStorage.setItem("token",data.result.accessToken)
            this.router.navigate(['/profile-info']);
              
            },
            error => {
                      debugger;
         

            });




  
        }else{

        }
  
      },
      error => {
debugger;
        // this.error = error ? error : '';
      });
}
}
