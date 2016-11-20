import { NgModule }             from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
import { BearComponent }  from './bear.component';
import { FormComponent }  from './form.component';
import { HomeComponent }  from './home.component';
import { BearDetailComponent }  from './bear-detail.component';
import { LandingPageComponent }  from './landingpage.component';

import { visucanvasComponent }  from './visucanvas.component'; 
import { AdminComponent }  from './admin.component'; 
import { LoginComponent }  from './login.component'; 





const routes: Routes = [
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },

  { path: 'wolf',  component: BearComponent },
  { path: '9icke$17',  component: AdminComponent },
  { path: 'landingpage',  component: LandingPageComponent },
  { path: 'inscription',     component: FormComponent },
  { path: 'update/:id',     component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bear/:id', component: BearDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
