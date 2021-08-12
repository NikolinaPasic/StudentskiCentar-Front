import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStudentService } from '../services/login-student.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.page.html',
  styleUrls: ['./login-student.page.scss'],
})
export class LoginStudentPage implements OnInit {
  public username: string;
  public password: string;
  constructor(private loginStudentService: LoginStudentService) { }

  ngOnInit() {
  }

  public login(): void{
    this.loginStudentService.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }
}
