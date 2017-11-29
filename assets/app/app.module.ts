import { NgModule }       from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }      from '@angular/http';
import { AgmCoreModule} from 'angular2-google-maps/core';

const googleMapsCore = AgmCoreModule.forRoot({
    apiKey : 'AIzaSyBGDB6yrcAbiygl1ONUANsMXP8gAV9Vc3M',
});
@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule,HttpModule, googleMapsCore,FormsModule],
    bootstrap:    [AppComponent],
})

export class AppModule {}
