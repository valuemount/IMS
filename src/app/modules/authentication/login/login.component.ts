import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;

  constructor(private loginService:LoginService,private router:Router) { 
    this.loginForm = new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    })
  }

  post()
  {
    this.loginService.postlogin(this.loginForm.value).subscribe(
      (value:any)=>{
                    localStorage.setItem("token",value.token)
                //  this.router.navigateByUrl("/dashboard")
                    console.log(value)
                    alert("login success")
                    },
      (error:any)=>{
                    alert("error")
                   }
    )
  }

  ngOnInit(): void {
  }

}
