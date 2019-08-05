import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

isAuth = false;
  lastupdate=new Promise(
    (reslove,reject)=>{
      const date=new Date();
      setTimeout(
        ()=>{
          reslove(date);
        },2000
      )

    }
  );

 appareils:any[];
constructor(private appareilservice:AppareilService){
  setTimeout(
    callback=>{
      this.isAuth=true;
    },4000
  );
  }

  ngOnInit(){
    this.appareils=this.appareilservice.appareils;

  }

  onAllumer(){
    this.appareilservice.switchOnAll();
  }

  onetindre(){
        this.appareilservice.switchOffAll();
  }
}