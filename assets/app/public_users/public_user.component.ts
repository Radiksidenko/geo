import {Component} from "@angular/core";
import { ActivatedRoute} from '@angular/router';

@Component({
    //selector: 'user-profile',
    templateUrl: 'app/public_users/public_user.html',
    styleUrls: ['app/public_users/public_user.css']
})

export class public_userComponent {

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
    id;
    editing: boolean = false;


    constructor(private activateRoute: ActivatedRoute) {
        var cvID = activateRoute.snapshot.queryParams['ID'];

        var reference = this;

        io.socket.get('/getuser?ID='+cvID, function gotResponse(body, response) {
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
            reference.id = body.id;
        });

        io.socket.get("/ready", function (ready) {
        });

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