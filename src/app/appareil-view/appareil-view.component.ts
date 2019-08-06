import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
 appareilsSubscription:Subscription;
constructor(private appareilservice:AppareilService){
  setTimeout(
    callback=>{
      this.isAuth=true;
    },4000
  );
  }

  ngOnInit(){
    this.appareilsSubscription=this.appareilservice.appareilSubject.subscribe(
      (appareils:any[])=>{
        this.appareils=appareils;
      }
    );

    this.appareilservice.emittAppareilSubject();

  }

  onAllumer(){
    this.appareilservice.switchOnAll();
  }

  onetindre(){
        this.appareilservice.switchOffAll();
  }


  onsave(){
    this.appareilservice.saveApperilsToServer();
  }
  onfetch(){
    this.appareilservice.getAppareilsFromServer();
  }
}
