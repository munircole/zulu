import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  message: string;
  changePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
      this.changePasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.compose([Validators.required])],
      repeatPassword: ['', Validators.required]
    });

  }

  onSubmit() {
     console.log('out')
  }


}
