System.register(["@angular/core", "@angular/forms", "@angular/platform-browser", "./app.component", "@angular/http", "angular2-google-maps/core", "./app.routes", "./dashboard/dash.component", "./user_list/user_list.component", "./public_users/public_user.component", "./user-profile/user-profile.component", "./chat/chat.component", "./modal/dialog.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, platform_browser_1, app_component_1, http_1, core_2, app_routes_1, dash_component_1, user_list_component_1, public_user_component_1, user_profile_component_1, chat_component_1, dialog_component_1, googleMapsCore, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (dash_component_1_1) {
                dash_component_1 = dash_component_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            },
            function (public_user_component_1_1) {
                public_user_component_1 = public_user_component_1_1;
            },
            function (user_profile_component_1_1) {
                user_profile_component_1 = user_profile_component_1_1;
            },
            function (chat_component_1_1) {
                chat_component_1 = chat_component_1_1;
            },
            function (dialog_component_1_1) {
                dialog_component_1 = dialog_component_1_1;
            }
        ],
        execute: function () {
            googleMapsCore = core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBGDB6yrcAbiygl1ONUANsMXP8gAV9Vc3M',
            });
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    declarations: [app_component_1.AppComponent, dash_component_1.DashComponent, user_profile_component_1.UserProfileComponent, dialog_component_1.DialogComponent, chat_component_1.chatComponent, user_list_component_1.user_listComponent, public_user_component_1.public_userComponent],
                    imports: [app_routes_1.routing, platform_browser_1.BrowserModule, http_1.HttpModule, googleMapsCore, forms_1.FormsModule],
                    bootstrap: [app_component_1.AppComponent],
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map