import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { Userprofile } from 'src/app/core/models/userprofile';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.css']
})
export class DashboardheaderComponent extends BaseComponent  {
  model = new Userprofile();
  role:any;
  constructor(private _oute:ActivatedRoute,
    private jwtHelper: JwtHelperService,
    private _service:APIService,
    private router: Router) {super(_oute) }
    ngOnInit(): void {
      this. _fetchData()
  
    }
    public _fetchData() {
     
      var token = localStorage.getItem('token')
      var user = this.jwtHelper.decodeToken(token?.toString());
      debugger;
   
  const keys = Object.keys(user);
  
  this.role=user[keys[4]];
  
      this._service.getUserById(user.sub).subscribe((next: any) => {
       
         
              this.model=next.result;
      }, error => {
        console.log(error);
      });
    }

  Logout()
  {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
