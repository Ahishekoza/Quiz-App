import { Component, OnInit } from '@angular/core';
import { ViewQuizesService } from 'src/app/services/view-quizes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-quizes',
  templateUrl: './view-all-quizes.component.html',
  styleUrls: ['./view-all-quizes.component.css']
})
export class ViewAllQuizesComponent implements OnInit {

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
  constructor(private quizService:ViewQuizesService) { }

  ngOnInit(): void {
    this.quizService.getActiveQuizes().subscribe(
      (data:any)=>{

        this.quizes=data;
        console.log(this.quizes)

      },
      (error:any)=>{

        Swal.fire('Error, printing Data')
      }
    )
  }
}
