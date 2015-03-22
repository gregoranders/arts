/// <reference path="../../test-library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import IScope = require('./interface/IScope');
import BaseController = require('./BaseController');

class TestClass extends BaseController<IScope<any>> {
  static NAME: string = 'test123';

  constructor(public scope: IScope<any>) {
    super(scope);
  }
}

describe('arts - BaseService', () => {

  it('should provide name', () => {
    var testSubject = new TestClass(<IScope<any>>{});
    expect(testSubject).toBeDefined();
  });

});