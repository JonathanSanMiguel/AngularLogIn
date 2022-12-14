import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){}

  FormularioLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  login(){
    //console.log(this.FormularioLogin.value)
    const {email, password} = this.FormularioLogin.value

    this.authService.Login(email, password).subscribe(resp => {
      console.log(resp);
    })
    //this.router.navigateByUrl("/dashboard")
  }//login
  
}
