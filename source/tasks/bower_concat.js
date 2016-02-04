// Concats all the bower dependencies into the configured directory in the source folder.

module.exports = {
    all: {
        dest: '<%= config.path.source %>/js/lib/bower.js',
        exclude: 'bourbon'
    }
};
