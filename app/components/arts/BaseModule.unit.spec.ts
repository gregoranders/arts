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
  static $inject:string[] = ['test'];
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

  it('should run with configuration', ():void => {

    var native:any = <any> {
      run: ():void => {
      }
    };

    spyOn(angular, 'module').and.callFake(():void => {
      return native;
    }).and.returnValue(native);

    spyOn(native, 'run');

    var testSubject = new TestClass(TestClass.NAME, './test/');

    testSubject.run(null);

    expect(native.run).toHaveBeenCalledWith([null]);
  });

  it('should create directive', ():void => {
    var $compileProviderMock:any = {
          directive: (name:string, factory:any):void => {
            expect(name).toBe(TestDirective.NAME);
            expect(factory).toBeDefined();
            expect(factory.$inject).toBeDefined();
            expect(factory.$inject).toBe(TestDirective.$inject);

            factory();
          }
        },
        testSubject = new TestClass(TestClass.NAME, 'test');

    testSubject.initModule(null, null, null, $compileProviderMock);

    testSubject.directive(TestDirective);
  });

  it('should create directive with DI', ():void => {
    var DITestDirective:any = (params: string[]) => {
          expect(params).toContain('test1');
          expect(params).toContain('test2');
        },
        $compileProviderMock:any = {
          directive: (name:string, factory:any):void => {
            expect(name).toBe(DITestDirective.NAME);
            expect(factory).toBeDefined();
            expect(factory.$inject).toBeDefined();
            expect(factory.$inject).toBe(DITestDirective.$inject);

            factory('test1', 'test2');
          }
        },
        testSubject = new TestClass(TestClass.NAME, 'test');

    DITestDirective.NAME  = 'testDirective';
    DITestDirective.$inject = ['test1', 'test2'];

    testSubject.initModule(null, null, null, $compileProviderMock);

    testSubject.directive(DITestDirective);
  });

});