/// <reference path="../../library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import BaseDirective = require('./BaseDirective');

class TestClass extends BaseDirective {

}

describe('BaseDirective', (): void => {

  it('has static $inject property', (): void => {
    expect(TestClass.$inject).toBeDefined();
  });

  it('has empty $inject property', (): void => {
    expect(TestClass.$inject.length).toBe(0);
  });

  it('has proper name', (): void => {
    expect(TestClass.NAME).toBe('com.github.gregoranders.arts.base.directive');
  });

  it('can be created', (): void => {
    expect(new TestClass()).toBeDefined();
  });

});
