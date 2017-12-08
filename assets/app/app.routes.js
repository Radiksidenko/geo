System.register(["@angular/router", "./dashboard/dash.component", "./user-profile/user-profile.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dash_component_1, user_profile_component_1, routes, routing;
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
            }
        ],
        execute: function () {
            exports_1("routes", routes = [
                { path: 'profile', component: user_profile_component_1.UserProfileComponent },
                { path: 'dashboard', component: dash_component_1.DashComponent },
            ]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    };
});
//# sourceMappingURL=app.routes.js.map