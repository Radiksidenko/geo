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
                    this.now_X = 46.488012;
                    this.now_Y = 30.73079860000007;
                    this.add_point = false;
                    this.addpont = false;
                    this.open = [false];
                    this.test_marker = [];
                    this.markerComments = [];
                    this.status = 'all';
                    var reference = this;
                    io.socket.get('/getuser_me', function gotResponse(body, response) {
                        reference.name = body.name;
                        reference.email = body.email;
                        reference.id = body.id;
                    });
                    io.socket.get('/get_point', function gotResponse(body, response) {
                    });
                    io.socket.on('allPoint', function (body) {
                        if (reference.status == 'all') {
                            reference.test_marker = body;
                            console.log(reference.status);
                        }
                    });
                    setInterval(function () {
                    }, 10);
                }
                update(type, value) {
                    io.socket.post('/update', { [type]: value }, function (resData, jwRes) {
                        console.log(jwRes.statusCode); // => 200
                    });
                }
                addPublic(x, y, name, description) {
                    var reference = this;
                    io.socket.post('/point', { x: x, y: y, lable: 'Pu', name: name }, function (resData, jwRes) {
                        console.log(resData); // => 200
                        io.socket.post('/addComments', {
                            point: resData.id,
                            comments: description,
                            type: 'description'
                        }, function (resData, jwRes) {
                            console.log(jwRes.statusCode); // => 200
                        });
                        reference.showPublic();
                    });
                }
                addPrivate(x, y, name, description) {
                    var reference = this;
                    io.socket.post('/private_point', { x: x, y: y, lable: 'Pr', name: name }, function (resData, jwRes) {
                        io.socket.post('/addComments', {
                            point: resData.id,
                            comments: description,
                            type: 'description'
                        }, function (resData, jwRes) {
                            console.log(jwRes.statusCode); // => 200
                        });
                        reference.showMyPrivat();
                    });
                }
                geo() {
                    var reference = this;
                    reference.zoom = 13;
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
                        setgeo(position);
                        reference.zoom = 13;
                        console.log("watching: " + lat + " " + lon);
                    }
                    function setgeo(position) {
                        reference.now_Y = position.coords.longitude;
                        reference.now_X = position.coords.latitude;
                        reference.lat = reference.now_X;
                        reference.lng = reference.now_Y;
                    }
                    function geoLocationWatchPositionError(error) {
                        console.warn('Geo Watch error:' + error.code + ' ' + error.message);
                    }
                }
                mapClicked($event) {
                    if (this.add_point == true) {
                        this.My_Y = $event.coords.lng;
                        this.My_X = $event.coords.lat;
                        this.addpont = true;
                    }
                    console.log($event.coords.lat);
                    console.log($event.coords.lng);
                }
                showMyPrivat() {
                    var reference = this;
                    io.socket.get('/get_my_point', function gotResponse(body, response) {
                        reference.test_marker = body;
                        reference.status = 'myPrivat';
                        console.log(body);
                    });
                }
                showPublic() {
                    var reference = this;
                    io.socket.get('/get_point', function gotResponse(body, response) {
                        reference.status = 'all';
                        console.log(reference.status);
                    });
                }
                showMyPublic() {
                    var reference = this;
                    io.socket.get('/get_My_Public_point', function gotResponse(body, response) {
                        reference.test_marker = body;
                        reference.status = 'myPoint';
                        console.log(reference.status);
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
                    for (var i = 0; i < reference.open.length; i++) {
                        reference.open[i] = false;
                    }
                }
                add() {
                    this.add_point = true;
                }
                addComments(point, comments, type) {
                    var reference = this;
                    io.socket.post('/addComments', { point: point, comments: comments, type: type }, function (resData, jwRes) {
                        console.log(jwRes.statusCode); // => 200
                        reference.showCommentsF(point, reference.commentsName);
                    });
                }
                showCommentsF(id, name) {
                    var reference = this;
                    reference.commentsId = id;
                    reference.commentsName = name;
                    io.socket.get('/getComments?ID=' + id, function gotResponse(body, response) {
                    });
                    io.socket.on('Comments', function (body) {
                        reference.markerComments = body;
                    });
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