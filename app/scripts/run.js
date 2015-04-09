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

                // setting up page info for search engine optimisation
                PageService.setTitle(AppConfigurationService.page.titlePrefix + " - " + next.data.page.title);
                PageService.setDescription(next.data.page.description);

                ngProgress.complete();
            });
        } ]);
    });