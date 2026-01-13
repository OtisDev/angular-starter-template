import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth-service';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loading : boolean = false;
  myForm! : FormGroup;
  showPass : boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService : AuthService,
    private router : Router
  ) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required]], //
      password: ['', [Validators.required]]
    });
  }

  onSubmit(){

  }

  changeValueShowPass(){
    this.showPass = this.showPass ? false : true;
  }

}
