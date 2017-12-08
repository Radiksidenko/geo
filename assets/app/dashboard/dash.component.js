System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, DashComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            DashComponent = class DashComponent {
                constructor() {
                    this.lat = 46.488012;
                    this.lng = 30.73079860000007;
                    this.zoom = 13;
                    this.My_Y = 0;
                    this.My_X = 0;
                    this.open = [false];
                    this.test_marker = [];
                    var reference = this;
                    io.socket.get('/getuser_me', function gotResponse(body, response) {
                        reference.name = body.name;
                        reference.email = body.email;
                        reference.id = body.id;
                    });
                    io.socket.get('/get_point', function gotResponse(body, response) {
                        reference.test_marker = body;
                        console.log(reference.test_marker);
                    });
                    setInterval(function () {
                    }, 10);
                }
                update(type, value) {
                    io.socket.post('/update', { [type]: value }, function (resData, jwRes) {
                        console.log(jwRes.statusCode); // => 200
                    });
                }
                addPublic(x, y, lable, name) {
                    var reference = this;
                    io.socket.post('/point', { x: x, y: y, lable: 'Pu', name: name }, function (resData, jwRes) {
                        console.log(jwRes.statusCode); // => 200
                        reference.showPublic();
                    });
                }
                addPrivate(x, y, lable, name) {
                    var reference = this;
                    io.socket.post('/private_point', { x: x, y: y, lable: 'Pr', name: name }, function (resData, jwRes) {
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
                mapClicked($event) {
                    this.My_Y = $event.coords.lng;
                    this.My_X = $event.coords.lat;
                    console.log($event.coords.lat);
                    console.log($event.coords.lng);
                }
                showMyPrivat() {
                    var reference = this;
                    io.socket.get('/get_my_point', function gotResponse(body, response) {
                        reference.test_marker = body;
                        console.log(reference.test_marker);
                    });
                }
                showPublic() {
                    var reference = this;
                    io.socket.get('/get_point', function gotResponse(body, response) {
                        reference.test_marker = body;
                    });
                }
                showMyPublic() {
                    var reference = this;
                    io.socket.get('/get_My_Public_point', function gotResponse(body, response) {
                        reference.test_marker = body;
                    });
                }
                dell(id) {
                    var reference = this;
                    io.socket.post('/deletePoint', { id: id }, function (resData, jwRes) {
                        console.log(jwRes.statusCode); // => 200
                        reference.showPublic();
                    });
                }
                leftmtnu() {
                    var menu = document.getElementById("LM");
                    if (menu.className == 'opened') {
                        menu.className = '';
                    }
                    else {
                        menu.className = 'opened';
                    }
                }
                menuUser() {
                    var menu = document.getElementById("account");
                    if (menu.className == 'account active') {
                        menu.className = 'account';
                    }
                    else {
                        menu.className = 'account active';
                    }
                }
                info(id, x, y) {
                    var reference = this;
                    reference.open[id] = true;
                    reference.lat = x;
                    reference.lng = y;
                    reference.zoom = 16;
                }
                close_all() {
                    var reference = this;
                    reference.zoom = 13;
                    for (var i = 1; i < reference.open.length; i++) {
                        reference.open[i] = false;
                    }
                }
            };
            DashComponent = __decorate([
                core_1.Component({
                    // selector: 'my-app',
                    templateUrl: 'app/dashboard/dashboard.html',
                    styleUrls: ['app/dashboard/dashboard.css'],
                }),
                __metadata("design:paramtypes", [])
            ], DashComponent);
            exports_1("DashComponent", DashComponent);
        }
    };
});
//# sourceMappingURL=dash.component.js.map