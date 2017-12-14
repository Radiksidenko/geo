// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashComponent} from './dashboard/dash.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {chatComponent} from './chat/chat.component';
import { user_listComponent }      from './user_list/user_list.component';
import { public_userComponent }      from './public_users/public_user.component';


export const routes: Routes = [
    {path: 'profile', component: UserProfileComponent},
    {path: 'dashboard', component: DashComponent},
        {path: 'chat', component: chatComponent},
    {path: 'users', component: user_listComponent},
    {path: 'public_user', component: public_userComponent},

];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
