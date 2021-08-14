import { Component, OnInit } from '@angular/core';
import { Student } from '../app/models/student.model';
import { ModalController } from '@ionic/angular';
import { LoginStudentService } from '../services/login-student.service';
import { KupiObrokComponent } from '../kupi-obrok/kupi-obrok.component';
import { KupiObrokeComponent } from '../kupi-obroke/kupi-obroke.component';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-menza',
  templateUrl: './menza.component.html',
  styleUrls: ['./menza.component.scss'],
})
export class MenzaComponent implements OnInit {
  public current: Student = new Student();
  public id:number;
  constructor(public loginStudent:LoginStudentService,private modalCtrl: ModalController) {
    console.log(loginStudent.currentUser$);
   }

  ngOnInit() {
    this.loginStudent.currentUser$.pipe(take(1)).subscribe(student=>{
    this.current=student;
    })
  }
    // this.id=Number(localStorage.getItem('studentId'));
    // this.loginStudent.getStudentsInfo(this.id)
    // .subscribe(
    //   (response)=>{
    //     this.current = response;
    //     console.log(response);
    //     console.log(this.current);
    //   },
    //   (error)=>{
    //    {
    //     console.log(error);
    //    }
    //   }
    // // );

  async openModalKupi() {
    var modal:any;
    var today= new Date();
    console.log(today.getDate());
    if(today.getDate()>20){
       modal = await this.modalCtrl.create({
      component: KupiObrokComponent,
    });
   }
   else{
    modal = await this.modalCtrl.create({
      component: KupiObrokeComponent,
    });
   }
    await modal.present();
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
