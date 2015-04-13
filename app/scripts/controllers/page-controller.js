define(
    ["app", "services/page-service", "services/app-configuration-service"],
    function (app) {
        "use strict";

        app.controller("PageController",
            ["$scope", "$rootScope", "PageService", "AppConfigurationService", 
            function ($scope, $rootScope, PageService, AppConfigurationService) {

                $scope.getTitle = PageService.getTitle;
                $scope.getDescription = PageService.getDescription;

                $rootScope.$on("$stateChangeSuccess", function (event, next) {

                    // setting up page info for search engine optimisation
                    PageService.setTitle(AppConfigurationService.page.titlePrefix + " - " + next.data.page.title);
                    PageService.setDescription(next.data.page.description);

                });
            }
        ]);
    });