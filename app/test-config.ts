/// <reference path='../types/requirejs/require.d.ts' />

interface Window {
  __karma__: any;
}

var TEST_REGEXP = /.*\.unit\.spec\.js$/;

function collectTestSpecs():Array<string> {
  var allTestFiles:Array<string> = [];

  Object.keys(window.__karma__.files).forEach((file:string) => {
    if (TEST_REGEXP.test(file)) {
      allTestFiles.push(file.replace(/^\/base\//, '').replace(/\.js$/, ''));
    }
  });

  return allTestFiles;
}

requirejs.config({

  baseUrl: '/base',

  paths: {
    'angular': 'vendor/js/angular',
    'angular-animate': 'vendor/js/angular-animate',
    'angular-aria': 'vendor/js/angular-aria',
    'angular-cookies': 'vendor/js/angular-cookies',
    'angular-loader': 'vendor/js/angular-loader',
    'angular-material': 'vendor/js/angular-material',
    'angular-messages': 'vendor/js/angular-messages',
    'angular-mocks': 'vendor/js/angular-mocks',
    'angular-moment': 'vendor/js/angular-moment',
    'angular-resource': 'vendor/js/angular-resource',
    'angular-route': 'vendor/js/angular-route',
    'angular-sanitize': 'vendor/js/angular-sanitize',
    'angular-touch': 'vendor/js/angular-touch',
    'angular-translate': 'vendor/js/angular-translate',
    'jquery': 'vendor/js/jquery',
    'moment': 'vendor/js/moment',
    'text': 'vendor/js/text'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-animate': {
      deps: [
        'angular'
      ]
    },
    'angular-aria': {
      deps: [
        'angular'
      ]
    },
    'angular-cookies': {
      deps: [
        'angular'
      ]
    },
    'angular-loader': {
      deps: [
        'angular'
      ]
    },
    'angular-material': {
      deps: [
        'angular-animate',
        'angular-aria',
        'angular-touch',
      ]
    },
    'angular-messages': {
      deps: [
        'angular'
      ]
    },
    'angular-mocks': {
      deps: [
        'angular'
      ]
    },
    'angular-moment': {
      deps: [
        'angular',
        'moment'
      ]
    },
    'angular-resource': {
      deps: [
        'angular'
      ]
    },
    'angular-route': {
      deps: [
        'angular'
      ]
    },
    'angular-sanitize': {
      deps: [
        'angular'
      ]
    },
    'angular-touch': {
      deps: [
        'angular'
      ]
    },
    'angular-translate': {
      deps: [
        'angular'
      ]
    }
  },

  deps: collectTestSpecs(),

  callback: window.__karma__.start
});
