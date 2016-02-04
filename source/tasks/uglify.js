// Takes the JS files from test folder's JS directory, minifies the content and moves
// them to the build folder's JS directory.

module.exports = {
    build: {
        files: [{
            src: [
                '<%= config.path.test %>/<%= config.asset.js %>/all.js'
            ],
            dest: '<%= config.path.build %>/<%= config.asset.js %>/all.js'
        }]
    }
};
