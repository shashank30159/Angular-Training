import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  name:string = 'Shashank';
  getEmployeeInfo(){
    return `Inside the function: ${this.name}`
  }
}

