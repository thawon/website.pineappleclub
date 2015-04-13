define(
    ["app", "util", "underscore", "constants/device-sizes",
        "constants/user-roles", "future-states", "services/export-service"],
    function (app, util, _, DEVICE_SIZES, USER_ROLES, futureStates) {
        "use strict";

        app.controller("HeaderClientController",
            ["$scope", "$timeout", "$rootScope", "ExportService",
            function ($scope, $timeout, $rootScope, exports) {
                $scope.configs = {
                    IMG_BIGBANNER: "/images/tree-big.png",
                    IMG_SMALLBANNER: "/images/tree-small.png"
                };

                function resize() {
                    $scope.banner = util.device.isBreakpoint(DEVICE_SIZES.XS) ?
                                            $scope.configs.IMG_SMALLBANNER : $scope.configs.IMG_BIGBANNER;
                };

                exports.addEventListener("resize",
                    $.proxy(
                        function () {
                            $timeout($.proxy(resize, this));
                        }, this), false);

                $rootScope.$on("$stateChangeSuccess", function (event, next) {
                    var allowedStates = _.filter(futureStates,
                                            function (state) { return state.stateName === "login" || state.stateName === "signout"; });

                    $scope.isShown = (_.find(next.data.authorizedRoles, function (role) { return role === USER_ROLES.admin; })
                                        || _.find(allowedStates, function (state) { return state.stateName === next.name; }))
                                        ? false : true;
                });

                resize();
            } ]);
    });