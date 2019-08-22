import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {


  constructor( private authService:AuthService ) { }
user =new User()
check:boolean


DataSubmit=()=>{
  this.authService.ValidateUSer(this.user).subscribe(data=>{
 alert("Success")

  },
  err=>{
    console.log(err)
    alert("Not valid ")
  }
  
  )
}




  userData:any
  ngOnInit() {
    this.getData()
  }
  
  RegisterUser=(user:any)=>
  { 
    this.check=true;
    this.authService.RegisterUser(this.user).subscribe(data=>{
console.log(data)
    },err=>{
      console.log(err)
    })
       
}

getData=()=>{
  this.authService.getData().subscribe(data=>{
   this.userData=data
   console.log(this.userData)
  },err=>{
    console.log(err)

  })
}








}
