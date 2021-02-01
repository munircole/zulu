import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {
  submitted = false;
  errorMessage = [];

  taskForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  

  ngOnInit() {
      this.taskForm = this.formBuilder.group({
      id: [''],
      taskName: ['', Validators.required],
      description: ['', Validators.required],
      assigned_to: [''],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      priority: ['', Validators.required],
    });

  }

onSubmit(){
	console.log('yes')
}

}
