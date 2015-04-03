module.exports = function (grunt) {
    grunt.initConfig({
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: "server.js",
                    node_env: undefined,
                    debug: true
                }
            }
        },
        watch: {
            frontend: {
                options: {
                    livereload: true
                },
                files:
                [
                    "./app/lesses/*.less",
                    "./app/lesses/directives/*.less"
                ],
                tasks: ["less"]
            },
            server: {
                files: ["./server/**/*"],
                tasks: ["express:dev"],
                options: {
                    //Without this option specified express won't be reloaded
                    nospawn: true,
                    atBegin: true
                }
            }
        },
        "node-inspector": {
            dev: {
                options: {
                    "web-port": 8082,
                    "no-preload": true
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["./less"],
                    yuicompress: true
                },
                files: {
                    "./app/styles/custom-bootstrap.css": "./app/lesses/styles.less"
                }
            }
        },
        karma: {
            unit: {
                configFile: "test/karma.conf.js",
                browsers: ["PhantomJS"],
                singleRun: true
            }
        },
        requirejs: {
            prod: {
                options: {
                    baseUrl: "./app/scripts",
                    mainConfigFile: "./app/scripts/main.js",
                    name: "main",
                    include: [
                        "controllers/home-controller",
                        "controllers/profile-controller",
                        "controllers/auth/login-controller"
                    ],
                    out: "./app/scripts/optimized.js",
                    uglify: {
                        except: [
                            "futureState",
                            "$q",
                            "$element",
                            "$attrs"
                        ]
                    }
                }
            }
        },
        parallel: {
            dev: {
                options: {
                    stream: true
                },
                tasks: [{
                    grunt: true,
                    args: ["watch:frontend"]
                }, {
                    grunt: true,
                    args: ["watch:server"]
                }, {
                    grunt: true,
                    args: ["node-inspector:dev"]
                }]
            },
            test: {
                option: {
                    stream: true
                },
                tasks: [{
                    grunt: true,
                    args: ["karma:unit"]
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-express-server");
    grunt.loadNpmTasks("grunt-env");
    grunt.loadNpmTasks("grunt-node-inspector");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-parallel");

    // test
    grunt.registerTask("test", "run specs",
    ["parallel:test"]);

    // development
    grunt.registerTask("dev", "launch webserver and watch task",
    ["parallel:dev"]);

    // production
    grunt.registerTask("prod", "minifies js files",
    ["requirejs:prod"]);
};