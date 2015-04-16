// cmd: node r.js -o build.js
({
    baseUrl: "./app/scripts",
    mainConfigFile: "./app/scripts/main.js",
    name: "main",
    include: [
        "controllers/home-controller",
        "controllers/philosophy-controller",
        "controllers/photos-controller",
        "controllers/services-controller",
        "controllers/dashboard-controller",
        "controllers/auth/login-controller",
        "controllers/signup-controller"
    ],
    out: "./app/scripts/optimized.js",
    uglify: {
        except: [
                "futureState",
                "$q",
                "$element",
                "$attrs"
            ]
        ,beautify: true
    }
})