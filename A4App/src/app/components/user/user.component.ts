import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message:string;
  address:IAddress;
  name:string;
  email:string;
  age:number;
  constructor() { 
    console.log('constructor is initialised..')
  }

  ngOnInit() {
    console.log('ngOninit is initialised..');
    this.message="Hello,Welcome to Angular 4 App!";
    this.name="PRP";
    this.email="prp@prp.com";
    this.age=33;
    this.address ={
      street :"Wall Street",
      city:"New York",
      country:"USA",
      pincode:40001
    };
  } 
  
}
interface IAddress{
    street:string;
    city:string;
    country:string;
    pincode:number;
    
  }
