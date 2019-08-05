import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {
    appareils=[{
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
  }

    switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status="Etient";
    }
  }


  switchOnone(index:number){
    this.appareils[index].status="Allumer";
  }

  
  switchOfone(index:number){
    this.appareils[index].status="Etient";
  }
}