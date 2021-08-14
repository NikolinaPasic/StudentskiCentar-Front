import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Student } from '../app/models/student.model';
import { LoginStudentService } from '../services/login-student.service';

@Component({
  selector: 'app-kupi-obrok',
  templateUrl: './kupi-obrok.component.html',
  styleUrls: ['./kupi-obrok.component.scss'],
})
export class KupiObrokComponent implements OnInit {
  public current: Student = new Student();
  public id:number;
  public dorucak:number;
  public rucak:number;
  public vecera:number;
  public cena:number;
  constructor(private modalCtrl :ModalController,private loginStudent:LoginStudentService) {

  }

  ngOnInit() {
    this.id=Number(localStorage.getItem('studentId'));
    this.dorucak=0;
    this.rucak=0;
    this.vecera=0;
    this.cena=0;
  }
  dorucakp(){
    this.dorucak=this.dorucak+1;
    this.cena+=49;
  }

  dorucakm(){
    if(this.dorucak>0){
    this.dorucak=this.dorucak-1;
    this.cena-=49;
    }else{
      this.dorucak=0;
    }
  }
  rucakp(){
    this.rucak=this.rucak+1;
    this.cena+=72;
  }

  rucakm(){
    if(this.rucak>0){
      this.rucak=this.rucak-1;
      this.cena-=72;
      }else{
        this.rucak=0;
      }
  }
  vecerap(){
    this.vecera=this.vecera+1;
    this.cena+=59;
  }

  veceram(){
    if(this.vecera>0){
      this.vecera=this.vecera-1;
      this.cena-=59;
      }else{
        this.vecera=0;
      }
  }
  // potvrdi(){
  //   if(this.cena<this.current?.stanjeNaRacunu){
  //     console.log(this.current.stanjeNaRacunu);
  //   this.loginStudent.currentUser.stanjeNaRacunu=this.current.stanjeNaRacunu-this.cena;
  //   this.loginStudent.currentUser.brojDorucaka+=this.dorucak;
  //   this.loginStudent.currentUser.brojRucaka+=this.rucak;
  //   this.loginStudent.currentUser.brojVecera+=this.vecera;
  //   this.loginStudent.izmeniStanje(this.loginStudent.currentUser)
  //   .subscribe(
  //     (response)=>{
  //       this.loginStudent.currentUser=response;
  //     },
  //     (error)=>{
  //      {
  //       console.log(error);
  //      }
  //     }
  //   );
  //   this.modalCtrl.dismiss();
  //   }
  // }
  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
