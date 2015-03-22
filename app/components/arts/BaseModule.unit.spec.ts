/// <reference path="../../test-library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import IConfiguration = require('./interface/IConfiguration');
import BaseService = require('./BaseService');
import BaseController = require('./BaseController');
import BaseDirective = require('./BaseDirective');
import BaseModule = require('./BaseModule');

class TestService extends BaseService {
  static NAME:string = 'testService';
}

class TestController extends BaseController<any> {
  static NAME:string = 'testController';
}

class TestDirective extends BaseDirective {
  static NAME:string = 'testDirective';
}

class TestClass extends BaseModule {
  static NAME:string = 'test123';

  constructor(name:string, baseURL:string, dependencies?:Array<string>, configuration?:IConfiguration) {
    super(name, baseURL, dependencies, configuration);
  }
}

describe('arts - BaseModule', () => {

  it('should provide name', () => {
    var testSubject = new TestClass(TestClass.NAME, './test/', []);
    expect(testSubject.name()).toBe(TestClass.NAME);
  });

  it('should provide name without deps', () => {
    var testSubject = new TestClass(TestClass.NAME, './test/');
    expect(testSubject.name()).toBe(TestClass.NAME);
  });

  it('should execute configuration', () => {
    var testSubject = new TestClass(TestClass.NAME, './test/');
    testSubject.configure(() => {

    });
    expect(testSubject.name()).toBe(TestClass.NAME);
  });

  it('should register service', () => {
    var testSubject = new TestClass(TestClass.NAME, './test/'),
      mockService = <any>{
        service: function () {

        }
      };
    testSubject.initModule(null, null, mockService, null);
    spyOn(mockService, 'service');
    testSubject.service(<any>TestService);
    expect(mockService.service).toHaveBeenCalled();
  });

  it('should register controller', () => {
    var testSubject = new TestClass(TestClass.NAME, './test/'),
      mockService = <any>{
        register: function () {

        }
      };
    testSubject.initModule(null, mockService, null, null);
    spyOn(mockService, 'register');
    testSubject.controller(<any>TestController);
    expect(mockService.register).toHaveBeenCalled();
  });

  it('should register directive', () => {
    var testSubject = new TestClass(TestClass.NAME, './test/'),
      mockService = <any>{
        directive: function () {

        }
      };
    testSubject.initModule(null, null, null, mockService);
    spyOn(mockService, 'directive');
    testSubject.directive(<any>TestDirective);
    expect(mockService.directive).toHaveBeenCalled();
  });
});