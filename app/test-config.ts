/// <reference path="./library.d.ts" />

interface Window
{
  __karma__: any;
}

var TEST_REGEXP = /.*\.unit\.spec\.js$/;

function collectTestSpecs():Array<string>
{
  var allTestFiles:Array<string> = [];

  Object.keys(window.__karma__.files).forEach((file:string) =>
  {
    if (TEST_REGEXP.test(file))
    {
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
    'angular-file-upload': 'vendor/js/angular-file-upload',
    'angular-highlightjs': 'vendor/js/angular-highlightjs',
    'angular-loader': 'vendor/js/angular-loader',
    'angular-local-storage': 'vendor/js/angular-local-storage',
    'angular-material': 'vendor/js/angular-material',
    'angular-messages': 'vendor/js/angular-messages',
    'angular-mocks': 'vendor/js/angular-mocks',
    'angular-moment': 'vendor/js/angular-moment',
    'angular-nvd3-directives': 'vendor/js/angularjs-nvd3-directives',
    'angular-resource': 'vendor/js/angular-resource',
    'angular-route': 'vendor/js/angular-route',
    'angular-sanitize': 'vendor/js/angular-sanitize',
    'angular-touch': 'vendor/js/angular-touch',
    'angular-translate': 'vendor/js/angular-translate',
    'angular-translate-handler-log': 'vendor/js/angular-translate-handler-log',
    'angular-translate-interpolation-messageformat': 'vendor/js/angular-translate-interpolation-messageformat',
    'angular-translate-loader-partial': 'vendor/js/angular-translate-loader-partial',
    'angular-translate-loader-static-files': 'vendor/js/angular-translate-loader-static-files',
    'angular-translate-loader-url': 'vendor/js/angular-translate-loader-url',
    'angular-translate-storage-cookie': 'vendor/js/angular-translate-storage-cookie',
    'angular-translate-storage-local': 'vendor/js/angular-translate-storage-local',
    'angular-ui-grid': 'vendor/js/ui-grid',
    'd3': 'vendor/js/d3',
    'highlight': 'vendor/js/highlight.pack',
    'jquery': 'vendor/js/jquery',
    'moment': 'vendor/js/moment',
    'nv.d3': 'vendor/js/nv.d3',
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
    'angular-file-upload': {
      deps: [
        'angular'
      ]
    },
    'angular-highlightjs': {
      deps: [
        'angular',
        'highlight'
      ]
    },
    'angular-loader': {
      deps: [
        'angular'
      ]
    },
    'angular-local-storage': {
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
    'angular-moment': {
      deps: [
        'angular',
        'moment'
      ]
    },
    'angular-mocks': {
      deps: [
        'angular'
      ]
    },
    'angular-nvd3-directives': {
      deps: [
        'angular',
        'nv.d3'
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
    },
    'angular-translate-handler-log': {
      deps: [
        'angular-translate'
      ]
    },
    'angular-translate-interpolation-messageformat': {
      deps: [
        'angular-translate'
      ]
    },
    'angular-translate-loader-partial': {
      deps: [
        'angular-translate'
      ]
    },
    'angular-translate-loader-static-files': {
      deps: [
        'angular-translate'
      ]
    },
    'angular-translate-loader-url': {
      deps: [
        'angular-translate'
      ]
    },
    'angular-translate-storage-cookie': {
      deps: [
        'angular-translate',
        'angular-cookies'
      ]
    },
    'angular-translate-storage-local': {
      deps: [
        'angular-translate'
      ]
    },
    'angular-ui-grid': {
      deps: [
        'angular'
      ]
    },
    'nv.d3': {
      deps: [
        'd3'
      ]
    }
  },

  deps: collectTestSpecs(),

  callback: window.__karma__.start
});
