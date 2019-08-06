import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModule } from '../models/user/user.module';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy {

  users:UserModule[];
  userSubscription: Subscription;

  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userSubscription=this.userservice.userSubject.subscribe(
      (users:UserModule[])=>{
        this.users=users;
      }
    );
    this.userservice.emitUser();
  }


  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
