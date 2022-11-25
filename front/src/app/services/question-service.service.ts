import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http:HttpClient) { }

  public getQuestionQuiz(qId:any){

    return this.http.get(`${baseUrl}/questions/quiz/${qId}`)

  }

  public addQuestions(QuestionData:any){
    return this.http.post(`${baseUrl}/questions/`,QuestionData)
  }

  public deleteQuestion(quesId:any){
    return this.http.delete(`${baseUrl}/questions/${quesId}`)
  }
}
