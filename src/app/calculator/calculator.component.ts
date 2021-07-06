import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent 
{
  

  value1:any
  value2:any
  result:any
  constructor(private calculator:CalculatorService) { }
  
  Operation(value:any){
    var num1 = (Number)(this.value1)
    var num2 = (Number)(this.value2)
   this.result= this.calculator.Evaluate(num1,num2,value)
  }

  
 
}
