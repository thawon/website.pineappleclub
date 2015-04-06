define(
    ["app", "util", "constants/device-sizes", "services/export-service"],
    function (app, util, DEVICE_SIZES) {
        "use strict";

        app.controller("HeaderController",
            ["$scope", "$timeout", "ExportService",
            function ($scope, $timeout, exports) {
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
                            $timeout(
                                $.proxy(resize, this));
                        }, this), false);

                resize();
            }]);
    });