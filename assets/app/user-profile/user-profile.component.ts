import {Component} from "@angular/core";

@Component({
    //selector: 'user-profile',
    templateUrl: 'app/user-profile/user-profile.html',
    styleUrls: ['app/user-profile/user-profile.css']
})

export class UserProfileComponent {

    name;
    email;
    id;
    lastLoggedIn;
    gravatarUrl;

    constructor(){
        var reference = this;

        io.socket.get('/getuser_me', function gotResponse(body, response) {
            reference.name = body.name;
            reference.email = body.email;
            reference.id = body.id;
            reference.lastLoggedIn = body.lastLoggedIn;
            reference.gravatarUrl = body.gravatarUrl;

        });

    }

}