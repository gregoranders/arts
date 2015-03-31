/// <reference path="../../library.d.ts" />

import IScope = require('./interface/IScope');
import IController = require('./interface/IController');
'use strict';

class BaseController<T extends IScope<any>> implements IController<T>
{
  /**
   * Class name.
   *
   * @type {string}
   */
  static NAME:string = 'com.github.gregoranders.arts.base.controller';

  static $inject:Array<string> = ['$scope'];

  constructor(public scope:T)
  {
    this.scope.vm = this;
  }
}

export = BaseController;