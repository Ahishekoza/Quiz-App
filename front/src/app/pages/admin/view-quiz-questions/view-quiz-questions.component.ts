import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {



  qId=0;
  title=0;
  question:any;

  constructor(private route:ActivatedRoute,private questionService:QuestionServiceService) { }

  ngOnInit(): void {

    this.qId=this.route.snapshot.params['qId']

    this.title=this.route.snapshot.params['title']
    
    this.questionService.getQuestionQuiz(this.qId).subscribe(
      (data:any)=>{
        this.question=data
        console.log(this.question)
      },
      (error:any)=>
      {
        Swal.fire('Data was unable to load')
        
      }
    )

  }

  public deleteform(quesId:any){
    this.questionService.deleteQuestion(quesId).subscribe(
      (data:any)=>{
        this.question=this.question.filter((questions:any) => questions.quesId!=quesId)
        Swal.fire('Data deleted Successfully')
      }
    )
  }


}
