/// <reference path="../../library.d.ts" />

import angular = require('angular');

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
export import BaseApplicationConfiguration = require('./BaseApplicationConfiguration');
export import BaseController = require('./BaseController');
export import BaseDirective = require('./BaseDirective');
export import BaseModule = require('./BaseModule');
export import BaseService = require('./BaseService');

export import ArtsVersion = require('./ArtsVersion');

export var VERSION:string = ArtsVersion.VERSION;
export var URL:string = ArtsVersion.URL;

export import ToolbarDirective = require('./base/directive/ToolbarDirective');
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

export var Arts:IArts = null;

function initArts() {
  if (Arts === null) {
    Arts = new ArtsStatic();
  }
}

class ArtsStatic implements IArts {
  private applications:IApplicationArray;
  private modules:IModuleArray;
  private services:IServiceArray;
  private controllers:IControllerArray;
  private directives:IDirectiveArray;

  constructor() {
    this.applications = <any>[];
    this.modules = <any>[];
    this.services = <any>[];
    this.controllers = <any>[];
    this.directives = <any>[];
  }

  registerApplication(name:string, application:IApplication):IArts {
    if (name === null || name.length < 1) {
      throw new Error('Application name cannot be null or of zero length');
    }
    if (application === null) {
      throw new Error('Application cannot be null');
    }
    if (!(application instanceof BaseApplication)) {
      throw new Error('Application invalid');
    }
    this.applications[name] = application;
    return this;
  }

  getApplication(application:string):IApplication {
    return this.applications[application];
  }

  registerModule(name:string, mod:IModule):IArts {
    if (name === null || name.length < 1) {
      throw new Error('Module name cannot be null or of zero length');
    }
    if (mod === null) {
      throw new Error('Module cannot be null');
    }
    if (!(mod instanceof BaseModule)) {
      throw new Error('Module invalid');
    }
    this.modules[name] = mod;
    return this;
  }

  getModule(mod:string):IModule {
    return this.modules[mod];
  }

  registerService(service:IService):IArts {
    if (service === null) {
      throw new Error('Service cannot be null');
    }
    if (service.NAME === null || service.NAME.length < 1) {
      throw new Error('Service name cannot be null or of zero length');
    }
    this.services[service.NAME] = service;
    return this;
  }

  getService(service:string):IService {
    return this.services[service];
  }

  registerController<T>(controller:IController<T>):IArts {
    if (controller === null) {
      throw new Error('Controller cannot be null');
    }
    if (controller.NAME === null || controller.NAME.length < 1) {
      throw new Error('Controller name cannot be null or of zero length');
    }
    this.controllers[controller.NAME] = controller;
    return this;
  }

  getController<T>(controller:string):IController<T> {
    return this.controllers[controller];
  }

  registerDirective(directive:IDirective):IArts {
    if (directive === null) {
      throw new Error('Directive cannot be null');
    }
    if (directive.NAME === null || directive.NAME.length < 1) {
      throw new Error('Directive name cannot be null or of zero length');
    }
    this.directives[directive.NAME] = directive;
    return this;
  }

  getDirective(directive:string):IDirective {
    return this.directives[directive];
  }

  normalizePath(path:string):string {
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