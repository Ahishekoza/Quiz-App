import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

LoginData={

    username:'',
    password:''
  };


  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {}

  formSubmit(): void{

    if(this.LoginData.username.trim()=='' || this.LoginData.username==null){

      this.snack.open('Username is required',' ',{
        duration:3000,
      });
      return;
    }



    this.login.generateToken(this.LoginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);


        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            // First need to do authorization in header 
            this.login.setUser(user);
            console.log(user);

            //  redirect page role wise

            if(this.login.getUserRole()=="Admin"){

              this.router.navigate(['admin']);


            }
            else if(this.login.getUserRole()=="Normal"){
              
              this.router.navigate(['user-dashboard']);

            }
            else{
              this.login.loggedOut();
            }
          }
        )

      },
      (error:any)=>{

        console.log(error);
        this.snack.open('Invalid details !! Try again','',{
          duration:3000,
        })
        return;
      }

    );
  }
}
