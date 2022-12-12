import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Signin } from 'src/app/core/models/signin';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent  implements OnInit, AfterViewInit{
   signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;

  // set the currenr year
  year: number = new Date().getFullYear();
  usersignin:Signin=new  Signin() ;
  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private _service:APIService,
    private router: Router,
    private notifierService: NotifierService) { }

  ngOnInit() {
    document.body.setAttribute('class', 'authentication-bg');

    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      dob: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    debugger;
    var data=this.signupForm.value;
    this._service.registor(this.signupForm.value)    
    .subscribe(
      data => {

        if(data.success==true)
        {
          this.notifierService.notify('success', 'Successfully Registered');
        localStorage.setItem("Email",data.result.emailAddress)
        localStorage.setItem("Password",this.signupForm.value.password)
      }
          this.router.navigate(['/verify-code']);
  
  
      },
      error => {
debugger;
        this.error = error ? error : '';
        
      });
}
}


