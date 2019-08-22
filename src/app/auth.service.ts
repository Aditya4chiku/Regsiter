import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:3000/api/user"
  constructor(private http:HttpClient,private router:Router) { }

getData=()=>{
return this.http.get(this.url+'/validate')
}
  


  navigate = () =>{
    if(this.getUser())
    {
      console.log("hii")
      this.router.navigate(['resturant'])
    }else{
      this.router.navigate(['login']);
    }
  }
  

  getUser = () =>{
    let user = JSON.parse(sessionStorage.getItem("ram"));
    if(user)
    {
     return user;
    }else{
      return null;
    }
  }



  RegisterUser=(user)=>
  {
  return this.http.post(this.url +'/register',user )
  }



  ValidateUSer = (user) => {

    return this.http.post(this.url + '/validate', user);
  }

}
