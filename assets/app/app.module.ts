import { NgModule }       from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }      from '@angular/http';
import { AgmCoreModule} from 'angular2-google-maps/core';
import { routing } from './app.routes';
import { DashComponent }      from './dashboard/dash.component';
import { user_listComponent }      from './user_list/user_list.component';
import { public_userComponent }      from './public_users/public_user.component';

import {UserProfileComponent} from "./user-profile/user-profile.component";
import {chatComponent} from "./chat/chat.component";
import {DialogComponent} from './modal/dialog.component';

const googleMapsCore = AgmCoreModule.forRoot({
    apiKey : 'AIzaSyBGDB6yrcAbiygl1ONUANsMXP8gAV9Vc3M',
});
@NgModule({
    declarations: [AppComponent,DashComponent,UserProfileComponent,DialogComponent,chatComponent,user_listComponent,public_userComponent],
    imports:      [routing,BrowserModule,HttpModule, googleMapsCore,FormsModule ],
    bootstrap:    [AppComponent],
})

export class AppModule {}
