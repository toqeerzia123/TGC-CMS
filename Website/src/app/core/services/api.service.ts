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

  getNavigations():Observable<any>{
    let navigations = [{
      caption:"Watch",
      link:""
    },
    {
      caption:"TeamFinder",
      link:""
    },
    {
      caption:"Articles",
      link:""
    },
    {
      caption:"Blogs",
      link:""
    },
    {
      caption:"AboutUs",
      link:""
    },
  ];

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }

  getSupportLinks():Observable<any>{
    let navigations = [{
      caption:"Q/A",
      link:""
    },
    {
      caption:"Work With Us",
      link:""
    },
    {
      caption:"Privacy Policy",
      link:""
    },
    {
      caption:"User Guide",
      link:""
    }
  ];

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }

  getSocialLinks():Observable<any>{
    let navigations = [{
      caption:"fab fa-facebook-f",
      link:""
    },
    {
      caption:"fab fa-instagram",
      link:""
    },
    {
      caption:"fab fa-twitter",
      link:""
    },
    {
      caption:"fab fa-tiktok",
      link:""
    }
  ];

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }

  getFaqs():Observable<any>{
    let navigations = [{
      caption:"Test question one hjj sadjahjdhjhsa djashdjsadj sahdjas djsah djsah djsahd ja hdjsa hdsaj djahsdsa djhsaj a djsa hdjsahd."
    },
    {
      caption:"Test question two."
    },
    {
      caption:"Test question three."
    },
    {
      caption:"Test question four."
    },
    {
      caption:"Test question five."
    }
  ];

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }
}