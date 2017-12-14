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
    var core_1, chatComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            chatComponent = class chatComponent {
                constructor() {
                    this.room = [];
                    var reference = this;
                    io.socket.get('/getuser_me', function gotResponse(body, response) {
                        reference.name = body.name;
                        reference.id = body.id;
                    });
                    io.socket.get('/room', function gotResponse(body, response) {
                        reference.room = body;
                        console.log(reference.room);
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
                show_messages(roomId, dialogName, recipient) {
                    var reference = this;
                    reference.roomId = roomId;
                    reference.dialogName = dialogName;
                    reference.recipient = recipient;
                    io.socket.get('/mails?ID=' + roomId, function gotResponse(body, response) {
                    });
                    io.socket.on('Messages', function (body) {
                        reference.mails = body;
                        console.log(reference.mails);
                    });
                }
                send_messages(message) {
                    var reference = this;
                    io.socket.post('/chat/sent', { roomId: reference.roomId, message: message, recipient: reference.recipient }, function (resData, jwRes) {
                        console.log(jwRes.statusCode); // =>
                        //reference.show_messages(reference.roomId,reference.dialogName,reference.recipient);
                    });
                }
            };
            chatComponent = __decorate([
                core_1.Component({
                    //selector: 'user-profile',
                    templateUrl: 'app/chat/chat.html',
                    styleUrls: ['app/chat/chat.css']
                }),
                __metadata("design:paramtypes", [])
            ], chatComponent);
            exports_1("chatComponent", chatComponent);
        }
    };
});
//# sourceMappingURL=chat.component.js.map