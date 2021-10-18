import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { RedirectPageComponent } from './redirect-page/redirect-page.component';
import { StatsComponent } from './stats/stats.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"URLShortener",
    component:DashboardComponent
  },
  {
    path:"p/:id",
    component:RedirectPageComponent
  },
  {
    path:"stats/:id",
    component:StatsComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
