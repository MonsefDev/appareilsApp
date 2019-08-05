import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import{ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-single-appareils',
  templateUrl: './single-appareils.component.html',
  styleUrls: ['./single-appareils.component.css']
})
export class SingleAppareilsComponent implements OnInit {
  name:string='appareil';
  status:string='status';

  constructor(private appareilservice:AppareilService,private route:ActivatedRoute) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    this.name=this.appareilservice.getAppareilsbyID(+id).name;
    this.status=this.appareilservice.getAppareilsbyID(+id).status;
  }

}