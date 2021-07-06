import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  Evaluate(value1:any,value2:any,operator:any):any{

    if(operator=='+'){
      return value1+value2;

    }
    else if(operator=='-'){
      return value1-value2;

    }
    else if(operator=='*'){
      return value1*value2;

    }
    else{
      return value1/value2;

    }
  }
}
