/// <reference path="../../library.d.ts" />

import IDirective = require('./interface/IDirective');
'use strict';

class BaseDirective implements IDirective {
  /**
   * Class name.
   *
   * @type {string}
   */
  static NAME:string = 'com.github.gregoranders.arts.base.directive';

  static $inject:Array<string> = [];

  constructor() {
  }
}

export = BaseDirective;