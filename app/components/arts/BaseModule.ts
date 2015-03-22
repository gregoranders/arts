/// <reference path="../../library.d.ts" />
/// <reference path="./interface/IModule.ts" />
/// <reference path="./interface/IDirectiveFactory.ts" />

import angular = require("angular");

import IModule = require('./interface/IModule');
import IConfiguration = require('./interface/IConfiguration');
import IDirective = require('./interface/IDirective');
import IDirectiveFactory = require('./interface/IDirectiveFactory');
import IService = require('./interface/IService');
import IController = require('./interface/IController');
import IScope = require('./interface/IScope');
'use strict';

class BaseModule implements IModule {
  /**
   * Class name.
   *
   * @type {string}
   */
  static NAME:string = 'com.github.gregoranders.arts.base.module';

  private native:ng.IModule;

  private baseURL:string;

  private routeProvider:angular.route.IRouteProvider;
  private controllerProvider:angular.IControllerProvider;
  private serviceProvider:angular.auto.IProvideService;
  private compileProvider:angular.ICompileProvider;


  constructor(name:string, baseURL:string, dependencies?:Array<string>, configuration?:IConfiguration) {
    this.native = angular.module(name, (dependencies ? dependencies : []), <Function>configuration);
    this.baseURL = baseURL;
  }

  name():string {
    return this.native.name;
  }

  configure(configuration:IConfiguration):IModule {
    this.native.config([configuration]);
    return this;
  }

  directive(directive:IDirective):IModule {
    // Directives are expected to be functions.... to be able to use a class we need to
    // use this factory approach here.
    var func:any = BaseModule.__getDirective(directive);
    var factory:IDirectiveFactory<IDirective> = (...params:Array<any>):IDirective => {
      return new func(params);
    };

    factory.$inject = directive.$inject;
    this.compileProvider.directive(directive.NAME, factory);
    return this;
  }

  service(service:IService):IModule {
    this.serviceProvider.service(service.NAME, <any>service);
    return this;
  }

  controller<T extends IScope<any>>(controller:IController<T>):IModule {
    this.controllerProvider.register(controller.NAME, <any>controller);
    return this;
  }

  initModule($routeProvider:angular.route.IRouteProvider,
             $controllerProvider:angular.IControllerProvider,
             $provideService:ng.auto.IProvideService,
             $compileProvider:ng.ICompileProvider):IModule {

    this.routeProvider = $routeProvider;
    this.controllerProvider = $controllerProvider;
    this.serviceProvider = $provideService;
    this.compileProvider = $compileProvider;

    return this;
  }

  getBaseURL():string {
    return this.baseURL;
  }

  static __getDirective(directive:IDirective):any {
    return directive;
  }
}

export = BaseModule;
