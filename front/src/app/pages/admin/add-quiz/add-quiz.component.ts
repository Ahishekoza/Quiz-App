import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ViewQuizesService } from 'src/app/services/view-quizes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {


  categories=[
    {
      cId:23,
      title:"Programming",
    },
    {
      cId:23,
      title:"Programming",
    }
]

  QuizData={
    title:'',
    description:'',
    maxMarks:'',
    noOfQuestions:'',
    active: true,
    category:{
      cId:''
    }    
  }

  constructor(private category_:CategoryServiceService,private quiz_:ViewQuizesService) { }

  ngOnInit(): void {
    this.category_.categories().subscribe(
      (data:any)=>{
        this.categories=data
      },
      (error:any)=>{
        Swal.fire('Error !! , Data was not able to load');
      }
    )
  }

  public formSubmit(){


    if(this.QuizData.title.trim()=='' || this.QuizData.title==null ){
      Swal.fire('Title is required')
      return;
    }

    // if(this.QuizData.active==false){
    //   Swal.fire('Select True , If you want to publish')
    //   return
    // }


    this.quiz_.addQuize(this.QuizData).subscribe(
      (data:any)=>{

        console.log(data)
        Swal.fire('Data added successfully')
        

        this.QuizData={
          title:'',
          description:'',
          maxMarks:'',
          noOfQuestions:'',
          active: true,
          category:{
            cId:''
          }    
        }






      }
    )
  }

  
}
