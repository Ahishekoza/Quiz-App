import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // importing HttpClient
  constructor(private http: HttpClient) { }


  //  add User
  public addUser(user:any){

    // Calling backend Api
    return this.http.post(`${baseUrl}/user/`,user)



  }
}
