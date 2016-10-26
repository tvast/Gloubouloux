import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { BearComponent }   from './bear.component';
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
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BearComponent,
    // HeroDetailComponent,
    // HeroesComponent,
    // HeroSearchComponent
  ],
  providers: [ BearService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
