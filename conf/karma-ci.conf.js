'use strict';

var gulpconf = require('./gulpconf.js');

module.exports = function (config) {
    config.set({

        basePath: '../' + gulpconf.config.paths.build.development,

        files: [
            {pattern: 'vendor/js/*.js', included: false},
            {pattern: 'components/**/*.js', included: false},
            {pattern: '*.html', included: false},
            {pattern: '**/*.html', included: false},
            {pattern: '**/*.unit.spec.js', included: false},
            './test-config.js'
        ],

        autoWatch: true,

        port: 9001,

        preprocessors: {
            '!(vendor)/**/!(*spec).js': ['coverage']
        },

        frameworks: ['jasmine', 'requirejs'],

        browsers: [
            'PhantomJS'
        ],

        exclude: [
            'config.js',
            'boot.js'
        ],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-requirejs',
            'karma-coverage'
        ],

        reporters: ['progress', 'coverage', 'junit'],

        singleRun: true,

        colors: true,

        logLevel: config.LOG_INFO,

        junitReporter : {
            outputFile: './test-coverage/test-results.xml',
            suite: 'unit'
        },

        coverageReporter: {
            type: 'lcov',
            dir: './test-coverage/'
        }

    });
};
