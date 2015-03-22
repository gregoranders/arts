'use strict';
var conf = [];

if(process.env.TRAVIS){
    conf = [
        {
            'browserName': 'firefox'
        }
    ];
} else {
    conf = [
        {
            'browserName': 'chrome',
            'directConnect': true,
            'chromeOptions': {
                'args': ['no-sandbox']
            }
        },
        {
            'browserName': 'firefox'
        }
    ];
}

exports.config = {
    allScriptsTimeout: 11000,
    directConnect: false,

    specs: [
        '../build/development/**/*.e2e.spec.js',
        '../build/development/*.e2e.spec.js'
    ],

    multiCapabilities: conf,

    baseUrl: 'http://localhost:9000/',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        isVerbose: true,
        showTiming: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
