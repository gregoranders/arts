/// <reference path="../../library.d.ts" />

///<amd-dependency path="angular-animate" />
///<amd-dependency path="angular-aria" />
///<amd-dependency path="angular-cookies" />
///<amd-dependency path="angular-loader" />
///<amd-dependency path="angular-material" />
///<amd-dependency path="angular-resource" />
///<amd-dependency path="angular-route" />
///<amd-dependency path="angular-sanitize" />
///<amd-dependency path="angular-touch" />
///<amd-dependency path="angular-translate" />

import angular = require("angular");
'use strict';

export var NAME: string = 'com.github.gregoranders.arts';

export var Arts: IArtsStatic = null;

function initArts() {
  if (Arts === null) {
    Arts = new ArtsStatic();
  }
}

export interface IArtsStatic {
  registerApplication(name: string, application: IApplication): IArtsStatic;
  getApplication(application: string): IApplication;

  registerComponent(name: string, component: IComponent): IArtsStatic;
  getComponent(component: string): IComponent;

  registerModule(name: string, mod: IModule): IArtsStatic;
  getModule(mod: string): IModule;

  registerService(service: IService): IArtsStatic;
  getService(service: string): IService;

  registerController<T>(controller: IController<T>): IArtsStatic;
  getController<T>(controller: string): IController<T>;

  registerDirective(directive: IDirective): IArtsStatic;
  getDirective(directive: string): IDirective;

  normalizePath(path: string): string;
}

interface IApplicationArray {
  [index: string]: IApplication;
}

interface IModuleArray {
  [index: string]: IModule;
}

interface IComponentArray {
  [index: string]: IComponent;
}

interface IServiceArray {
  [index: string]: IService;
}

interface IControllerArray {
  [index: string]: IController<any>;
}

interface IDirectiveArray {
  [index: string]: IDirective;
}

class ArtsStatic implements IArtsStatic {
  private applications: IApplicationArray;
  private components: IComponentArray;
  private modules: IModuleArray;
  private services: IServiceArray;
  private controllers: IControllerArray;
  private directives: IDirectiveArray;

  constructor() {
    this.applications = <any>[];
    this.components = <any>[];
    this.modules = <any>[];
    this.services = <any>[];
    this.controllers = <any>[];
    this.directives = <any>[];
  }

  registerApplication(name: string, application: IApplication): IArtsStatic {
    this.applications[name] = application;
    return this;
  }

  getApplication(application: string): IApplication {
    return this.applications[application];
  }

  registerComponent(name: string, component: IComponent): IArtsStatic {
    this.components[name] = component;
    return this;
  }

  getComponent(component: string): IComponent {
    return this.components[component];
  }

  registerModule(name: string, mod: IModule): IArtsStatic {
    this.modules[name] = mod;
    return this;
  }

  getModule(mod: string): IModule {
    return this.modules[mod];
  }

  registerService(service: IService): IArtsStatic {
    this.services[service.NAME] = service;
    return this;
  }

  getService(service: string): IService {
    return this.services[service];
  }

  registerController<T>(controller: IController<T>): IArtsStatic {
    this.controllers[controller.NAME] = controller;
    return this;
  }

  getController<T>(controller: string): IController<T> {
    return this.controllers[controller];
  }

  registerDirective(directive: IDirective): IArtsStatic {
    this.directives[directive.NAME] = directive;
    return this;
  }

  getDirective(directive: string): IDirective {
    return this.directives[directive];
  }

  normalizePath(path: string): string {
    if (path.substring(0, 2) === './') {
      path = path.substring(2);
    }

    if (path.charAt(path.length - 1) === '/') {
      path = path.substring(0, path.length - 1);
    }

    return path;
  }

}

export interface IInject {
  $inject?: Array<string>
}

export interface IIdentifier {
  NAME?: string;
}

export interface IScope<T extends IController<IScope<any>>> extends angular.IScope {
  vm: IController<T>;
}

export interface IController<T> extends IInject, IIdentifier {
}

export interface IFactory<T> {
  (...params: Array<any>): T;
}

export interface IDirective extends IInject, ng.IDirective, IIdentifier {

}

export interface IDirectiveFactory<T extends IDirective> extends IInject, IFactory<T>, ng.IDirectiveFactory {
}

export interface IService extends IInject, IIdentifier {
}

export interface IModule extends IInject, IIdentifier {
  name(): string;

  configure(configuration: IConfiguration): IModule;

  directive(directive: IDirective): IModule;

  service(serviceFactory: IService): IModule;

  controller<T extends IScope<any>>(controller: IController<T>): IModule;

  initModule($routeProvider: angular.route.IRouteProvider,
             $controllerProvider: angular.IControllerProvider,
             $provideService: ng.auto.IProvideService,
             $compileProvider: ng.ICompileProvider): IModule;

  getBaseURL(): string;
}

export interface IComponent extends IModule, IIdentifier {
}

export interface IConfiguration extends IInject {
}

export interface IApplication extends IModule, IIdentifier {
  bootstrap(): void;
}

export class BaseModule implements IModule {
  private native: ng.IModule;

  private baseURL: string;

  private routeProvider: angular.route.IRouteProvider;
  private controllerProvider: angular.IControllerProvider;
  private serviceProvider: angular.auto.IProvideService;
  private compileProvider: angular.ICompileProvider;

  constructor(name: string, baseURL: string, dependencies?: Array<string>, configuration?: IConfiguration) {
    this.native = angular.module(name, (dependencies ? dependencies : []), <Function>configuration);
    this.baseURL = baseURL;
    Arts.registerModule(name, this);
  }

  initModule($routeProvider: angular.route.IRouteProvider,
              $controllerProvider: angular.IControllerProvider,
              $provideService: ng.auto.IProvideService,
              $compileProvider: ng.ICompileProvider): IModule {

    this.routeProvider = $routeProvider;
    this.controllerProvider = $controllerProvider;
    this.serviceProvider = $provideService;
    this.compileProvider = $compileProvider;

    return this;
  }

  configure(configuration: IConfiguration): BaseModule {
    this.native.config([configuration]);
    return this;
  }

  directive(directive: IDirective): BaseModule {
    // Directives are expected to be functions.... to be able to use a class we need to
    // use this factory approach here.
    var func: any = BaseModule.__getDirective(directive);
    var factory: IDirectiveFactory<IDirective> = (...params: Array<any>): IDirective => {
      return new func(params);
    };

    factory.$inject = directive.$inject;
    this.compileProvider.directive(directive.NAME, factory);
    return this;
  }

  service(service: IService): BaseModule {
    this.serviceProvider.service(service.NAME, <any>service);
    return this;
  }

  controller<T extends IScope<any>>(controller: IController<T>): BaseModule {
    this.controllerProvider.register(controller.NAME, <any>controller);
    return this;
  }

  name(): string {
    return this.native.name;
  }

  getBaseURL(): string {
    return this.baseURL;
  }

  static __getDirective(directive: IDirective): any {
    return directive;
  }
}

export class BaseComponent extends BaseModule implements IComponent {
  constructor(name: string, baseURL: string, dependencies?: Array<string>, configuration?: IConfiguration) {
    super(name, baseURL, dependencies, configuration);
    Arts.registerComponent(name, this);
  }
}

export class BaseController<T extends IScope<any>> implements IController<T>
{
  static $inject: Array<string> = ['$scope'];

  constructor(protected $scope:T) {
    this.$scope = $scope;
    this.$scope.vm = this;
    Arts.registerController(this);
  }
}

export class BaseDirective implements IDirective {
  static $inject: Array<string> = [];
  constructor() {
    Arts.registerDirective(this);
  }
}

export class BaseService implements IService {
  constructor () {
    Arts.registerService(this);
  }
}

export class BaseApplication extends BaseComponent implements IApplication {
  static DEPENDENCIES: Array<string> = [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ];

  static dependencies(deps: Array<string>): Array<string> {
    return BaseApplication.DEPENDENCIES.concat(deps);
  }

  constructor(name: string, baseURL: string, deps?: Array<string>, configuration?: IConfiguration) {
    super(name, baseURL, BaseApplication.dependencies(deps), configuration);
    Arts.registerApplication(name, this);
  }

  bootstrap(): void {
    angular.bootstrap(document, [this.name()]);
  }
}

export class BaseRouteConfiguration implements IConfiguration {
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

  when(name: string, route: angular.route.IRoute): BaseRouteConfiguration {
    this.routeProvider.when(name, route);
    return this;
  }

  otherwise(route: angular.route.IRoute): BaseRouteConfiguration {
    this.routeProvider.otherwise(route);
    return this;
  }
}

initArts();