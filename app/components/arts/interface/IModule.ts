/// <reference path="../../../library.d.ts" />

import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');
import IConfiguration = require('./IConfiguration');
import IDirective = require('./IDirective');
import IService = require('./IService');
import IController = require('./IController');
import IScope = require('./IScope');

/**
 * The IModule interface represents a AngularJS module.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 *
 * @see https://docs.angularjs.org/guide/module
 */
interface IModule extends IInject, IIdentifier
{
  /**
   * Return the name of the module.
   */
  name(): string;

  /**
   * Use provided configuration when configuring module.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  configure(configuration:IConfiguration): IModule;

  /**
   * Use provided configuration when running module.
   *
   * @see https://docs.angularjs.org/guide/module
   */
  run(configuration:IConfiguration): IModule;

  /**
   * Register directive.
   */
  directive(directive:IDirective): IModule;

  /**
   * Register service.
   */
  service(service:IService): IModule;

  /**
   * Register controller.
   */
  controller<T extends IScope<any>>(controller:IController<T>): IModule;

  /**
   * Initialize module.
   *
   * @param $routeProvider https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
   * @param $controllerProvider https://docs.angularjs.org/api/auto/service/$provide
   * @param $provideService https://docs.angularjs.org/api/ng/provider/$controllerProvider
   * @param $compileProvider https://docs.angularjs.org/api/ng/provider/$compileProvider
   */
  initModule($routeProvider:angular.route.IRouteProvider,
             $controllerProvider:angular.IControllerProvider,
             $provideService:ng.auto.IProvideService,
             $compileProvider:ng.ICompileProvider): IModule;

  /**
   * Returns the base URL for this module.
   */
  getBaseURL(): string;
}

export = IModule;