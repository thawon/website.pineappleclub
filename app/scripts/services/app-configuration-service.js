define(
    ["app"],
    function (app) {
        app.factory("AppConfigurationService", [
            function () {
                var configuration = {};

                configuration.project = {
                    name: "Pineapple Club Website"
                };
                
                configuration.companyInfo = {
                    name: "Pineapple Club Family Day Care",
                    location: {
                        lat: -33.945967,
                        lng: 151.137092
                    },
                    contact: {
                        phone: "(02) 8041 8101",
                        mobile: "04 6625 0622",
                        email: "mui@pineappleclub.com.au"
                    }
                };

                configuration.progress = {
                    color: "#1d9ad9"
                };

                return configuration;
            }
        ]);
    });