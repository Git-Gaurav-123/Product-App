import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  template: `
  <h1>Customer Component with inline template</h1>  
  <p>
      customer works!
    </p>
  `,
  styles: [
   `
    h1{
      background-color:black;
      color:white;
    }
    `
  ]
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
