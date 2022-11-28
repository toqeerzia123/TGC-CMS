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
}