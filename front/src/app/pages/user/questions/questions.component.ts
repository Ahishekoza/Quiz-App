import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ViewQuizesService } from 'src/app/services/view-quizes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  qId:any;
  quizData:any;

  constructor(private route:ActivatedRoute,private quizService:ViewQuizesService,private router_:Router) { }

  ngOnInit(): void {

    this.qId=this.route.snapshot.params['qId']

    this.quizService.getSingleQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quizData=data
        console.log(this.quizData)
      }
      ,(error:any)=>{
        Swal.fire('We were unable to fetch data')
      }
    )
   
  }

  public StartNot(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't save`,
      icon:'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.router_.navigate(['/start/'+this.quizData.qId])

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}


