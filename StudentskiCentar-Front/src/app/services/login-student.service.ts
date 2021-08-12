import { Injectable } from '@angular/core';
import { Student } from '../app/models/student.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginStudentService {

  currentUser: any=null;
  error: any;
  student: Student =  new Student();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(username: string,password: string): any {
     this.http.post<any>('http://localhost:5000/login', {Username: username, Password: password})
     .subscribe(
       (response)=>{
         console.log(response);
         localStorage.setItem('currentUser','true');
         this.router.navigateByUrl('/student-welcome-page');
         this.currentUser=response;
         this.student=response;
         console.log(this.student);
         localStorage.setItem('username', this.currentUser.username);
         localStorage.setItem('studentId',this.currentUser.studentId);
         localStorage.setItem('ime', this.currentUser.ime);
         localStorage.setItem('prezime', this.currentUser.prezime);

       },
       (error)=>{
        {
          this.router.navigateByUrl('/login-student');


        }
       }
     );
       return this.currentUser;
  }

  getStudentsInfo(studentId: number): Observable<any> {
    return this.http.get<any>(
      'http://localhost:5000/student/' + studentId
    );
  }


}
