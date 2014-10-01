module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'src/**/*.js': ['coverage']
        },
        includeBaseline: true,
        coverageReporter: {
            type: 'text'
        },
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
