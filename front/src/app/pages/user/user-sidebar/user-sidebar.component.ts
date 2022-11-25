import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  category:any;

  constructor(private categories:CategoryServiceService) { }

  ngOnInit(): void {

    this.categories.categories().subscribe(
      (data:any)=>{
        this.category=data
      },
      (error)=>{

        Swal.fire('Unable to load data')
      }
    )
  }

}
