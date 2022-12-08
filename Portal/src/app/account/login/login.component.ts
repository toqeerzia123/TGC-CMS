import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Signin } from 'src/app/core/models/signin';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  signinform: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  // set the currenr year
  year: number = new Date().getFullYear();
  usersignin:Signin=new  Signin() ;
  constructor(  private route: ActivatedRoute,
    private formBuilder: FormBuilder, 
    private _service:APIService,
    private router: Router,
    private notifierService: NotifierService
    ) { }

  ngOnInit(): void {
    this.signinform = this.formBuilder.group({
      userNameOrEmailAddress: ['', Validators.required],
      password: ['', Validators.required],
    });
   
  }
  onSubmit() {
    debugger;
   
          this._service.login(this.signinform.value).subscribe(          
            data => {
              this.notifierService.notify('success', 'Successfully LogInn');
              localStorage.setItem("token",data.result.accessToken)
              this.router.navigate(['/dashboard']);
              
            },
            error => {
                      debugger;
              this.error = error ? error : '';
              alert(error.error.error.details )
              this.notifierService.notify('error','error.error.error.details');
              if(error.error.error.details=="Your email address is not confirmed. You can not login.")
              {
                this.notifierService.notify('warn', 'Your email address is not confirmed. You can not login');
                this.router.navigate(['/verify-code']);
              }

            });
      }
         // this.router.navigate(['/verify-code']);
    }
  
      


