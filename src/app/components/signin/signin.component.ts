import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  loginForm : FormGroup
  
  user = {
    Usuario: '',
    Contraseña: '',
  }
  
  constructor(
    private fb: FormBuilder,
    private auth: AuthService
    ){
        this.loginForm = this.fb.group({
        Usuario: ['',Validators.required],
        Contraseña: ['', Validators.required]
      })
   }

  ngOnInit(): void {
  }

  signin(){
    let Contraseña = this.loginForm.get('Contraseña')?.value
    let Usuario  = this.loginForm.get('Usuario')?.value
    
    this.user.Usuario = Usuario
    this.user.Contraseña = Contraseña
    this.auth.SingUpUser(this.user)

  }

}
