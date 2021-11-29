import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  loginForm : FormGroup
  user = {
    Usuario: '',
    Contraseña: '',
  }
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _AuthService: AuthService
    ) {

    this.loginForm = this.fb.group({
      Usuario: ['',Validators.required],
      Contraseña: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  signup(){
   
    let Contraseña = this.loginForm.get('Contraseña')?.value
    let Usuario  = this.loginForm.get('Usuario')?.value
    
    this.user.Usuario = Usuario;
    this.user.Contraseña = Contraseña;
    
    console.log(this.user)
    
    this._AuthService.singUo(this.user)
    
    
  }
}
