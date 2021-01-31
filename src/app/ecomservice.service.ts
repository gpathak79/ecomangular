import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class EcomserviceService {

 
  firstName: any = "";
  password: any = ""
  private url1 = 'https://jsonplaceholder.typicode.com/posts';
  posturl = "http://localhost:8103/api/user"
  loginurl = environment.baseUrl +"/login"
  signupurl = environment.baseUrl+"/reg"
  geturl = "http://localhost:8103/api/users"
  forgoturl = environment.baseUrl+"/forget_password"
  recoverurl=environment.baseUrl+"/recover_password"
  producturl=environment.baseUrl+"/show_product"
  profileurl=environment.baseUrl+"/user_profile"
  editprofileurl =environment.baseUrl+"/user_edit_profile"
  value:any=""


  constructor(private httpClient: HttpClient) { }

  EDITPROFILE(value:any):Observable<any>{
    console.log(value)
    var token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': '' + token,
       
      })
    };
    return this.httpClient.post<any>(this.editprofileurl,value,httpOptions)
  }

  USERPROFILE():Observable<any>{
   
    var token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': '' + token,
       
      })
    };
    return this.httpClient.get<any>(this.profileurl,httpOptions)
  }

  PRODUCTDATA():Observable<any>{
    return this.httpClient.get<any>(this.producturl)
  }

  RECOVERPASSWORD(value:any,tokendata:any): Observable<any> {
    let post ={
      "password":value.password,
      "confirmPass":value.confirmPass,
      "tokendata":tokendata
    }
    return this.httpClient.post<any>(this.recoverurl,post)
  }

  FORGOTUSER(value:any): Observable<any> {
    console.log(value)
     var token = localStorage.getItem("token");
    const httpOptions = new HttpHeaders({
        'Authorization': '' + token,
        'Content-Type': 'application/json',
      });
    return this.httpClient.post<any>(this.forgoturl,value)
  }

  SIGNUPUSER(value:any): Observable<any> {
    console.log(value)
    return this.httpClient.post<any>(this.signupurl,value)
  }

  LOGINUSER(value:any): Observable<any> {
    // let post = {
    //   "email": email,
    //   "password": password
    // }
    console.log(value)
    return this.httpClient.post<any>(this.loginurl,value)
  }
  // handleError(error:HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);
  // }

  Hello(): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  createPost(): Observable<any> {
    let post = { title: "hello" };
    return this.httpClient.post<any>(this.url1, post);
  }

  ADDUSER(data: any): Observable<any> {
  
    return this.httpClient.post<any>(this.posturl, data)
  }

  GETUSER(): Observable<any> {
    return this.httpClient.get<any>(this.geturl);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(this.posturl + `?id=${id}`)
  }

  UPDATEUSER(data: any) {
    let post = { "email": data.email, "firstName": data.firstName };
    return this.httpClient.patch(this.posturl + `?id=${data._id}`, post)
  }

  PostData(data: any
  ) {
    //       const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/xml',
    //   })
    // };
    let post = { "firstName": data };
    return this.httpClient.patch(this.posturl+`?id=5ffeb8e80b6e7a0da25d99d8`, post)
  }
}

