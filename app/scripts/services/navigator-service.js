define(
    ["app"],
    function (app) {
        app.factory("NavigatorService", ["AppConfigurationService",
            function (appConfigurationService) {
                var navigator = {},
                    items = {
                        home: { name: "home", display: "Home", path: "/" },
                        services: { name: "services", display: "Services", path: "/services" },
                        photos: { name: "photos", display: "Photos", path: "/photos" },
                        philosophy: { name: "philosophy", display: "Philosophy", path: "/philosophy" },
                        contact: { name: "contact", display: "Contact", path: "/contact" }
                    };

                navigator.pages = {
                    main: {
                        name: "main",
                        display: "Menu",
                        items: [
                            items.home,
                            items.services,
                            //items.photos,
                            items.philosophy,
                            items.contact
                        ]
                    },
                    about: {
                        name: "about",
                        display: "About",
                        items: [
                            items.contact,
                            items.philosophy
                        ]
                    }
                };
                
                return navigator;
            }
        ]);
    });