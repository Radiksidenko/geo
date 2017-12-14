System.register(["@angular/core", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, router_1, user_listComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            user_listComponent = class user_listComponent {
                constructor(router) {
                    this.router = router;
                    this.user_list = [];
                    var reference = this;
                    io.socket.get('/getuser_me', function gotResponse(body, response) {
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
                    io.socket.get('/user_list', function gotResponse(body, response) {
                        reference.user_list = body;
                        console.log(reference.user_list);
                    });
                    setInterval(function () {
                    }, 10);
                }
                send_messages(recipientId) {
                    io.socket.post('/create_room', { recipient: recipientId });
                    this.router.navigate(['/chat']);
                }
            };
            user_listComponent = __decorate([
                core_1.Component({
                    //selector: 'user-profile',
                    templateUrl: 'app/user_list/user_list.html',
                    styleUrls: ['app/user_list/user_list.css']
                }),
                __metadata("design:paramtypes", [router_1.Router])
            ], user_listComponent);
            exports_1("user_listComponent", user_listComponent);
        }
    };
});
//# sourceMappingURL=user_list.component.js.map