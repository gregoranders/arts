/// <reference path="../../library.d.ts" />

export import IArts = require('./interface/IArts');
export import IApplication = require('./interface/IApplication');
export import IModule = require('./interface/IModule');
export import IConfiguration = require('./interface/IConfiguration');
export import IDirective = require('./interface/IDirective');
export import IDirectiveFactory = require('./interface/IDirectiveFactory');
export import IService = require('./interface/IService');
export import IController = require('./interface/IController');
export import IScope = require('./interface/IScope');
export import BaseApplication = require('./BaseApplication');
export import BaseConfiguration = require('./BaseConfiguration');
export import BaseController = require('./BaseController');
export import BaseDirective = require('./BaseDirective');
export import BaseModule = require('./BaseModule');
export import BaseService = require('./BaseService');

'use strict';

  interface IApplicationArray {
    [index: string]: IApplication;
  }

  interface IModuleArray {
    [index: string]: IModule;
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

  export var Arts: IArts = null;

  function initArts() {
    if (Arts === null) {
      Arts = new ArtsStatic();
    }
  }

  class ArtsStatic implements IArts {
    private applications: IApplicationArray;
    private modules: IModuleArray;
    private services: IServiceArray;
    private controllers: IControllerArray;
    private directives: IDirectiveArray;

    constructor() {
      this.applications = <any>[];
      this.modules = <any>[];
      this.services = <any>[];
      this.controllers = <any>[];
      this.directives = <any>[];
    }

    registerApplication(name: string, application: IApplication): IArts {
      this.applications[name] = application;
      return this;
    }

    getApplication(application: string): IApplication {
      return this.applications[application];
    }

    registerModule(name: string, mod: IModule): IArts {
      this.modules[name] = mod;
      return this;
    }

    getModule(mod: string): IModule {
      return this.modules[mod];
    }

    registerService(service: IService): IArts {
      this.services[service.NAME] = service;
      return this;
    }

    getService(service: string): IService {
      return this.services[service];
    }

    registerController<T>(controller: IController<T>): IArts {
      this.controllers[controller.NAME] = controller;
      return this;
    }

    getController<T>(controller: string): IController<T> {
      return this.controllers[controller];
    }

    registerDirective(directive: IDirective): IArts {
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

  initArts();