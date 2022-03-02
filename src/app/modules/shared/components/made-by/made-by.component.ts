import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-made-by',
  templateUrl: './made-by.component.html',
  styleUrls: ['./made-by.component.css']
})
export class MadeByComponent implements OnInit {

  @Input() name: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
