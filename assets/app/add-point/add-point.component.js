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
    var core_1, AddPointComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AddPointComponent = class AddPointComponent {
                constructor() {
                    this.isPublic = true;
                }
                addPublic(x, y, lable, name) {
                    var reference = this;
                    io.socket.post('/point', { x: x, y: y, lable: 'Pu', name: name }, function (resData, jwRes) {
                        console.log(jwRes.statusCode); // => 200
                        reference.showPublic();
                    });
                    this.addPointOpen = !(this.addPointOpen);
                }
                addPrivate(x, y, lable, name) {
                    var reference = this;
                    io.socket.post('/private_point', { x: x, y: y, lable: 'Pr', name: name }, function (resData, jwRes) {
                        console.log(jwRes.statusCode); // => 200
                        reference.showMyPrivat();
                    });
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], AddPointComponent.prototype, "x", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], AddPointComponent.prototype, "y", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], AddPointComponent.prototype, "addPointOpen", void 0);
            AddPointComponent = __decorate([
                core_1.Component({
                    selector: 'add-point',
                    templateUrl: 'app/add-point/add-point.component.html',
                    styleUrls: ['app/add-point/add-point.component.css']
                }),
                __metadata("design:paramtypes", [])
            ], AddPointComponent);
            exports_1("AddPointComponent", AddPointComponent);
        }
    };
});
//# sourceMappingURL=add-point.component.js.map