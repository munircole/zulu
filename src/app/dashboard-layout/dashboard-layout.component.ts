import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

import * as $ from 'jquery';






@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']

})
export class DashboardLayoutComponent implements OnInit {
  currentUser: User;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {

    $("#menu-toggle").click(function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");


    });

    //const isLoggedIn: boolean = this.auth.isLoggedIn();
    //f (!isLoggedIn) {
      //this.router.navigateByUrl('/');
   // }


  this.auth.getUser(+this.route.snapshot.params['id']).subscribe(data => this.currentUser = data);



  }

  logout(){
    this.auth.doLogout();

  }



}
