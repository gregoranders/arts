/// <reference path="../types/gulp/gulp.d.ts" />

'use strict';
var amd = require('amd-optimize'),
    bower = require('main-bower-files'),
    through = require('through2'),
    filter = require('gulp-filter'),
    gulp = require('gulp'),
    karma = require('gulp-karma'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    maps = require('gulp-sourcemaps'),
    merge = require('merge2'),
    minCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    os = require('os'),
    protractor = require('gulp-protractor').protractor,
    push = require('connect-pushstate'),
    ts = require('gulp-typescript'),
    tsExtends = /^var __extends =/,
    istanbulIgnoreTypeScriptExtend = function() {
        return through.obj(function(file: any, enc: any, done: any) {
            if (file.isBuffer() && tsExtends.test(file.contents)) {
                file.contents = Buffer.concat([
                    new Buffer('/* istanbul ignore next: TypeScript extend */' + os.EOL),
                    file.contents
                ]);
            }
            this.push(file);
            done();
        });
    };

exports.func = {

    build: {
        requirejs: function (out: string, destination: any, source: any, mod: string, exclude: string[], compress: any, sourceMaps: any) {
            return gulp.src([source + '/*.js', source + '/**/*.js'])
                .pipe(gulpif(compress && sourceMaps, maps.init()))
                .pipe(amd(mod, {
                    baseUrl: source,
                    configFile: source + '/config.js',
                    findNestedDependencies: true,
                    exclude: exclude
                }))
                .pipe(concat(out))
                .pipe(gulpif(compress, uglify()))
                .pipe(gulpif(compress && sourceMaps, maps.write()))
                .pipe(gulp.dest(destination));
        },
        bower: function (destination: any, filters: any, compress: any, sourceMaps: any) {
            var jsFilter = filter(filters.js),
                cssFilter = filter(filters.css),
                fontFilter = filter(filters.font);

            return gulp.src(bower({filter: filters.exclude}))
                .pipe(gulpif(compress && sourceMaps, maps.init()))
                .pipe(jsFilter)
                .pipe(gulpif(compress, uglify()))
                .pipe(rename(function (path: any) {
                    path.dirname = '/js';
                }))
                .pipe(jsFilter.restore())
                .pipe(cssFilter)
                .pipe(gulpif(compress, minCSS()))
                .pipe(rename(function (path: any) {
                    path.dirname = '/css';
                }))
                .pipe(cssFilter.restore())
                .pipe(fontFilter)
                .pipe(rename(function (path: any) {
                    path.dirname = '/fonts';
                }))
                .pipe(fontFilter.restore())
                .pipe(gulpif(compress && sourceMaps, maps.write()))
                .pipe(gulp.dest(destination));
        },
        typescript: function (destination: any, source: any, config: any, compress: any, sourceMaps: any) {
            var result = gulp.src(source)
                .pipe(gulpif(compress && sourceMaps, maps.init()))
                .pipe(ts(ts.createProject(config)));

            return merge([
                result.js
                    .pipe(istanbulIgnoreTypeScriptExtend())
                    .pipe(gulpif(compress, uglify()))
                    .pipe(gulpif(compress && sourceMaps, maps.write()))
                    .pipe(gulp.dest(destination)),
                result.dts
                    .pipe(gulp.dest(destination + '/ts-api'))
            ]);
        },
        scss: function (destination: any, source: any, compress: any, sourceMaps: any) {
            return gulp.src(source)
                .pipe(gulpif(compress && sourceMaps, maps.init()))
                .pipe(sass())
                .pipe(gulpif(compress, minCSS()))
                .pipe(gulpif(compress && sourceMaps, maps.write()))
                .pipe(gulp.dest(destination));
        },
        copy: function(destination: any, source: any) {
            return gulp.src(source)
                .pipe(gulp.dest(destination));
        },
        copyJS: function(destination: any, source: any, compress: any, sourceMaps: any) {
            return gulp.src(source)
                .pipe(gulpif(compress && sourceMaps, maps.init()))
                .pipe(gulpif(compress, uglify()))
                .pipe(gulpif(compress && sourceMaps, maps.write()))
                .pipe(gulp.dest(destination));
        },
        copyCSS: function(destination: any, source: any, compress: any, sourceMaps: any) {
            return gulp.src(source)
                .pipe(gulpif(compress && sourceMaps, maps.init()))
                .pipe(gulpif(compress, minCSS()))
                .pipe(gulpif(compress && sourceMaps, maps.write()))
                .pipe(gulp.dest(destination));
        }
    },
    test: {
        unit: function (config: any, watch: any) {
            return gulp.src([])
                .pipe(karma({
                    configFile: config,
                    action: watch ? 'watch' : 'run'
                }))
                .on('error', function (err: any) {
                    throw err;
                });
        },
        e2e: function (config: any) {
            return gulp.src([])
                .pipe(protractor({
                    configFile: config
                }))
                .on('error', function (err: any) {
                    throw err;
                });
        }
    },
    server: function(path: any, port: any) {
        return connect.server({
            root: [path, 'tmp'],
            port: port ,
            base: ['.tmp', ''],
            hostname: '*',
            livereload: true,
            middleware: function (connect: any, options: any) {
                return [
                    push({
                        root: '/index.html'
                    })
                ];
            }
        });
    }
};