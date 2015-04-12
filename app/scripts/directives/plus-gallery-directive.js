define(
    ["app", "plusgallery"],
    function (app) {
        "use strict";

        app.directive("pcdPlusGallery", [
            function () {
                var directive = {
                    link: function (scope, element, attrs) {
                        $(element).attr("data-userid", attrs.userid);

                        $(element).plusGallery();
                    }
                }

                return {
                    restrict: "A",
                    link: function (scope, element, attrs) {
                        directive.link(scope, element, attrs);
                    }
                }
            }
        ]);
    });