import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ViewQuizesService {


  constructor(private http:HttpClient) { }

  public getallQuizes(){
    return this.http.get(`${baseUrl}/quiz/`)
  }

  public addQuize(QuizData:any){
    return this.http.post(`${baseUrl}/quiz/`,QuizData);
  }

  public deleteQuiz(qId:any){
    return this.http.delete(`${baseUrl}/quiz/${qId}`)
  }


  // Get a single Quiz

  public getSingleQuiz(qId:any){
    return this.http.get(`${baseUrl}/quiz/${qId}`);
  }


  public getQuizByCategory(cId:any){
    return this.http.get(`${baseUrl}/quiz/category/${cId}`)
  }

  
  // ONLY TRUE QUIZES WILL GET DISPLAY
  public getActiveQuizes(){
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  public getActiveQuizWithCategory(cId:any){
    return this.http.get(`${baseUrl}/quiz/category/active/${cId}`);
  }





  // public updateQuiz(QuizData:any){
  //   return this.http.put()
  // }
}
