import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  isAuth=false;
  SignIn(){
    return new Promise(
      (reslove,reject)=>{
   setTimeout(
        ()=>{
          this.isAuth=true;
          reslove(true);
        },2000
      )

      }
    );

  }

    SignOut(){
      this.isAuth=true;
    }

}