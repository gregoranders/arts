import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');

interface IFactory<T> extends IInject, IIdentifier {
  (...params:any[]): T;
}

export = IFactory;