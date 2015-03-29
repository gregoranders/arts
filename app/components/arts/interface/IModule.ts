/// <reference path="../../../library.d.ts" />

import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');
import IConfiguration = require('./IConfiguration');
import IDirective = require('./IDirective');
import IService = require('./IService');
import IController = require('./IController');
import IScope = require('./IScope');

interface IModule extends IInject, IIdentifier {
  name(): string;

  configure(configuration:IConfiguration): IModule;

  run(configuration:IConfiguration): IModule;

  directive(directive:IDirective): IModule;

  service(service:IService): IModule;

  controller<T extends IScope<any>>(controller:IController<T>): IModule;

  initModule($routeProvider:angular.route.IRouteProvider,
             $controllerProvider:angular.IControllerProvider,
             $provideService:ng.auto.IProvideService,
             $compileProvider:ng.ICompileProvider): IModule;

  getBaseURL(): string;
}

export = IModule;