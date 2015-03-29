/// <reference path="types/gulp/gulp.d.ts" />

var config = require('./conf/gulpconf.js').config,
  func = require('./conf/gulpfunc.js').func,
  connect = require('gulp-connect'),
  gulp = require('gulp');

gulp.task('default', [
  'build'
]);

gulp.task('build', [
  'build:bower',
  'build:ts:main',
  'build:ts:test',
  'build:ts:e2e',
  'build:sass',
  'build:json',
  'build:html'
]);

// Bower related tasks
gulp.task('build:bower', function ()
{
  return func.build.bower(
    config.paths.build.development + '/vendor',
    config.filters.bower,
    false,
    false);
});

// TypeScript relates tasks
gulp.task('build:ts:main', function ()
{
  return func.build.typescript(
    config.paths.build.development,
    config.paths.source.typescript.main,
    config.typescript,
    false,
    false).pipe(connect.reload());
});

gulp.task('build:ts:test', function ()
{
  return func.build.typescript(
    config.paths.build.development,
    config.paths.source.typescript.test,
    config.typescript,
    false,
    false).pipe(connect.reload());
});

gulp.task('build:ts:e2e', function ()
{
  return func.build.typescript(
    config.paths.build.development,
    config.paths.source.typescript.e2e,
    config.typescript,
    false,
    false).pipe(connect.reload());
});

// TypeScript Doc
gulp.task('build:ts:doc', function ()
{
  return func.build.typedoc(
    config.paths.build.development,
    config.paths.source.typescript.main,
    config.typedoc
  );
});


// Sass related tasks
gulp.task('build:sass', function ()
{
  return func.build.scss(
    config.paths.build.development + '/css',
    config.paths.source.scss,
    false,
    false).pipe(connect.reload());
});

// HTML related tasks
gulp.task('build:html', function ()
{
  return func.build.copy(
    config.paths.build.development,
    config.paths.source.html,
    false,
    false).pipe(connect.reload());
});

// json related tasks
gulp.task('build:json', function ()
{
  return func.build.copyJSON(
    config.paths.build.development,
    config.paths.source.json,
    false,
    false).pipe(connect.reload());
});


// RequireJS related tasks
gulp.task('build:release', ['build'], function ()
{
  func.build.scss(
    config.paths.build.release + '/css',
    config.paths.source.scss,
    true,
    false).pipe(connect.reload());

  func.build.copy(
    config.paths.build.release,
    config.paths.source.html).pipe(connect.reload());

  func.build.copy(
    config.paths.build.release + '/vendor/fonts',
    config.paths.build.development + '/vendor/fonts/*').pipe(connect.reload());

  func.build.copyCSS(
    config.paths.build.release + '/vendor/css',
    config.paths.build.development + '/vendor/css/*',
    true,
    false).pipe(connect.reload());

  func.build.copyJS(
    config.paths.build.release,
    config.paths.build.development + '/config.js',
    true,
    false).pipe(connect.reload());

  func.build.copyJSON(
    config.paths.build.release,
    config.paths.build.development + '/*.json',
    false,
    false).pipe(connect.reload());

  func.build.copyJSON(
    config.paths.build.release,
    config.paths.build.development + '/**/*.json',
    false,
    false).pipe(connect.reload());

  func.build.copyJS(
    config.paths.build.release + '/vendor/js',
    config.paths.build.development + '/vendor/js/require.js',
    true,
    false).pipe(connect.reload());

  return func.build.requirejs(
    'boot.js',
    config.paths.build.release,
    config.paths.build.development,
    'boot',
    [
    ],
    true,
    false).pipe(connect.reload());
});

// Unit test related tasks
gulp.task('run:test:unit', function ()
{
  return func.test.unit(
    './conf/karma.conf.js',
    false
  );
});

gulp.task('run:test:unit:ci', function ()
{
  return func.test.unit(
      './conf/karma-ci.conf.js',
      false
  );
});

gulp.task('run:test:coverall', function ()
{
  return func.test.ci(
      config.paths.build.development + '/**/lcov.info'
  );
});

// E2E test related tasks
gulp.task('run:test:e2e', function ()
{
  return func.test.e2e('./conf/protractor.conf.js');
});

// Server related tasks
gulp.task('run:server', function ()
{
  return func.server(
    config.paths.build.development,
    9000
  );
});

gulp.task('run:server:release', function ()
{
  return func.server(
    config.paths.build.release,
    8000
  );
});

// Watch related tasks
gulp.task('watch:test:unit', function ()
{
  return func.test.unit(
    './conf/karma.conf.js',
    true
  );
});

gulp.task('watch', ['run:server'], function ()
{
  gulp.watch(config.paths.source.typescript.main, ['build:ts:main']);
  gulp.watch(config.paths.source.typescript.test, ['build:ts:test']);
  gulp.watch(config.paths.source.typescript.e2e, ['build:ts:e2e']);
  gulp.watch(config.paths.source.scss, ['build:sass']);
  gulp.watch(config.paths.source.html, ['build:html']);
  gulp.watch(config.paths.source.json, ['build:json']);
});
