import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { FormComponent } from './login/form.component';
import { AppRoutingModule } from './app-routing.module';

import { MasonryModule } from 'angular2-masonry';
//component
import { AppComponent }         from './app.component';
import { BearComponent }   from './liste/bear.component';
import { HomeComponent }  from './home/home.component';
import { BearDetailComponent }  from './detail/bear-detail.component';
import { visucanvasComponent }  from './visualizer/visucanvas.component'; 
import { LandingPageComponent }  from './home/landingpage.component';
import { AdminComponent }  from './admin/admin.component';
import { LoginComponent }  from './login/login.component';
import { visucanvasGreenComponent }  from './greenvisualizer.component'; 
//service
import { BearService }          from './bear.service';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
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
    LoginComponent,
    visucanvasGreenComponent

    ],
    providers: [ BearService ],
    bootstrap: [ AppComponent ]
  })
export class AppModule { }
