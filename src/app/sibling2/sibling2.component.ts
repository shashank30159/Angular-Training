import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../services/data1.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  customers:any=[]
  customers1:any=[
    {"empId":104,"empName":"mani","salary":30000},
    {"empId":105,"empName":"rakesh","salary":40000},
    {"empId":106,"empName":"siva","salary":35000}
  ]
  constructor(private dataService:Data1Service) {
    dataService.currentMsg.subscribe(successMsg => this.customers = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){
     for(var i=0;i<this.customers1.length;i++){
    this.dataService.changeData(this.customers1[i])
     }
  }

}
