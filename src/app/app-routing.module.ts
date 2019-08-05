import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilsComponent } from './single-appareils/single-appareils.component';
import { PageNotfondComponent } from './page-notfond/page-notfond.component';
import { EditAppareilComponentComponent } from './edit-appareil-component/edit-appareil-component.component';
import { AuthGaurdGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path:'appareils',canActivate:[AuthGaurdGuard],component:AppareilViewComponent},
  {path:'auth',component:AuthComponent},
  {path:'appareils/:id',canActivate:[AuthGaurdGuard],component:SingleAppareilsComponent},
  {path:'',component:AppareilViewComponent},
  {path:'edit',component:EditAppareilComponentComponent},
  {path:'not-found',component:PageNotfondComponent},
  {path:'**',redirectTo:'/not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
