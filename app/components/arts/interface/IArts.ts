import IInject = require('./IInject');
import IScope = require('./IScope');
import IConfiguration = require('./IConfiguration');
import IDirective = require('./IDirective');
import IService = require('./IService');
import IController = require('./IController');
import IModule = require('./IModule');
import IApplication = require('./IApplication');

interface IArts {
  registerApplication(name:string, application:IApplication): IArts;
  getApplication(application:string): IApplication;

  registerModule(name:string, mod:IModule): IArts;
  getModule(mod:string): IModule;

  registerService(service:IService): IArts;
  getService(service:string): IService;

  registerController<T extends IScope<any>>(controller:IController<T>): IArts;
  getController<T extends IScope<any>>(controller:string): IController<T>;

  registerDirective(directive:IDirective): IArts;
  getDirective(directive:string): IDirective;

  normalizePath(path:string): string;
}

export = IArts;