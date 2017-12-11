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
    var core_1, UserProfileComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            UserProfileComponent = class UserProfileComponent {
                constructor() {
                    this.editing = false;
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
                    io.socket.get("/ready", function (ready) { });
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
                update(type, value) {
                    io.socket.post('/update', { [type]: value }, function (resData, jwRes) {
                        console.log(jwRes.statusCode); // => 200
                    });
                }
            };
            UserProfileComponent = __decorate([
                core_1.Component({
                    //selector: 'user-profile',
                    templateUrl: 'app/user-profile/user-profile.html',
                    styleUrls: ['app/user-profile/user-profile.css']
                }),
                __metadata("design:paramtypes", [])
            ], UserProfileComponent);
            exports_1("UserProfileComponent", UserProfileComponent);
        }
    };
});
//# sourceMappingURL=user-profile.component.js.map