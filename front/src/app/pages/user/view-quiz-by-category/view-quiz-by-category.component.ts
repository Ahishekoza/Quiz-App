import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewQuizesService } from 'src/app/services/view-quizes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-by-category',
  templateUrl: './view-quiz-by-category.component.html',
  styleUrls: ['./view-quiz-by-category.component.css']
})
export class ViewQuizByCategoryComponent implements OnInit {

  id=0;
  quizeData:any;
  constructor(private _route:ActivatedRoute,private quizService:ViewQuizesService) { }

  ngOnInit(): void {

    this.id=this._route.snapshot.params['cId'];
    
    this.quizService.getActiveQuizWithCategory(this.id).subscribe(
      (data:any)=>{

        this.quizeData=data;
        console.log('loaded')

      },(error)=>{
        Swal.fire('Unable to fetch')
      }
    )
  }

}
