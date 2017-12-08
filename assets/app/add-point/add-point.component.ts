import { Component, Input } from '@angular/core';

@Component({
    selector: 'add-point',
    templateUrl: 'app/add-point/add-point.component.html',
    styleUrls: ['app/add-point/add-point.component.css']
})

export class AddPointComponent {
    @Input() x: number;
    @Input() y: number;
    lable: string;
    name: string;
    isPublic: boolean = true;
    @Input() addPointOpen;

    constructor(){}

    addPublic(x, y, lable: string, name: string) {
        var reference = this;
        io.socket.post('/point', {x: x, y: y, lable: 'Pu', name: name}, function (resData, jwRes) {
            console.log(jwRes.statusCode); // => 200
            reference.showPublic();
        });
        this.addPointOpen = !(this.addPointOpen);
    }



    addPrivate(x, y, lable: string, name: string) {
        var reference = this;
        io.socket.post('/private_point', {x: x, y: y, lable: 'Pr', name: name}, function (resData, jwRes) {
            console.log(jwRes.statusCode); // => 200
            reference.showMyPrivat();
        });

    }
}
