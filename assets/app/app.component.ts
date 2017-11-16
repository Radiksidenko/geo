import {Component} from '@angular/core';
import {Http} from '@angular/http';
@Component({
    selector: 'my-app',
    templateUrl: 'app/component/nav.html'

})

export class AppComponent {
    name;
    email;
    constructor(private http:Http) {
        this.http.get('/getuser_me')
            .subscribe(res => (this.name = res.json().name, this.email = res.json().email));

    }
    click(){
        alert(this.name+ " "+ this.email);
    }
}



