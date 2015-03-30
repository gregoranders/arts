/// <reference path="./library.d.ts" />

requirejs.config(
  {
    paths: {
      'arts': 'components/arts/Arts',
      'angular': 'vendor/js/angular',
      'angular-animate': 'vendor/js/angular-animate',
      'angular-aria': 'vendor/js/angular-aria',
      'angular-cookies': 'vendor/js/angular-cookies',
      'angular-highlightjs': 'vendor/js/angular-highlightjs',
      'angular-loader': 'vendor/js/angular-loader',
      'angular-local-storage': 'vendor/js/angular-local-storage',
      'angular-material': 'vendor/js/angular-material',
      'angular-messages': 'vendor/js/angular-messages',
      'angular-moment': 'vendor/js/angular-moment',
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
      'highlight': 'vendor/js/highlight.pack',
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
          'angular-touch'
        ]
      },
      'angular-messages': {
        deps: [
          'angular'
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
          'angular-translate',
          'angular-cookies'
        ]
      }
    },
    deps: [
      './boot'
    ]
  }
);
