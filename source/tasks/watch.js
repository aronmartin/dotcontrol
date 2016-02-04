module.exports = {
    options: {
        spawn: false // Set to true to enable child processes.
    },
    sass: {
        files: ['<%= config.path.source %>/sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin']
    },
    image: {
        files: ['<%= config.path.source %>/image/**/*.{jpg,jpeg,gif,png,svg,bmp}'],
        tasks: ['copy:images', 'imagemin']
    },
    jade: {
        files: ['<%= config.path.source %>/jade/**/*.jade'],
        tasks: ['jade:test', 'htmlmin']
    },
    bower: {
        files: ['<%= config.path.source %>/bower/**/*.*'],
        tasks: ['bower_concat']
    },
    javascript: {
        files: ['<%= config.path.source %>/js/**/*.js'],
        tasks: ['concat:js', 'uglify']
    },
    icons: {
        files: ['<%= config.path.source %>/font/**/*.*'],
        tasks: ['copy:fonts_test', 'copy:fonts_build']
    }
};
