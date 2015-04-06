define(
    ["app", "future-states"],
    function (app, futureStates) {
        "use strict";

        app.directive("pcdActiveByState", 
            ["$location", "$rootScope", "NavigatorService",
            function ($location, $rootScope, navigator) {
                var directive = {
                    location: $location,
                    navigator: navigator,
                    link: function (scope, element, attrs) {
                        var that = this;

                        that.element = element;
                        that.scope = scope;
                        
                        function activeByRoute() {
                            var target = _.first(_.where(futureStates, { stateName: attrs["statename"] }));

                            scope.isVisible = (location.pathname === target.urlPrefix);
                        }

                        $rootScope.$on("$stateChangeStart", function (event, next) {
                            activeByRoute();
                        });
                        
                        activeByRoute();
                    }
                }

                return {
                    restrict: "E",
                    link: function (scope, element, attrs) {
                        directive.link(scope, element, attrs);
                    }
                }
            }
        ]);
    });