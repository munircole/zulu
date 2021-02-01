import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})

export class CreateProjectComponent implements OnInit {
  submitted = false;
  errorMessage = [];

  projectForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  

  ngOnInit() {
      this.projectForm = this.formBuilder.group({
      id: [''],
      projectName: ['', Validators.required],
      requirements: ['', Validators.required],
      client: ['', Validators.required],
      project_type: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      priority: ['', Validators.required],
    });

  }


onSubmit(){
	console.log('yes')
}
}
