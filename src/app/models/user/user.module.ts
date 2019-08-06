import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 
  constructor(public firstname:string,
              public lastname:string,
              public email:string,
              public drinkProfernce:string,
              public hobbies?: string[]){

  }
}
