import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Userprofile } from 'src/app/core/models/userprofile';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html'
})
export class ProfileInfoComponent implements OnInit {
  model = new Userprofile();
  form: FormGroup;
  constructor(   private _service:APIService,
    private jwtHelper: JwtHelperService,
    private router: Router) { }

  ngOnInit(): void {
    this. _fetchData()
  }
  public _fetchData() {
    debugger
    var token = localStorage.getItem('token')
    var user = this.jwtHelper.decodeToken(token?.toString());

    this._service.getUserById(user.sub).subscribe((next: any) => {
      debugger;
            console.log(next)
            this.form = new FormGroup({
              id: new FormControl(next.result.id),
              userName: new FormControl(next.result.userName),
              fullName: new FormControl(next.result.fullName),
              country: new FormControl(next.result.country),
              about: new FormControl(next.result.about),
              dob: new FormControl(next.result.dob),
              timeZone: new FormControl(next.result.timeZone),
              gender: new FormControl(next.result.gender),
      
            });

    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    debugger;
          this._service.updateUserProfile(this.form.value).subscribe(          
            data => {
           debugger;
           var data2=data;
           this.router.navigate(['/pricing']);
            },
            error => {

            });
      }
}
