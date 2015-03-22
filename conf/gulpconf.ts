'use strict';

declare var exports: IExport;

interface IExport {
    config: Object;
}

interface IPath {
    source: string;
    build:  string;
    e2e:    string;
    bower:  string;
}

var paths:IPath = {
    source: './app',
    build: './build',
    e2e: './e2e-test',
    bower: './.bower_components'
};

exports.config = {
    filters: {
        bower: {
            js: [
                '*.js',
                '**/*.js'
            ],
            css: [
                '*.css',
                '**/*.css'
            ],
            font: [
                '*.ttf',
                '*.eot',
                '*.svg',
                '*.woff',
                '*.woff2',
                '*.otf'
            ]
        }
    },
    paths: {
        build: {
            development: paths.build + '/development',
            release: paths.build + '/release',
            requirejs: paths.build + '/requirejs'
        },
        source: {
            typescript: {
                main: [
                    paths.source + '/*.ts',
                    paths.source + '/**/*.ts',
                    '!' + paths.source + '/*.d.ts',
                    '!' + paths.source + '/**/*.d.ts'
                ],
                test: [
                    paths.source + '/test-config.ts',
                    paths.source + '/*.spec.ts',
                    paths.source + '/**/*.spec.ts',
                    '!' + paths.source + '/*.spec.d.ts',
                    '!' + paths.source + '/**/*.spec.d.ts'
                ],
                e2e: [
                    paths.e2e + '/*.e2e.spec.ts',
                    paths.e2e + '/**/*.e2e.spec.ts',
                    '!' + paths.e2e + '/*.e2e.spec.d.ts',
                    '!' + paths.e2e + '/**/*.e2e.spec.d.ts'
                ]
            },
            javascript: {
                test: [],
                e2e: []
            },
            scss: [
                paths.source + '/scss/styles.scss'
            ],
            index: paths.source + '/*.html',
            html: [
                paths.source + '/*.html',
                paths.source + '/**/*.html'
            ]
        }
    },
    typescript: {
        declarationFiles: true,
        noImplicitAny: true,
        target: 'ES6',
        module: 'amd',
        sortOutput: true,
        removeComments: true
    }
};