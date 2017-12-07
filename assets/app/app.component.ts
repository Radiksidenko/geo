import {Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl: 'app/component/nav.html',
    styleUrls: ['app/component/nav.css'],

})

export class AppComponent {

    constructor(private activateRoute: ActivatedRoute) {

    }
    leftmtnu(){
        var menu = document.getElementById("LM");

        if(menu.className == 'opened'){
            menu.className = '';
        }else {
            menu.className = 'opened';
        }
    }
    menuUser(){
        var menu = document.getElementById("account");
        if(menu.className == 'account active'){
            menu.className = 'account';
        }else {
            menu.className = 'account active';
        }
    }
}


