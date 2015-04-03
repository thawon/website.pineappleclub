define(
    ["app", "constants/auth-events", "constants/user-roles", "services/future-state-service"],
    function (app, AUTH_EVENTS, USER_ROLES) {
        app.factory("StateChangeService",
            ["$rootScope", "FutureStateService", "ngProgress",
            function ($rootScope, FutureStateService, ngProgress) {
                var stateChangeService = {
                    change: function (authorizedRoles) {

                        if (authorizedRoles[0] === USER_ROLES.all) {

                            ngProgress.start();

                        } else {

                            FutureStateService.changeState("notfound");

                        }
                        
                    }
                };

                return stateChangeService;
            }
        ]);
    });