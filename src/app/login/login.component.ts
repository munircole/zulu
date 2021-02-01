import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  loginForm: FormGroup;
  loggedIn = false;
  submitted = false;
  errorMessage = '';


  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });



  const isLoggedIn: boolean = this.authService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigateByUrl('/dashboard');
    }


  }


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() {
    this.submitted = true;
    this.authService.login(this.loginForm.value)  
  }
     

    


  
  
}
