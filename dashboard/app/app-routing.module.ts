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

const routes: Routes = [
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },

  { path: 'bear',  component: BearComponent },
  { path: 'landingpage',  component: LandingPageComponent },
  { path: 'inscription',     component: FormComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'visucanva', component: visucanvasComponent },
  { path: 'bear/:id', component: BearDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
