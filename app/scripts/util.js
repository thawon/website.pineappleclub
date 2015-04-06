define(
    function () {
        var util = {};
        
        util.device = {
            isBreakpoint: function (size) {
                return $(".device-" + size).is(":visible");
            }
        };

        return util;
    });