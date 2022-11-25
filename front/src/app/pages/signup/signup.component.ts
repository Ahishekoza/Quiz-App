import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //  Calling userService
  constructor(private userService:UserService,private router : Router) { }


  public user={
    username:"",
    password:"",
    firstName:"",
    lastName:"",
    email:"",
    phone:""
  }

  ngOnInit(): void {}
    
    formSubmit(){


      console.log(this.user)
      if(this.user.username=='' || this.user.username==null){
        alert('User is required !')
        return;
      }

    

      this.userService.addUser(this.user).subscribe(
        (data)=>{
          console.log(data);
          alert('Success');
          this.router.navigate(['signup']);
          return;

         
        },
        (error)=>{
          console.log(error);
          alert('Error!');
        }
      )
    }
    



}
