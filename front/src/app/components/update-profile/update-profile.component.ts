import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  id:any;
  userData:any;
  constructor(private loginService:LoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']

    this.loginService.getCurrentUser().subscribe(
      (data:any)=>{
        this.userData=data
      }
    )
  }
  public updatePassword(){
    this.loginService.upateAmin(this.userData).subscribe(
      (data:any)=>{
        Swal.fire('Password update successfully')
      }
      ,(error)=>{
      
        Swal.fire('Fail to update password')
      }
    )
  }

}
