/// <reference path='../types/requirejs/require.d.ts' />

requirejs.config(
    {
        paths: {
            'angular':           'vendor/js/angular',
            'angular-animate':   'vendor/js/angular-animate',
            'angular-aria':      'vendor/js/angular-aria',
            'angular-cookies':   'vendor/js/angular-cookies',
            'angular-loader':    'vendor/js/angular-loader',
            'angular-material':  'vendor/js/angular-material',
            'angular-resource':  'vendor/js/angular-resource',
            'angular-route':     'vendor/js/angular-route',
            'angular-sanitize':  'vendor/js/angular-sanitize',
            'angular-touch':     'vendor/js/angular-touch',
            'angular-translate': 'vendor/js/angular-translate',
            'moment':            'vendor/js/moment'
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
        deps: [
            './boot'
        ]
    }
);
