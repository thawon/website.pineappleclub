define(
    ["app", "services/app-configuration-service", "services/navigator-service"],
    function (app) {
        "use strict";

        app.controller("NavigatorController",
            ["$scope", "AppConfigurationService", "NavigatorService",
            function ($scope, AppConfigurationService, NavigatorService) {
                $scope.companyInfo = AppConfigurationService.companyInfo;
                $scope.menu = NavigatorService.pages.main;

                $scope.toggleSideBar = function () {
                    $(".row-offcanvas").toggleClass("active");
                }
            }
        ]);
    });