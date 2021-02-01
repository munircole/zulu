import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
        params => {
            let id = params['id'];
            this.getUser(id);
            }
        );

  }


      getUser(id) {
        this.auth.getUser(id).subscribe(
            response => (this.user = response.user)
        );
    }


}
