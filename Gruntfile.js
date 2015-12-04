module.exports = function(grunt) {
    // Configuramos Grunt
    grunt.initConfig({
        less: {
            dev: {
                files: {
                    "styles/style.css": "less/style.less"
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require("autoprefixer")(), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dev: {
                src: "styles/*.css"
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'vendor/angular/*.js',
                    'scripts/**/*.js', // cualquier archivo .js dentro de alguna subcarpeta de scripts
                    'scripts/app.js'
                ],
                dest: 'dist/built.js',
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/built.min.js': ['dist/built.js']
                }
            }
        },
        watch: {
            options: {
                spawn: true
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less:dev', 'postcss:dev']
            },
            js: {
                files: ['scripts/**/*.js', 'scripts/*.js'],
                tasks: ['concat']
            }
        }
    });

    // Cargar módulos de Grunt
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Definimos las tareas disponibles
    grunt.registerTask("default", ["less:dev", "postcss:dev", "concat:dist", "watch"]);
    grunt.registerTask("lessc", ["less:dev", "postcss:dev"]);
    grunt.registerTask("concatjs", ["concat:dist"]);
    grunt.registerTask("production", ["less:dev", "postcss:dev", "concat:dist", "uglify"]);
};
