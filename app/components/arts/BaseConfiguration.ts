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

    static $inject:Array<string> = ['$routeProvider', '$controllerProvider', '$provide', '$compileProvider'];

    private routeProvider: angular.route.IRouteProvider;
    private controllerProvider: angular.IControllerProvider;
    private serviceProvider: angular.auto.IProvideService;
    private compileProvider: angular.ICompileProvider;

    constructor($routeProvider:angular.route.IRouteProvider,
                $controllerProvider:angular.IControllerProvider,
                $provide:ng.auto.IProvideService,
                $compileProvider:ng.ICompileProvider) {
      this.routeProvider = $routeProvider;
      this.controllerProvider = $controllerProvider;
      this.serviceProvider = $provide;
      this.compileProvider = $compileProvider;
    }

    when(name: string, route: angular.route.IRoute): BaseConfiguration {
      this.routeProvider.when(name, route);
      return this;
    }

    otherwise(route: angular.route.IRoute): BaseConfiguration {
      this.routeProvider.otherwise(route);
      return this;
    }
  }

export = BaseConfiguration;