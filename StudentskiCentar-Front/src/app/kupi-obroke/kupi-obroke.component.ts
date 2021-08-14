import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Student } from '../app/models/student.model';
import { LoginStudentService } from '../services/login-student.service';

@Component({
  selector: 'app-kupi-obroke',
  templateUrl: './kupi-obroke.component.html',
  styleUrls: ['./kupi-obroke.component.scss'],
})
export class KupiObrokeComponent implements OnInit {
  public current: Student = new Student();
  public id:number;
  public dorucak:number;
  public rucak:number;
  public vecera:number;
  public cena:number;
  constructor(private modalCtrl :ModalController,private loginStudent:LoginStudentService) {

  }
    ngOnInit() {
      this.dorucak=0;
      this.rucak=0;
      this.vecera=0;
      this.cena=0;
      this.loginStudent.currentUser$.pipe(take(1)).subscribe(student=>{
      this.current=student;
      })
    }
  dorucakp(){
    this.dorucak=this.dorucak+10;
    this.cena+=490;
  }

  dorucakm(){
    if(this.dorucak>0){
    this.dorucak=this.dorucak-10;
    this.cena-=490;
    }else{
      this.dorucak=0;
    }
  }
  rucakp(){
    this.rucak=this.rucak+10;
    this.cena+=720;
  }

  rucakm(){
    if(this.rucak>0){
      this.rucak=this.rucak-10;
      this.cena-=720;
      }else{
        this.rucak=0;
      }
  }
  vecerap(){
    this.vecera=this.vecera+10;
    this.cena+=590;
  }

  veceram(){
    if(this.vecera>0){
      this.vecera=this.vecera-10;
      this.cena-=590;
      }else{
        this.vecera=0;
      }
  }
   potvrdi(){
    if(this.cena<this.current.stanjeNaRacunu){
    this.current.brojDorucaka+=this.dorucak;
    this.current.brojRucaka+=this.rucak;
    this.current.brojVecera+=this.vecera;
    this.current.stanjeNaRacunu-=this.cena;
    this.loginStudent.updateUser(this.current);}
    else{
      console.log("Nemate dovoljno sredstava na računu");
    }
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
