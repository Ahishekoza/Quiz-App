import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-star-quiz',
  templateUrl: './star-quiz.component.html',
  styleUrls: ['./star-quiz.component.css']
})
export class StarQuizComponent implements OnInit {

  qId:any;
  questions:any;
  timmer:any;
  constructor(private route:ActivatedRoute,private questionService:QuestionServiceService,private location_:LocationStrategy) { }

  ngOnInit(): void {
    // this.preventBackButton();


    this.qId=this.route.snapshot.params['qId']
    this.loadQuestion();
  }
 

  public loadQuestion(){

    this.questionService.getQuestionQuiz(this.qId).subscribe(
      (data:any)=>{
        this.questions=data

        this.timmer=this.questions.length*2*60

        console.log(this.questions)
        this.questions.forEach((q:any)=>{
          q['givenAnswer']='';
        });

        // console.log(this.questions)
      },
      (error:any)=>{

        console.log("Error")
      }
    )
  }



  public SubmitQuiz(){


    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't save`,
      icon:'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

      // this.questions.forEach(q=>{

      //   if
        
      // });

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

  startQuiz(){
    let t = window.setInterval(()=>{
      if(this.timmer<=0){
        this.SubmitQuiz();
        clearInterval(t);
      }
      else{
        this.timmer--;
      }
    },1000)
  
  }

}
