define(
    [],
    function () {
        return function (app) {
            var home = requirejs("routes/home");

            app.use("/", home);
        }
    });