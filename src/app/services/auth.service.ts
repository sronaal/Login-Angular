import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:3000/api/";
  token = "";
  constructor(
    private http: HttpClient,
    private router: Router
    ) {


   }

   singUo(user:any){
    
    return this.http.post('http://localhost:3000/api/register',user)
    .subscribe((data:any) =>{
      this.router.navigate(['profile']);
      console.log(data)
      localStorage.setItem('token', data.token)
    }, error => {
      console.log(error)
    
    })  
  }
  SingUpUser(user:any){

    return this.http.post(this.URL+'login',user)
    .subscribe((data:any) =>{
      this.router.navigate(['profile']);
      localStorage.setItem('token', data.token)
    },error =>{
      console.log(error)
    })
  }

  loggedIn(){

    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/sigin'])
  }
}
