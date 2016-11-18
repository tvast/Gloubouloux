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
//module crud
import { AppComponent }         from './app.component';
import { BearComponent }   from './bear.component';
import { HomeComponent }  from './home.component';
import { BearDetailComponent }  from './bear-detail.component';
import { visucanvasComponent }  from './visucanvas.component'; 
import { LandingPageComponent }  from './landingpage.component';
// soundcloud api 
import {SearchFactory} from './src/services/SearchFactory.ts';
import {PlaylistService} from './src/services/PlaylistService.ts';
import {SoundCloudSearch} from './src/services/SoundCloudSearch.ts';
import {SoundCloudPlayer} from './src/services/SoundCloudPlayer.ts';
import {SoundManagerSoundPlayer} from './src/services/SoundManagerSoundPlayer.ts';
import {SoundManager} from './src/services/SoundManager.ts';
import {PlayerCmp} from './src/player/Player.ts';
import {TabListCmp} from './src/tabList/TabList.ts';
import {LocalStorage} from './src/services/LocalStorage.ts';
import 'rxjs/Rx';


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
    SearchFactory,
    PlaylistService,
    SoundCloudSearch,
    SoundCloudPlayer,
    SoundManagerSoundPlayer,
    SoundManager,
    PlayerCmp,
    TabListCmp,
    LocalStorage

  ],
  providers: [ BearService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
