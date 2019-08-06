import { Injectable } from '@angular/core';
import { UserModule } from '../models/user/user.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private users: UserModule[]=[{
  firstname:'James ',
  lastname:'Smith',
  email:'jamessmith@gmail.com',
  drinkProfernce:'coca',
  hobbies:[
    'coder',
    'café',
    'sport'
    
  ]

}];
userSubject=new Subject<UserModule[]>();

constructor() { }

emitUser(){
  this.userSubject.next(this.users.slice());
}

addUser(user:UserModule){
  this.users.push(user);
  this.emitUser();
}
}
