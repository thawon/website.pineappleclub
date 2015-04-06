define(
    ["app", "services/navigator-service", "services/app-configuration-service",
        "directives/device-height-directive"],
    function (app) {
        "use strict";

        app.controller("SideBarController",
            ["$scope", "NavigatorService", "AppConfigurationService",
            function ($scope, NavigatorService, AppConfigurationService) {
                $scope.configs = {
                    ELE_SIDEBAR: ".row-offcanvas",
                    CONS_ACTIVE: "active",
                    CSS_SIDEBARSHOW: "side-bar-show",
                    CSS_SIDEBARHIDE: "side-bar-hide"
                };

                function toggleSideBar() {
                    $($scope.configs.ELE_SIDEBAR).toggleClass($scope.configs.CONS_ACTIVE);
                }

                $scope.project = AppConfigurationService.companyInfo;
                $scope.menu = NavigatorService.pages.main;
                $scope.toggleSideBar = $.proxy(toggleSideBar, this);
            }
        ]);
    });