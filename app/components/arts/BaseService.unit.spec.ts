/// <reference path="../../test-library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import BaseService = require('./BaseService');

class TestClass extends BaseService
{
  static NAME:string = 'test123';

  constructor()
  {
    super(TestClass.NAME);
  }
}

describe('arts - BaseService', () =>
{

  it('should provide name', () =>
  {
    var testSubject = new TestClass();
    expect(testSubject.name()).toBe('test123');
  });

});