import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ViewQuizesService } from 'src/app/services/view-quizes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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


  constructor(private _route:ActivatedRoute,private quizeService:ViewQuizesService,private category_:CategoryServiceService) { }

  qId=0;
  quizData: any;
  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qId'];
   
    this.quizeService.getSingleQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quizData=data;
        console.log(this.quizData);
      },
      (error:any)=>
      {
        Swal.fire('Data was unable to load')
      }

    )

    this.category_.categories().subscribe(
      (data:any)=>{
        this.categories=data
      },
      (error:any)=>
      {

        Swal.fire('Unable to fetch data')
      }

    )
    
  }

  public UpdateQuiz(){

    if(this.quizData.active==false){
      Swal.fire('Select True if you want to publish')
      return;
    }
    this.quizeService.addQuize(this.quizData).subscribe(
      (data:any)=>{
        Swal.fire('Data Updated Succesfully') 
      },
      (error:any)=>{
        Swal.fire('Error Occured')
      }
    )
  }

}
