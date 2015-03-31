/// <reference path="../../library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import BaseApplication = require('./BaseApplication');

class TestClass extends BaseApplication
{

}


describe('BaseApplication', ():void =>
{

  it('bootstrap', ():void =>
  {

    var testSubject = new TestClass('test', 'test1', ['test2'], null);

    spyOn(angular, 'bootstrap').and.callFake((element:any, name:string[]):any =>
    {
      expect(element).toBe(document);
      expect(name).toContain('test');
    });

    testSubject.bootstrap();
  });

});