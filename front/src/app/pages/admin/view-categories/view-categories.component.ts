import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[
    {
        cId:27,
      title:"This is java Program",
      description:"Lets Have Fun"
    },
    {
      cId:27,
      title:"This is java Program",
      description:"Lets Have Fun"
    }
  ]
parseInt: any;
  constructor(private _category:CategoryServiceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);

      }
      
      )};


  public deleteFun(cId: any){
    console.log("Hi")
    this._category.deleteCategory(cId).subscribe(
      (data)=>{
        this.snack.open('Success,Category Deleted','',{
          duration:3000
        });
      },
      (error)=>{

        console.log()

      }

    )
  }

}


