System.register(["@angular/router", "./dashboard/dash.component", "./user-profile/user-profile.component", "./chat/chat.component", "./user_list/user_list.component", "./public_users/public_user.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dash_component_1, user_profile_component_1, chat_component_1, user_list_component_1, public_user_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dash_component_1_1) {
                dash_component_1 = dash_component_1_1;
            },
            function (user_profile_component_1_1) {
                user_profile_component_1 = user_profile_component_1_1;
            },
            function (chat_component_1_1) {
                chat_component_1 = chat_component_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            },
            function (public_user_component_1_1) {
                public_user_component_1 = public_user_component_1_1;
            }
        ],
        execute: function () {
            exports_1("routes", routes = [
                { path: 'profile', component: user_profile_component_1.UserProfileComponent },
                { path: 'dashboard', component: dash_component_1.DashComponent },
                { path: 'chat', component: chat_component_1.chatComponent },
                { path: 'users', component: user_list_component_1.user_listComponent },
                { path: 'public_user', component: public_user_component_1.public_userComponent },
            ]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    };
});
//# sourceMappingURL=app.routes.js.map