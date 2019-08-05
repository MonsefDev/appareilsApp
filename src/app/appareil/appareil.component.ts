import { Component, OnInit,Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilname:string;
  @Input() apparielStatus:string;
  @Input() IndexOfAppareils:number;
    @Input() id:number;
  constructor(private appareilservice:AppareilService) { }

  ngOnInit() {
  }
  getColor(){
    if(this.apparielStatus==="Etient")
    {
      return 'red';
    }else{
      return 'green';
    }
  }

  onSwitchOn(){
    this.appareilservice.switchOnone(this.IndexOfAppareils);
  }

   onSwitchOff(){
    this.appareilservice.switchOfone(this.IndexOfAppareils);
  }
}