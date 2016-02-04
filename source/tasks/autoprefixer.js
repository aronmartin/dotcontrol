// Takes all stylesheets from CSS directory in the test folder and applies vendor prefixes to the style rules in the files.

module.exports = {
    options: {
        browsers: ['last 2 versions', 'ie 9']
    },
    files: {
        expand: true,
        cwd: '<%= config.path.test %>/<%= config.asset.css %>',
        src: ['**/*.css'],
        dest: '<%= config.path.test %>/<%= config.asset.css %>'
    }
};
