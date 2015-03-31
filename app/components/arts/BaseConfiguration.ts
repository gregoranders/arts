/// <reference path="../../library.d.ts" />

import IConfiguration = require('./interface/IConfiguration');
'use strict';

class BaseConfiguration implements IConfiguration {
  /**
   * Class name.
   *
   * @type {string}
   */
  static NAME:string = 'com.github.gregoranders.arts.base.configuration';

  static $inject:Array<string> = [
    '$routeProvider',
    '$controllerProvider',
    '$provide',
    '$compileProvider',
    '$translateProvider'
  ];

  constructor(protected $routeProvider:angular.route.IRouteProvider,
              protected $controllerProvider:angular.IControllerProvider,
              protected $provideService:ng.auto.IProvideService,
              protected $compileProvider:ng.ICompileProvider,
              protected $translateProvider:ng.translate.ITranslateProvider) {
  }

  when(name:string, route:angular.route.IRoute):BaseConfiguration {
    this.$routeProvider.when(name, route);
    return this;
  }

  otherwise(route:angular.route.IRoute):BaseConfiguration {
    this.$routeProvider.otherwise(route);
    return this;
  }
}

export = BaseConfiguration;