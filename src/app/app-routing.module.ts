import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'services', component:ServicesComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'home', component: LandingPageComponent},
  { path: 'appoint', component:  AppointmentComponent},
  { path: 'about', component: AboutComponent},

  { path: '', redirectTo:"/home", pathMatch:"full"},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
