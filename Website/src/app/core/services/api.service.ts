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
      link:"/watchus"
    },
    {
      caption:"Tournaments",
      link:"/tournaments"
    },
    {
      caption:"Articles",
      link:"/articles"
    },
    {
      caption:"Blogs",
      link:"/blogs"
    },
    {
      caption:"FAQs",
      link:"/faqs"
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
      caption:"Contact Us",
      link:"/contact-support"
    },
    {
      caption:"Social Links",
      link:"/social-links"
    },
    {
      caption:"Privacy Policy",
      link:"/privacy-policy"
    },
    {
      caption:"Terms of Services",
      link:"/terms-of-services"
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
      link:"www.facebook.com"
    },
    {
      caption:"fab fa-instagram",
      link:"www.instagram.com"
    },
    {
      caption:"fab fa-twitter",
      link:"www.twitter.com"
    },
    {
      caption:"fab fa-twitter",
      link:"www.youtube.com"
    },
    {
      caption:"fab fa-twitter",
      link:"https://discord.com"
    },
    {
      caption:"fab fa-twitter",
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
      descriptionOne:"<p>We are one of the prominent web 3.0 game development companies. We strive to provide creative gaming services where you can have a real  experience in the virtual world by using next-generation Web 3.0 technology to provide innovative and beneficial solutions. We have a technical team of experts that can help you build a platform that delivers high-quality results. The next generation of internet architecture aims to bring the digital and physical worlds closer together.</p>",
      descriptionTwo:"<p>Our team of experienced Web3.0 developers works for your vision and develops applications based on the project requirements. Our passionate developers will bring you the best Web3 application that suits your business model and revenue stream. </p><p>We provide you with complete cycle Web3 game development. We’re no strangers to blockchain and cryptocurrencies, and we positively understand our NFTs</p><p>Our dream is to create a vibrant Web 3.0 Community for gamers and newcomers, with its very own Marketplace and Play and Earn environment that is reachable for all.</p>",
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
      title:"The Future is Here.",
      descriptionOne:"<p>The future is here, and it is inevitable that we will have to deal with it. The Metaverse, powered by artificial intelligence, has been working hard to make the lives of its users easier. The Metaverse is a virtual reality that is created by the integration of the internet and gaming. The Metaverse offers a wide range of possibilities for businesses to create an immersive experience for their customers.</p> <p>As a metaverse development company, our team builds applications that are a part of your ecosystem and make up your metaverse. With a deep experience in technologies such as blockchain, AI, and AR/VR, our team develops metaverse applications that are not only user-friendly but features attributes such as automation, transparency, and privacy.</p>",
      descriptionTwo:"<p>For your business to take advantage of the next wave of gaming, we offer innovative metaverse game development services. A team of blockchain and other leading technology professionals helps you develop an extraordinary gaming platform that not only satisfies your users' visual needs but also provides a hassle-free experience for them. We provide metaverse integration services that allow us to enhance your metaverse by improving its functionalities and driving a more immersive 3D experience.</p><p>Our metaverse integration offerings permit us to make your metaverse characteristic-wealthy with progressed functionalities and power a more immersive three-D experience. Our group builds or implements all answers within the form of information integration, API integration, gear integration, DApp integration, NFT marketplace integration, and many others. That upload fee for your average surroundings.</p>",
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