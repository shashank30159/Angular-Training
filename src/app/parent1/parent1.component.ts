import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component  {

  title = 'Parent Component';
  Counter = 1000;
 
  countChangedamount(count: number) {
    this.Counter = count;
    
  }

}