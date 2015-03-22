'use strict';

exports.config = {
    allScriptsTimeout: 11000,
    directConnect: true,

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
        }
    ],

    baseUrl: 'http://localhost:9000/',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        isVerbose: true,
        showTiming: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
