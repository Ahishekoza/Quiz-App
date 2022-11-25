import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import Swal from 'sweetalert2';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  // public Editor=ClassicEditor;

  qId: any;
  title:any;

  quizData={
    quize:{

      qId:''
    },
    content:'',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    ans:''
  };
  constructor(private route:ActivatedRoute,private questionService:QuestionServiceService) { }

  ngOnInit(): void {
    this.qId=this.route.snapshot.params['qId']
    this.title=this.route.snapshot.params['title']
    this.quizData.quize['qId']=this.qId

  }

  public formSubmit(){

    if(this.quizData.content.trim()=='' || this.quizData.content==null){
      Swal.fire('Question content must be enteted!!')
      return;
    }


    this.questionService.addQuestions(this.quizData).subscribe(
      (data:any)=>{
        this.quizData=data
        Swal.fire('Data added successfully')

        this.quizData={
          quize:{
      
            qId:''
          },
          content:'',
          image:'',
          option1:'',
          option2:'',
          option3:'',
          option4:'',
          ans:''
        };
        
      },
      (error:any)=>{
        Swal.fire('Unable to fetch data')
      }
    )
  }

}
