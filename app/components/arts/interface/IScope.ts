/// <reference path="../../../library.d.ts" />

import IController = require('./IController');

interface IScope<T extends IController<IScope<any>>> extends angular.IScope
{
  vm: IController<T>;
}

export = IScope;