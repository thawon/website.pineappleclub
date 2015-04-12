define(
    ["app", "services/app-configuration-service", "directives/plus-gallery-directive"],
    function (app) {
        "use strict";

        app.controller("PhotosController",
            ["$scope", "AppConfigurationService",
            function ($scope, AppConfigurationService) {
                $scope.userId = AppConfigurationService.googlePlusUserId;
            }
        ]);
    });