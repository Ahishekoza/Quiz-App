import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { ViewQuizesService } from 'src/app/services/view-quizes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {

  quizes=[
    {

      qId:'',
      title:'Basic Programming',
      description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications.',
      maxMarks:'50',
      noOfQuestions:'10',
      category:{
        title:'Python Programming'
      }

    },
    {
      qId:'',
      title:'Basic Programming',
      description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications.',
      maxMarks:'50',
      noOfQuestions:'10',
      category:{
        title:'Python Programming'
      }
    }
  ]
  constructor(private quizService:ViewQuizesService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.quizService.getallQuizes().subscribe(
      (data:any)=>{

        this.quizes=data;
        console.log(this.quizes)

      },
      (error:any)=>{

        Swal.fire('Error, printing Data')
      }
    )
  }

  public deleteQuiz(qId:any){


    Swal.fire({
      icon:'info',
      title:'Are you sure',
      confirmButtonText:'Delete',
      showCancelButton:true,

    }).then((result)=>{
      if(result.isConfirmed){
            this.quizService.deleteQuiz(qId).subscribe(
      (data)=>{

        this.quizes=this.quizes.filter((quiz)=> quiz.qId!=qId);
        this.snack.open('Successfully Quiz Deleted','',{
          duration:3000
        });
        
      },
      (error)=>{

        console.log()

      }
    )
      }
    })

 


  }




}
