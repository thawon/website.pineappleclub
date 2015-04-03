({
    baseUrl: "./app/scripts",
    mainConfigFile: "./app/scripts/main.js",
    name: "main",
    include: [
        "controllers/home-controller"
    ],
    out: "./app/scripts/optimized.js",
    uglify: {
        except: [
                "futureState",
                "$q",
                "$element",
                "$attrs"
            ]
        //,beautify: true
    }
})