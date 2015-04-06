define(
    ["app", "services/navigator-service"],
    function (app) {
        "use strict";

        app.controller("FooterController",
            ["$scope", "NavigatorService",
            function ($scope, NavigatorService) {
                $scope.menu = NavigatorService.pages.about;
            }]
        );
    });