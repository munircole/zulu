import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


import { Project } from '../models/project';



const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};


@Injectable()
export class ProjectService {
    private projectsUrl = "http://localhost:3000/projects";
    UserProjects: [];

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
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


    

 createProject(project: Project): Observable<any> {
    return this.http.post(this.projectsUrl + 'create', project, httpOptions).pipe(catchError(this.handleError))
  }


  getUserProjects(token, userId: number){
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', token);

this.http.get(`${this.projectsUrl}?userId=${userId}`)
    .subscribe(data => {
      let resources = data[userId];
      this.UserProjects = resources;
      console.log(this.UserProjects);
    })
    }


    getproject(id: number): Observable<Project> {
        const url = `${this.projectsUrl}/${id}`;
        return this.http.get<Project>(url).pipe(
            tap(_ => console.log('fetched Project'))
        )
    }


    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.projectsUrl).pipe(
            tap(_ => console.log('fetched projects'))
        )
        
              

    }


}


    
