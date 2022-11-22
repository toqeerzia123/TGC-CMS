import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) { }

  // Department
  getTournaments(): Observable<any> {
    var url = environment.apiUrl  + '/api/services/app/Post/GetAllPostsByCategory?PostType=2';
    return this.http.get<any>(url);
  }

  getGames(): Observable<any> {
    var url = environment.apiUrl  + '/api/services/app/Post/GetAllPostsByCategory?PostType=3';
    return this.http.get<any>(url);
  }

  getLatestNews(): Observable<any> {
    var url = environment.apiUrl  + '/api/services/app/Post/GetAllPostsByCategory?PostType=4';
    return this.http.get<any>(url);
  }
}