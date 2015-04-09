define(
    ["app", "services/app-configuration-service", "services/page-service"],
    function (app) {
        "use strict";

        app.controller("ApplicationController",
            ["$scope", "ngProgress", "AppConfigurationService", "PageService",
            function ($scope, ngProgress, AppConfigurationService, PageService) {
                // set page title
                $scope.getTitle = PageService.getTitle;
                $scope.getDescription = PageService.getDescription;

                // setting progress bar color
                ngProgress.color(AppConfigurationService.progress.color);
            }
        ]);
    });