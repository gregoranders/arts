/// <reference path="../../../library.d.ts" />

import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');

interface IService extends IInject, IIdentifier {
  name(): string;
}

export = IService;