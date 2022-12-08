import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NotifierService } from 'angular-notifier';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent implements OnInit {
  packages:any[]=[];
  Userid:number;
  packageId:number;
  selectedclass:string;
  constructor(private _service:APIService,   private notifierService: NotifierService,  private jwtHelper: JwtHelperService,    private router: Router) { }
  
  ngOnInit(): void {
    this.getallPackages();
    var token = localStorage.getItem('token')
    var user = this.jwtHelper.decodeToken(token?.toString());
    this.Userid=user.sub;
  }

  getallPackages(){
    this._service.getAllPackages().subscribe(
      res => {
        if(res.success){
            this.packages = res.result.items;
        }
      },
      err => {
      }
    )
  }

selectedpackage(packageId:number)
{
  debugger;
this.packageId=packageId;
this.selectedclass="selected";
}

  onSubmit() {
    debugger;
         var data={"userId":Number(this.Userid),"packageId":this.packageId}
          this._service.UserpackagesCreate(data).subscribe(          
            data => {
              debugger;
              this.notifierService.notify('success', 'Successfully Package Selected');

              this.router.navigate(['/dashboard']);
              
            },
            error => {
            debugger;

            });
      }

}
