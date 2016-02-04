module.exports = function (grunt) {
    "use strict";

    function loadTasks(path) {
        var glob = require('glob'),
            object = {},
            key;

        glob.sync('*', {cwd: path}).forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        return object;
    }

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        config: (grunt.file.isFile('source/config/paths.json')) ? grunt.file.readJSON('source/config/paths.json') : {}
    };

    grunt.util._.extend(config, loadTasks('./source/tasks/'));
    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('dev', [
        'clean:test',
        'jade',
        'sass',
        'autoprefixer',
        'bower_concat',
        'concat:js',
        'copy:images',
        'copy:fonts_test'
    ]);

    grunt.registerTask('build', [
        'clean:build',
        'htmlmin',
        'cssmin',
        'uglify',
        'imagemin',
        'copy:fonts_build'
    ]);

    grunt.registerTask('default', ['dev', 'build', 'browserSync', 'watch']);
};
