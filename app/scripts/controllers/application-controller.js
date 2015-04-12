define(
    ["app", "services/auth-service", "services/app-configuration-service", "services/page-service"],
    function (app) {
        "use strict";

        app.controller("ApplicationController",
            ["$scope", "ngProgress", "AuthService", "AppConfigurationService", "PageService",
            function ($scope, ngProgress, AuthService, AppConfigurationService, PageService) {

                $scope.setCurrentUser = function (user) {
                    $scope.currentUser = user;
                }

                // set page title
                $scope.getTitle = PageService.getTitle;
                $scope.getDescription = PageService.getDescription;

                // setting progress bar color
                ngProgress.color(AppConfigurationService.progress.color);

                // check if the user are still logged in from last session.
                AuthService.authenticated()
                .then(function (data) {
                    if (data.success) {
                        $scope.setCurrentUser(AuthService.getCurrentUser());
                    }
                });
            }
        ]);
    });