import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
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

 
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilsComponent,
    PageNotfondComponent,
    EditAppareilComponentComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
 
  ],
  providers: [AppareilService,AuthService,AuthGaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
