module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                'assets/main.css': 'main.less'
                }
            },
            production: {
                options: {
                paths: ['assets/css'],
                    plugins: [],
                    modifyVars: {}
                },
                files: {
                'assets/main.css': 'main.less'
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['env']
            },
            dist: {
                files: {
                    'dist/app.js': 'app.es6'
                }
            }
        },
        watch: {
            scripts: {
                files: ['*.es6', '*.less'],
                tasks: ['watcher'],
                options: {
                    spawn: false,
                },
            },
        },
        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 9001,
                    base: ''
                }
            }
        }
      
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('watcher', ['less'], ['babel']);
  
  };