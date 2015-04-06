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
            },
            {
                stateName: "contact",
                urlPrefix: "/contact",
                templateUrl: "views/contact.html",
                type: "requireCtrl",
                controllerPath: "controllers/contact-controller",
                controllerName: "ContactController",
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            },
            {
                stateName: "services",
                urlPrefix: "/services",
                templateUrl: "views/services.html",
                type: "requireCtrl",
                controllerPath: "controllers/services-controller",
                controllerName: "ServicesController",
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            },
            {
                stateName: "philosophy",
                urlPrefix: "/philosophy",
                templateUrl: "views/philosophy.html",
                type: "requireCtrl",
                controllerPath: "controllers/philosophy-controller",
                controllerName: "PhilosophyController",
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            },
            {
                stateName: "photos",
                urlPrefix: "/photos",
                templateUrl: "views/photos.html",
                type: "requireCtrl",
                controllerPath: "controllers/photos-controller",
                controllerName: "PhotosController",
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            }

        ];
    });