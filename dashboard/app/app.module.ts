import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { FormComponent } from './form.component';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { MasonryModule } from 'angular2-masonry';

import { AppComponent }         from './app.component';
import { BearComponent }   from './bear.component';
import { HomeComponent }  from './home.component';
import { BearDetailComponent }  from './bear-detail.component';
import { visucanvasComponent }  from './visucanvas.component'; 
import { LandingPageComponent }  from './landingpage.component';
import { AdminComponent }  from './admin.component';
import { LoginComponent }  from './login.component'; 


// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroService }          from './hero.service';
import { BearService }          from './bear.service';
// import { HeroSearchComponent }  from './hero-search.component';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    MasonryModule
    ],
    declarations: [
    AppComponent,
    BearComponent,
    FormComponent,
    HomeComponent,
    BearDetailComponent,
    LandingPageComponent,
    visucanvasComponent,
    AdminComponent,
    LoginComponent

    ],
    providers: [ BearService ],
    bootstrap: [ AppComponent ]
  })
export class AppModule { }
