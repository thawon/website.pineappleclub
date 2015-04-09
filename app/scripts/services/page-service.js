define(
        ["app"],
        function (app) {
            app.factory("PageService", [
                function () {                   
                    var title = "default title",
                        descripiton = "default description",
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