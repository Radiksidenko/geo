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
    phone;
    lastLoggedIn;
    gravatarUrl;

    constructor(){
        var reference = this;
        io.socket.get("/ready", function (ready) {});

        io.socket.on('connect', function () {
            console.log('Connect');
        });

        io.socket.on('reconnect', function () {
            console.log('Reconnect');
        });

        io.socket.on('disconnect', function () {
            console.log('Disconnect');
        });
        io.socket.get('/getuser_me', function gotResponse(body, response) {
            reference.name = body.name;
            reference.email = body.email;
            reference.id = body.id;
            reference.phone= body.phone;

            reference.lastLoggedIn = body.lastLoggedIn;
            reference.gravatarUrl = body.gravatarUrl;

        });
        setInterval(function () {
        }, 10);

    }
    update(type: string, value) {
        io.socket.post('/update', {[type]: value}, function (resData, jwRes) {
            console.log(jwRes.statusCode); // => 200
        });
    }


}