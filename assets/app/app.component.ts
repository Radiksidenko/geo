import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/component/nav.html'

})

export class AppComponent {
    reference: any;
    lat: number = 46.488012;
    lng: number = 30.73079860000007;
    zoom: number = 13;
    name;
    email;
    id;
    My_Y = 0;
    My_X = 0;

    lal = [
        {
            x: 46.485556,
            y: 30.741667000000007,
            label: 'c',
            name: "kek"
        }
    ]

    markers = [
        {
            x: 46.488012,
            y: 30.73079860000007,
            label: 'A',
            name: "lal"
        },
        {
            x: 46.484583,
            y: 30.732600000000048,
            label: 'B',
            name: "lol"
        },
        {
            x: 46.485556,
            y: 30.741667000000007,
            label: 'c',
            name: "kek"
        },
        {
            x: 46.484941,
            y: 30.732995399999936,
            label: 'd'
        }

    ]

    test_marker = [];

    constructor() {
        var reference = this;

        io.socket.get('/getuser_me', function gotResponse(body, response) {
            reference.name = body.name;
            reference.email = body.email;
            reference.id = body.id;

        });

        io.socket.get('/get_point', function gotResponse(body, response) {
            reference.test_marker = body;
            console.log(reference.markers);
            console.log(reference.test_marker);


        });

    }

    update(type:string,value){
        io.socket.post('/update', {[type]: value}, function (resData, jwRes) {
            console.log(jwRes.statusCode); // => 200
        });
    }
    addPublic(x, y, lable: string, name: string) {
        var reference = this;
        io.socket.post('/point', {x: x, y: y, lable: 'Pu', name: name}, function (resData, jwRes) {
            console.log(jwRes.statusCode); // => 200
            reference.showPublic();
        });
    }



    addPrivate(x, y, lable: string, name: string) {
        var reference = this;
        io.socket.post('/private_point', {x: x, y: y, lable: 'Pr', name: name}, function (resData, jwRes) {
            console.log(jwRes.statusCode); // => 200
            reference.showMyPrivat();
        });

    }

    geo() {
        var reference = this;
        var geoID;
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        if (navigator.geolocation) {
            console.log("**** Start watching Geo location ****");
            geoID = navigator.geolocation.watchPosition(watchPosition, geoLocationWatchPositionError, options);
        }

        function watchPosition(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            reference.My_Y = lon;
            reference.My_X = lat;

            console.log("watching: " + lat + " " + lon);
        }

        function geoLocationWatchPositionError(error) {
            console.warn('Geo Watch error:' + error.code + ' ' + error.message);
        }
    }

    mapClicked($event: MouseEvent) {
        this.My_Y = $event.coords.lng;
        this.My_X = $event.coords.lat;
        console.log($event.coords.lat);
        console.log($event.coords.lng);

    }

    showMyPrivat() {
        var reference = this;

        io.socket.get('/get_my_point', function gotResponse(body, response) {
            reference.test_marker = body;
            console.log(reference.markers);
            console.log(reference.test_marker);
        });
    }

    showPublic() {
        var reference = this;
        io.socket.get('/get_point', function gotResponse(body, response) {
            reference.test_marker = body;
        });

    }

    showMyPublic(){
        var reference = this;
        io.socket.get('/get_My_Public_point', function gotResponse(body, response) {
            reference.test_marker = body;
        });
    }
    dell(id){
        var reference = this;
        io.socket.post('/deletePoint', {id: id}, function (resData, jwRes) {
            console.log(jwRes.statusCode); // => 200
            reference.showPublic();
        });
    }


}


