import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilsComponent } from './single-appareils/single-appareils.component';
import { PageNotfondComponent } from './page-notfond/page-notfond.component';
import { EditAppareilComponentComponent } from './edit-appareil-component/edit-appareil-component.component';
import { AuthGaurdGuard } from './services/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {path:'appareils',canActivate:[AuthGaurdGuard],component:AppareilViewComponent},
  {path:'auth',component:AuthComponent},
  {path:'appareils/:id',canActivate:[AuthGaurdGuard],component:SingleAppareilsComponent},
  {path:'',component:AppareilViewComponent},
  {path:'edit',component:EditAppareilComponentComponent},
  {path:'new-user',component:NewUserComponent},
  {path:'users',component:UserListComponent},
  {path:'not-found',component:PageNotfondComponent},
  {path:'**',redirectTo:'/not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
