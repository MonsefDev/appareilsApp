import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilsComponent } from './single-appareils/single-appareils.component';
import { PageNotfondComponent } from './page-notfond/page-notfond.component';

const routes: Routes = [
  {path:'appareils',component:AppareilViewComponent},
  {path:'auth',component:AuthComponent},
  {path:'appareils/:id',component:SingleAppareilsComponent},
  {path:'',component:AppareilViewComponent},
  {path:'not-found',component:PageNotfondComponent},
  {path:'**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
