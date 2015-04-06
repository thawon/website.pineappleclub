define(
    ["app", "services/app-configuration-service" , "directives/google-map-directive"],
    function (app) {
        "use strict";

        app.controller("ContactController",
            ["$scope", "$location", "AppConfigurationService",
            function ($scope, $location, AppConfigurationService) {
                $scope.location = $location;
                $scope.companyInfo = AppConfigurationService.companyInfo;
            }
        ]);
    });