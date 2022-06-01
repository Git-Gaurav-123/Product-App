import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-reactive',
  templateUrl: './customer-reactive.component.html',
  styleUrls: ['./customer-reactive.component.css']
})
export class CustomerReactiveComponent implements OnInit {

  custRForm:FormGroup
  customer=new Customer()
  constructor(private fb:FormBuilder) { }

  //Creating reactive forms using formgroup and formcontrol classes
//   ngOnInit(): void {
//     this.custRForm=new FormGroup({
// firstName:new FormControl(),
// lastName:new FormControl(),
// email:new FormControl(),
// sendCatalog:new FormControl(true),
// city:new FormControl()
//     })
//   }

//crating reactive forms using the service of @angular/form formbuilder
ngOnInit(): void {
  this.custRForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.maxLength(30)]],
    email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    sendCatalog:true,
    city:''

  })
}

  showData(){
    this.custRForm.patchValue({
      firstName:'Jack',
      lastName:'Jill'
      // email:'jack@gmail.com',
      // sendCatalog:false,
      // city:'bhor'

    })
  }
  save()
  {
    console.log(this.custRForm)
    console.log(`Saved Data of reactive form ${JSON.stringify(this.custRForm.value)}`)
  }

}
