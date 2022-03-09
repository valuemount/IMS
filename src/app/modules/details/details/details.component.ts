import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailsService } from 'src/app/services/details/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsform :FormGroup=new FormGroup({
    personalDetails:new FormGroup({
      username:new FormControl(),
      Fullname:new FormControl(),
      Lastname:new FormControl(),

    }),
    experienceDetails:new FormGroup({
      course:new FormControl(),
      years:new FormControl(),
      experience:new FormControl()

    }),
    companyDetails:new FormGroup({
      organisationname:new FormControl(),
      Location:new FormControl(),
      accountnumber:new FormControl(),

    }),
   accountDetails:new FormGroup({
    emailadress:new FormControl(),
    Phonenumber:new FormControl(),
    Birthday:new FormControl(),

   }),
   educationGapDetails:new FormArray([])
   
    
  })


  constructor(private detailsservice:DetailsService) {
    
   
   }
   
   changes()
   {
     console.log("a")
     this.detailsservice.postdetails(this.detailsform.value).subscribe(
       (value:any)=>{
        alert("succss")         
       }
     )
   }

   get educationGapDetailsArray()
   {
     return this.detailsform.get("educationGapDetails") as FormArray;
   }

   addgap()
   {
     this.educationGapDetailsArray.push(
       new FormGroup({
         from:new FormControl(),
         to:new FormControl(),
         reason:new FormControl()
       })
     )
     
   }
   delete(i:number)
   {
     this.educationGapDetailsArray.removeAt(i);
   }


  ngOnInit(): void {
  }

}
