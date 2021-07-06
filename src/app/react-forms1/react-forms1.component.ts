import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-react-forms1',
  templateUrl: './react-forms1.component.html',
  styleUrls: ['./react-forms1.component.css']
})
export class ReactForms1Component {
  constructor(private formBuilder:FormBuilder){}
  addressForm = this.formBuilder.group({
    Name: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]],
    address: this.formBuilder.group({ // make a nested group
      city: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    }),
  })
  submitData() {
    console.log(this.addressForm)
    console.log(this.addressForm.value)
  }
}
