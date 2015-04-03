define(
    ["app", "services/app-configuration-service"],
    function (app) {
        "use strict";

        app.controller("ApplicationController",
            ["$scope", "ngProgress", "AppConfigurationService",
            function ($scope, ngProgress, AppConfigurationService) {
                // setting progress bar color
                ngProgress.color(AppConfigurationService.progress.color);
            }
        ]);
    });