import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//firebase modules
import { AngularFireModule } from '@angular/fire'; 
import { environment } from '../environments/environment';
import { AngularFireAuthModule }from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
