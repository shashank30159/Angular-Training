import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-react-forms1',
  templateUrl: './react-forms1.component.html',
  styleUrls: ['./react-forms1.component.css']
})
export class ReactForms1Component {
  addressForm = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-z]{5,15}$')]),
    address:new FormGroup({
      city:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-z]{5,10}$')]),
      postal:new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    })
  })

  submitData() {
    console.log(this.addressForm)
    console.log(this.addressForm.value)
  }
}
