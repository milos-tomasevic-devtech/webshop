module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['**/*.html', '**/*.css'],
                options: {
                    livereload: {
                        port: 9000,
                    }
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');


};