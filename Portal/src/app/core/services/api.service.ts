import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) { }

  getPostsByCategory(categId:number): Observable<any> {
    var url = environment.apiUrl  + '/api/services/app/Post/GetAll?PostType=' + categId;
    return this.http.get<any>(url);
  }

  getPostsDetailsById(id:number): Observable<any> {
    var url = environment.apiUrl  + '/api/services/app/Post/Get?Id=' + id;
    return this.http.get<any>(url);
  }

  getAllCategories():Observable<any>{
    var url = environment.apiUrl  + '/api/services/app/PostCategory/GetAll';
    return this.http.get<any>(url);
  }

  getAllPackages():Observable<any>{
    var url = environment.apiUrl  + '/api/services/app/Package/GetAll';
    return this.http.get<any>(url);
  }

  getSliderData():Observable<any>{
    var url = environment.apiUrl  + '/api/services/app/Slider/GetAll';
    return this.http.get<any>(url);
  }

  getPromotionData():Observable<any>{
    var url = environment.apiUrl  + '/api/services/app/Promotion/GetAll';
    return this.http.get<any>(url);
  }
  getInviteData():Observable<any>{
    var url = environment.apiUrl  + '/api/services/app/InviteFriendService/GetAll';
    return this.http.get<any>(url);
  }
  login(form:any){
  
    return this.http.post<any>(environment.apiUrl+'/api/TokenAuth/Authenticate',form)
  }
  registor(form:any){
    debugger;
    return this.http.post<any>(environment.apiUrl+'/api/services/app/User/CreateTargetUser',form)
  }
  codeVerification(code:any){
    debugger;
    return this.http.post<any>(environment.apiUrl+'/api/services/app/User/EmailCodeVerification',code)
  }
  resendVerificationCode(form:any){
    debugger;
    return this.http.post<any>(environment.apiUrl+'/api/services/app/User/ReSendEmailVerificationCode',form)
  }

  getUserById(id:any){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
    
    return this.http.get<any>(environment.apiUrl+'/api/services/app/User/Get?id='+id,httpOptions)
  }
  updateUserProfile(data:any){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
    
    return this.http.put<any>(environment.apiUrl+'/api/services/app/User/Update',data,httpOptions)
  }
  UserpackagesCreate(data:any){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
    
    return this.http.post<any>(environment.apiUrl+'/api/services/app/UserPackage/Create',data,httpOptions)
  }
  GetUserPackage(id:any){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
    
    return this.http.get<any>(environment.apiUrl+'/api/services/app/UserPackage/getUserPackages?input='+id,httpOptions)
  }
}