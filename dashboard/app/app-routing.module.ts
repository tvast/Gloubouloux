import { NgModule }             from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
import { BearComponent }  from './bear.component';
import { FormComponent }  from './form.component';
import { HomeComponent }  from './home.component';
import { BearDetailComponent }  from './bear-detail.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'bear',  component: BearComponent },
  { path: 'inscription',     component: FormComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'beardetail/:id', component: BearDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
