import { Component, OnInit } from '@angular/core';
import { Student } from '../app/models/student.model';
import { LoginStudentService } from '../services/login-student.service';

@Component({
  selector: 'app-student-welcome-page',
  templateUrl: './student-welcome-page.page.html',
  styleUrls: ['./student-welcome-page.page.scss'],
})
export class StudentWelcomePagePage implements OnInit {
  public current: Student = new Student();
  public id:number;
  constructor(private loginStudent:LoginStudentService) {
    this.id=Number(localStorage.getItem('studentId'));
  }

  ngOnInit() {
    this.loginStudent.getStudentsInfo(this.id)
    .subscribe(
      (response)=>{
        this.current = response;
        console.log(response);
        console.log(this.current);
      },
      (error)=>{
       {
        console.log(error);
       }
      }
    );
  }
}
