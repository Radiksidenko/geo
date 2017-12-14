import {Component} from "@angular/core";

@Component({
    //selector: 'user-profile',
    templateUrl: 'app/chat/chat.html',
    styleUrls: ['app/chat/chat.css']
})

export class chatComponent {

    name;
    room = [];
    dialogName;
    mails;
    recipient;
    roomId;
    id;
    constructor(){
        var reference = this;



        io.socket.get('/getuser_me', function gotResponse(body, response) {
            reference.name = body.name;
            reference.id = body.id;
        });

        io.socket.get('/room', function gotResponse(body, response) {
            reference.room = body;
            console.log(reference.room)
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

    show_messages(roomId, dialogName,recipient) {
        var reference = this;
        reference.roomId = roomId;
        reference.dialogName = dialogName;
        reference.recipient = recipient;
        io.socket.get('/mails?ID='+roomId, function gotResponse(body, response) {

        });
        io.socket.on('Messages', function (body) {
            reference.mails = body;
            console.log(reference.mails)

        });
    }
    send_messages(message) {
        var reference = this;
        io.socket.post('/chat/sent', {roomId: reference.roomId, message: message,recipient:reference.recipient}, function (resData, jwRes) {
            console.log(jwRes.statusCode); // =>
            //reference.show_messages(reference.roomId,reference.dialogName,reference.recipient);
        });
    }

}