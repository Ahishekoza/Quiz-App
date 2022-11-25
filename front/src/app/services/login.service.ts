import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  public generateToken(LoginData:any){
    return this.http.post(`${baseUrl}/generate-token`,LoginData)
  }

  // Mainly will user for updating password
  public upateAmin(LoginData:any){
    return this.http.post(`${baseUrl}/user/`,LoginData);
  }
  
  // Storing token in LocalStorage
  public loginUser(token:any){
    localStorage.setItem('token', token);
    return true;
  }

  // Checking weather the person is logined or not
  public isLogin(){
    let tokenstr=localStorage.getItem('token')
    if(tokenstr==undefined || tokenstr==''||tokenstr==null){
      return false;
    }
    else{
      return true;
    }
  }

  // Logging Out the user
  public loggedOut(){

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // Get Token
  public getToken(){
  
     return localStorage.getItem('token');
  
  }

  // Set UserGetail
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  // Get User

  public getUser(){
    let userStr=localStorage.getItem('user');
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.loggedOut;
      console.log('Logout');
      return null;
    }
  }

  // Get User Role
  public getUserRole(){
    let user= this.getUser();
    return user.authorities[0].authority;
  }




}
