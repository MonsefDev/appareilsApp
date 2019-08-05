import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  OnDestroy{
  title = 'ApparielsApp';
  counterSubscription:Subscription
  seconds:number;
  ngOnInit(){
    const counter=Observable.interval(1000);
    this.counterSubscription=counter.subscribe(
      (value:number)=>{
        this.seconds=value;
      }
    )


  }


  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}
