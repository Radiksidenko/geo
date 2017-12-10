import {Component} from "@angular/core";

@Component({
    //selector: 'user-profile',
    templateUrl: 'app/user-profile/user-profile.html',
    styleUrls: ['app/user-profile/user-profile.css']
})

export class UserProfileComponent {

    name: string;
    surname: string;
    gender: string;
    date_of_birth: Date;
    country: string;
    city: string;
    phone: string;
    web_site: string;
    interests: string;
    about_myself: string;
    role: string;
    email: string;
    password: string;
    lastLoggedIn: Date;
    gravatarUrl: string;

    editing: boolean = false;
    
    
    constructor(){
        var reference = this;

        io.socket.get('/getuser_me', function gotResponse(body, response) {
            reference.name = body.name;
            reference.surname = body.surname;
            reference.gender = body.gender;
            reference.date_of_birth = body.date_of_birth;
            reference.country = body.country;
            reference.city = body.city;
            reference.phone = body.phone;
            reference.web_site = body.web_site;
            reference.interests = body.interests;
            reference.about_myself = body.about_myself;
            reference.role = body.role;
            reference.email = body.email;
            reference.password = body.password;
            reference.lastLoggedIn = body.lastLoggedIn;
            reference.gravatarUrl = body.gravatarUrl;
        });

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
        setInterval(function () {
        }, 10);
        
    }

    update(type: string, value) {
        io.socket.post('/update', {[type]: value}, function (resData, jwRes) {
            console.log(jwRes.statusCode); // => 200
        });
    }

}