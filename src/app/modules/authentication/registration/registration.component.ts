import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from 'src/app/services/Registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  router: any;

  constructor(private registrationService:RegistrationService) { }


  RegistrationForm:FormGroup=new FormGroup
  ({
    FirstName:new FormControl(),
    LastName:new FormControl(),
    Email:new FormControl(),
    password:new FormControl(),
    repeatpassword:new FormControl(),
  })

  Register:any=[]
  submit()
  {
    this.registrationService.postRegistration(this.RegistrationForm.value).subscribe
    (
      (value:any)=>
      {
        alert("Saved SUccessfully");this.router.navigateByUrl("login")
        console.log(value);
        (error:any)=>
        {
          alert("error")
        }
      }
    )
  }

  ngOnInit(): void {
  }


}
