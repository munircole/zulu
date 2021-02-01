import { Component,  OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  registered = false;
  submitted = false;
  registerFailed = false;
  errorMessage = '';

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: AuthService) {}

  invalidUsername() {
    return (this.submitted && this.userForm.controls.username.errors != null);
  }

  invalidEmail() {
    return (this.submitted && this.userForm.controls.email.errors != null);
  }

  invalidFirstName() {
    return (this.submitted && this.userForm.controls.firstName.errors != null);
  };
  invalidLastName() {
    return (this.submitted && this.userForm.controls.lastName.errors != null);
  }
  invalidDOB() {
    return (this.submitted && this.userForm.controls.dob.errors != null);
  }
  invalidCountry() {
    return (this.submitted && this.userForm.controls.country.errors != null);
  }

  invalidGender() {
    return (this.submitted && this.userForm.controls.gender.errors != null);
  }


  invalidPassword() {
    return (this.submitted && this.userForm.controls.password.errors != null);
  }
  invalidConfirmPassword() {
    return (this.submitted && this.userForm.controls.confirmPassword.errors != null);
  }

  checkpassword() {
    return (this.userForm.controls.confirmPassword.value != this.userForm.controls.password.value);
  }



  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      contact_number: ['', Validators.required],
      profile_pics: [''],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]


    });

  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;
    this.apiService.createUser(this.userForm.value).subscribe(
      data => {
        console.log(data);
        this.registered = true;
        this.userForm.reset();


      },
      err => {
        this.errorMessage = err.errors.message;
        this.registerFailed = true;

      }

    );

  };


}
