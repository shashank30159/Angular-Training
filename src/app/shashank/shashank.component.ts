import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shashank',
  templateUrl: './shashank.component.html',
  styleUrls: ['./shashank.component.css']
})
export class ShashankComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  
  customer={
  name : 'shashank',
  age : 21,
  truth : true,
  array: [10, 20, 30, 40],
  numAndString:[1, 'shashank'],
  allType:true,
  g:10
  }

}
