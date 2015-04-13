define(
    ["app", "services/state-change-service", "services/app-configuration-service",
        "services/page-service"],
    function (app) {
        app.run([
        "$rootScope", "StateChangeService",
        "AppConfigurationService", "PageService", "ngProgress",
        function ($rootScope, StateChangeService,
            AppConfigurationService, PageService, ngProgress) {

            $rootScope.$on("$stateChangeStart", function (event, next) {
                StateChangeService.change(next.data.authorizedRoles);
            });

            $rootScope.$on("$stateChangeSuccess", function (event, next) {
                ngProgress.complete();
            });
        } ]);
    });