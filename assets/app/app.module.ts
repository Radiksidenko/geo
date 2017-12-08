import { NgModule }       from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }      from '@angular/http';
import { AgmCoreModule} from 'angular2-google-maps/core';
import { routing } from './app.routes';
import { DashComponent }      from './dashboard/dash.component';
import { AddPointComponent} from "./add-point/add-point.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

const googleMapsCore = AgmCoreModule.forRoot({
    apiKey : 'AIzaSyBGDB6yrcAbiygl1ONUANsMXP8gAV9Vc3M',
});
@NgModule({
    declarations: [AppComponent,DashComponent,AddPointComponent,UserProfileComponent],
    imports:      [routing,BrowserModule,HttpModule, googleMapsCore,FormsModule],
    bootstrap:    [AppComponent],
})

export class AppModule {}
