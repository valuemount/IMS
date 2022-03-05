import { Component, OnInit } from '@angular/core';
import { GroupshareService } from 'src/app/services/groupshare/groupshare.service';

@Component({
  selector: 'app-groupshare',
  templateUrl: './groupshare.component.html',
  styleUrls: ['./groupshare.component.css']
})
export class GroupshareComponent implements OnInit {

  posts:any=[];
  message:string="";

  constructor(private groupshareservice:GroupshareService) { 
    this.groupshareservice.getposts().subscribe
    (
      value=>
      {
        this.posts=value;
      },
      error=>
      {
        alert("error");
      }
    )
  }

    enter()
    {
      let payload = {
        'timestamp': new Date(),
        'body': this.message
      }
    this.groupshareservice.postmessage(payload).subscribe
    (
      value=>
      {
        alert("success");
      },
      error=>
      {
        alert("error");
      }
    )
    }
    
  

  ngOnInit(): void {
  }

}
