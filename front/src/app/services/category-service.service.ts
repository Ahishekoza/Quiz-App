import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }

  public categories(){
    return this.http.get(`${baseUrl}/category/`)
  }

  public addCategory(categories:any){
    return this.http.post(`${baseUrl}/category/`,categories);
  }
  public deleteCategory(id: any){

    return this.http.delete(`${baseUrl}/category/${id}`);

  }
}
