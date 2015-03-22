import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');
import IModule = require('./IModule');

interface IApplication extends IInject, IIdentifier, IModule {
  bootstrap(): void;
}

export = IApplication;