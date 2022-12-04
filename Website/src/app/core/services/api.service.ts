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


  getContactSupportPageData():Observable<any>{
    let navigations = {
      title:"How Does Contact & Support Powers the Future of Gaming?",
      descriptionOne:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      descriptionTwo:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      imageUrl : ""
    };

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }

  getGameDevPageData():Observable<any>{
    let navigations = {
      title:"How Does Game Dev Powers the Future of Gaming?",
      descriptionOne:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      descriptionTwo:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      imageUrl : ""
    };

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }

  getMetaversePageData():Observable<any>{
    let navigations = {
      title:"How Does Metaverse Powers the Future of Gaming?",
      descriptionOne:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      descriptionTwo:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      imageUrl : ""
    };

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }

  getSocialMediaLinkPageData():Observable<any>{
    let navigations = {
      title:"How Does Social Media Link Powers the Future of Gaming?",
      descriptionOne:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      descriptionTwo:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      imageUrl : ""
    };

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }

  getVideoStreamData():Observable<any>{
    let navigations = {
      title:"How Does Video Stream Powers the Future of Gaming?",
      descriptionOne:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      descriptionTwo:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      imageUrl : ""
    };

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }

  getTokenomicsPageData():Observable<any>{
    let navigations = {
      title:"How Does Tokenomics Powers the Future of Gaming?",
      descriptionOne:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      descriptionTwo:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      imageUrl : ""
    };

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }

  getLegalPageData():Observable<any>{
    let navigations = {
      title:"How Does Legal Powers the Future of Gaming?",
      descriptionOne:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      descriptionTwo:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      imageUrl : ""
    };

  let obj = new Observable(observer => {
    observer.next(navigations)
    observer.complete()
  });
  return obj;
    // var url = environment.apiUrl  + '/api/services/app/Navigatoins/GetAll';
    // return this.http.get<any>(url);
  }
  
}