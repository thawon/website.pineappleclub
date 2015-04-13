define(["angularMocks", "controllers/header-client-controller", "constants/user-roles"],
    function (angularMocks, target, USER_ROLES) {
        "use strict";

        describe("Unit: HeaderClientController", function () {

            beforeEach(module("website.pineappleclub"));

            var ctrl, scope, rootScope, timeout, ExportServiceMock;

            beforeEach(inject(function ($controller, $rootScope, _$timeout_) {
                timeout = _$timeout_;

                scope = $rootScope.$new();
                rootScope = $rootScope.$new();

                ExportServiceMock = {
                    addEventListener: function () { }
                };

                ctrl = $controller("HeaderClientController", {
                    $scope: scope,
                    $rootScope: rootScope,
                    $timeout: timeout,
                    exports: ExportServiceMock
                });
            }));

            it("header is shown for non-admin page",
            function () {
                var next = {
                        name: "home",
                        data: {
                            authorizedRoles: [USER_ROLES.all]
                        }
                    };

                rootScope.$broadcast("$stateChangeSuccess", next);
                
                expect(scope.isShown).toBe(true);
            });

            it("header is hidden for admin",
            function () {
                var next = {
                    name: "dashboard",
                    data: {
                        authorizedRoles: [USER_ROLES.admin]
                    }
                };

                rootScope.$broadcast("$stateChangeSuccess", next);

                expect(scope.isShown).toBe(false);
            });

            it("header is hidden for login and signout pages",
            function () {
                var next = {
                    name: "login",
                    data: {
                        authorizedRoles: [USER_ROLES.admin]
                    }
                };

                rootScope.$broadcast("$stateChangeSuccess", next);

                expect(scope.isShown).toBe(false);
            });
        });
    });