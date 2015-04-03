define(
    ["constants/user-roles"],
    function (USER_ROLES) {
        return [
            {
                stateName: "home",
                urlPrefix: "/",
                templateUrl: "views/home.html",
                type: "requireCtrl",
                controllerPath: "controllers/home-controller",
                controllerName: "HomeController",
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            }
        ];
    });