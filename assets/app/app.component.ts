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

}


