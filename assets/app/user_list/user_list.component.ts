import {Component} from "@angular/core";
import {Router} from '@angular/router';
@Component({
    //selector: 'user-profile',
    templateUrl: 'app/user_list/user_list.html',
    styleUrls: ['app/user_list/user_list.css']
})

export class user_listComponent {

    user_list = [];

    constructor(private router: Router) {
        var reference = this;



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
            console.log(reference.user_list)
        });
        setInterval(function () {
        }, 10);

    }
    send_messages(recipientId){
        io.socket.post('/create_room',{recipient: recipientId});
        this.router.navigate(['/chat'])
    }


}