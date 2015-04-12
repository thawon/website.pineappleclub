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
                    authorizedRoles: [USER_ROLES.all],
                    page: {
                        title: "Child Care Service",
                        description: "We provide high quality child care service supported by Integricare." +
                                        "The service is operated by experienced diploma qualification educator."
                    }
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
                    authorizedRoles: [USER_ROLES.all],
                    page: {
                        title: "Near Rockdale and Banksia train station",
                        description: "Our location is near Rockdale and Banksia train station."
                    }
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
                    authorizedRoles: [USER_ROLES.all],
                    page: {
                        title: "Family Day Care, Before/After school care, Vocation care",
                        description: "We provide Family Day Care, Before/After school care and Vocation care."
                    }
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
                    authorizedRoles: [USER_ROLES.all],
                    page: {
                        title: "Unlocking child's full potential",
                        description: "We believe early learning is the key to unlocking a child's full potential."
                    }
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
                    authorizedRoles: [USER_ROLES.all],
                    page: {
                        title: "Playroom, Creative corner, Art and craft and outside playground",
                        description: "Our facilities are Playroom, Creative corner, Art and craft and outside playground."
                    }
                }
            },
            {
                stateName: "login",
                urlPrefix: "/login",
                templateUrl: "views/auth/login.html",
                type: "requireCtrl",
                controllerPath: "controllers/auth/login-controller",
                controllerName: "LoginController",
                data: {
                    authorizedRoles: [USER_ROLES.all],
                    page: {
                        title: "Login",
                        description: "admin user authentication"
                    }
                }
            },
            {
                stateName: "signout",
                urlPrefix: "/signout",
                templateUrl: "views/auth/signout.html",
                type: "requireCtrl",
                data: {
                    authorizedRoles: [USER_ROLES.all],
                    page: {
                        title: "Sign out",
                        description: "admin user sign out"
                    }
                }
            },
            {
                stateName: "dashboard",
                urlPrefix: "/dashboard",
                templateUrl: "views/dashboard.html",
                type: "requireCtrl",
                controllerPath: "controllers/dashboard-controller",
                controllerName: "DashboardController",
                data: {
                    authorizedRoles: [USER_ROLES.admin],
                    page: {
                        title: "Admin Dashboard",
                        description: ""
                    }
                }
            }
        ];
    });