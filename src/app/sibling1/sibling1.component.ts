import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../services/data1.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  customers:any=[]
 customers1:any=[
  {"empId":101,"empName":"shashank","salary":50000},
  {"empId":102,"empName":"sasi","salary":55000},
  {"empId":103,"empName":"santosh","salary":65000}
 ]

  constructor(private dataService:Data1Service) {
    dataService.currentMsg.subscribe(successMsg => this.customers = successMsg)
  }
  ngOnInit(): void { }
  modifiedData(){
    for(var i=0;i<this.customers1.length;i++){
      this.dataService.changeData(this.customers1[i])
       }
  }

}
