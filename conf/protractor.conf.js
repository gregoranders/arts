'use strict';
var conf = [],
    gulpconf = require('./gulpconf');

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
            'directConnect': true
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
        '../' + gulpconf.config.paths.build.development + '/**/*.e2e.spec.js',
        '../' + gulpconf.config.paths.build.development + '/*.e2e.spec.js'
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
