/// <reference path="../../library.d.ts" />

import IService = require('./interface/IService');
'use strict';

class BaseService implements IService {
  /**
   * Class name.
   *
   * @type {string}
   */
  static NAME:string = 'com.github.gregoranders.arts.base.service';

  static $inject:Array<string> = [];

  protected _name: string = BaseService.NAME;

  constructor() {
  }

  name(): string {
    return this._name;
  }
}

export = BaseService;
