import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SlicePipe } from '@angular/common';

@Injectable()
export class AppareilService {
  appareilSubject =new Subject<any[]>();
  private  appareils=[{
      id:1,
    name:"machine a laver",
    status:"Etient"
  },
  {
     id:2,
    name:"TV",
    status:"Allumer"
  },
  {
     id:3,
    name:"PC",
    status:"Allumer"
  }

  ];
  constructor() { }

  getAppareilsbyID(id:number){
    const appareil=this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id===id;
      }
    );
    return appareil;
  }

  switchOnAll(){
    for(let appareil of this.appareils){
      appareil.status="Allumer";
    }
    this.emittAppareilSubject();
  }

    switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status="Etient";
    }
    this.emittAppareilSubject();
  }


  switchOnone(index:number){
    this.appareils[index].status="Allumer";
    this.emittAppareilSubject();
  }

  
  switchOfone(index:number){
    this.appareils[index].status="Etient";
    this.emittAppareilSubject();
  }

  emittAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  addAppareils(name:string,status:string){
    const appareilObject={
      id:0,
      name:'',
      status:''
    };
    appareilObject.name=name;
    appareilObject.status=status;
    appareilObject.id=this.appareils[(this.addAppareils.length-1)].id+1;
    
    this.appareils.push(appareilObject);
    this.emittAppareilSubject(); 
  }
}