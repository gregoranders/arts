/// <reference path="../../../../test-library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import testSubject = require('./ToolbarDirective');

describe('ToolbarDirective', ():void =>
{

  it('has static $inject property', ():void =>
  {
    expect(testSubject.$inject).toBeDefined();
  });

  it('has empty static $inject', ():void =>
  {
    expect(testSubject.$inject.length).toBe(0);
  });

  it('has static NAME', ():void =>
  {
    expect(testSubject.NAME).toBeDefined();
  });

  it('has proper NAME', ():void =>
  {
    expect(testSubject.NAME).toBe('artsToolbar');
  });

  it('can be created', ():void =>
  {
    expect(new testSubject()).toBeDefined();
  });

});