import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');

interface IController<T> extends IInject, IIdentifier
{
  scope: T;
}

export = IController;