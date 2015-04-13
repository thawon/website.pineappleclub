define(
        ["app", "constants/string", "services/app-configuration-service"],
        function (app, STRING) {
            app.factory("PageService", ["AppConfigurationService",
                function (AppConfigurationService) {
                    var title = AppConfigurationService.companyInfo.name,
                        descripiton = STRING.empty,
                        page = {
                            getTitle: function () {
                                return title;
                            },
                            setTitle: function (newTitle) {
                                title = newTitle;
                            },
                            getDescription: function () {
                                return descripiton;
                            },
                            setDescription: function (newDescription) {
                                descripiton = newDescription;
                            }
                        };

                    return page;
                }
            ]);
        });