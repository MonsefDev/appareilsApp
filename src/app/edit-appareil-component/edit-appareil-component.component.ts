import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil-component',
  templateUrl: './edit-appareil-component.component.html',
  styleUrls: ['./edit-appareil-component.component.css']
})
export class EditAppareilComponentComponent implements OnInit {

  defaultOnOff = 'éteint'; 
  constructor(private appareilService:AppareilService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const name=form.value['name'];
    const status=form.value['status'];
    // console.log(name);
    // this.appareilService.addAppareils(name,status);
    this.router.navigate['appareils'];
   }



}
