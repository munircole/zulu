import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';




const Auth_API = 'http://localhost:3000/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = {};
  public token;
  private user: User;
  loggedIn = false;
  submitted = false;
  errorMessage = '';



  constructor(private http: HttpClient, private router: Router) { }

    handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }




  login(user: User) {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');


    return this.http.post<any>(Auth_API + '/signin', user, httpOptions).subscribe((user:any) => {
       localStorage.setItem('token', user.token)
       this.router.navigate(['dashboard']);
    }),
        err => {
        this.errorMessage = 'please make sure your username and password are correct';
        this.loggedIn = false;

 }

      catchError(this.handleError)

  }

  createUser(user: User): Observable<any> {
    return this.http.post(Auth_API + '/register', user, httpOptions).pipe(catchError(this.handleError))
  }

  isLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

  getToken(){
    const token = localStorage.getItem('token');
    return token;
  }


  getUser(id): Observable<any> {
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());

        return this.http.get(Auth_API + '/profile/' + id, {headers: headers}).pipe(
        map((res: Response) => {
        return res || {}
        }),
        catchError(this.handleError)
        )
  }

 




  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }
}