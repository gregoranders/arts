'use strict';

exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '../build/development/**/*.e2e.spec.js',
        '../build/development/*.e2e.spec.js'
    ],

    multiCapabilities: [
        {
            'browserName': 'chrome',
            'chromeOptions': {
                'args': ['no-sandbox']
            }
        },
        {
            'browserName': 'firefox'
        }
    ],

    baseUrl: 'http://localhost:9000/',

    seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

    framework: 'jasmine',

    jasmineNodeOpts: {
        isVerbose: true,
        showTiming: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
