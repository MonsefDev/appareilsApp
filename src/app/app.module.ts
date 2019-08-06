import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilsComponent } from './single-appareils/single-appareils.component';
import { PageNotfondComponent } from './page-notfond/page-notfond.component';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
 
 
import { EditAppareilComponentComponent } from './edit-appareil-component/edit-appareil-component.component';
import { AuthGaurdGuard } from './services/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';

 
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilsComponent,
    PageNotfondComponent,
    EditAppareilComponentComponent,
    UserListComponent,
    NewUserComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
 
  ],
  providers: [AppareilService,AuthService,AuthGaurdGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
