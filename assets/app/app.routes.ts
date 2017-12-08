// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }      from './app.component';

import { DashComponent }      from './dashboard/dash.component';
import { UserProfileComponent} from './user-profile/user-profile.component';


export const routes: Routes = [
    {path: 'profile', component: UserProfileComponent},
    {path: 'dashboard', component: DashComponent},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
