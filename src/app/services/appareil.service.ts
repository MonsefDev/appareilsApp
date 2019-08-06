import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
 

@Injectable()
export class AppareilService {
  appareilSubject =new Subject<any[]>();
  private  appareils=[
  ];
  constructor(private httpclient:HttpClient) { }

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
    console.log(appareilObject);
    this.appareils.push({
      id:appareilObject.id,
      name:appareilObject.name,
      status:appareilObject.status
    });
   
    this.emittAppareilSubject(); 
  }

  saveApperilsToServer(){
    this.httpclient.put('https://appareilsapp.firebaseio.com/appareils.json',this.appareils)
    .subscribe(
        ()=>{
          console.log('Enregistrement Terminé');
        },
        (error)=> {
          console.log('Error de sauvegrdage'+error);
        }
    )
  }


  getAppareilsFromServer(){
    this.httpclient.get<any[]>('https://appareilsapp.firebaseio.com/appareils.json')
    .subscribe(
      (response)=>{
       this.appareils=response;
       this.emittAppareilSubject();
      },
      (error)=> {
        console.log('Error de chargement'+error);
      }
    )

 
  }
}