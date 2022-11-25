import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { switchAll } from 'rxjs';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {


  category={
    title:'',
    description:'',

};
  constructor(private categories:CategoryServiceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }


  formSubmit() {
  
     if( this.category.title.trim() =='' || this.category.title==null){

      this.snack.open('Title is be required','',{
        duration:3000
      })
      return;

     }


     this.categories.addCategory(this.category).subscribe(
      (data:any)=>{
        console.log(data)
        Swal.fire('Data added Successfully');
      }
     );


  }

}
