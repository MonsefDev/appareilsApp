import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserModule } from '../models/user/user.module';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm:FormGroup;
  constructor(private formbuildr:FormBuilder,private userservice:UserService,private router:Router) 
  { }

  ngOnInit() {
  this.initForm();
  }
  initForm(){
    this.userForm=this.formbuildr.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      drinkProfernce:['',Validators.required],
      hobbies:this.formbuildr.array([])

    })
  }

  onSubmitForm(){
    const formvalue=this.userForm.value;
    const newuser=new UserModule(
      formvalue['firstname'],
      formvalue['lastname'],
      formvalue['email'],
      formvalue['drinkProfernce'],
      formvalue['hobbies']?formvalue['hobbies']:[],

    )

    this.userservice.addUser(newuser);
    this.router.navigate(['/users']);
  }

  getHobbies(){
    return this.userForm.get('hobbies') as  FormArray;
  }

  onAddHobby(){
    const newhobbycontrol=this.formbuildr.control('',Validators.required);
    this.getHobbies().push(newhobbycontrol);
  }
}
