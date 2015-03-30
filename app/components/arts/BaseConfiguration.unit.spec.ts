/// <reference path="../../test-library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import BaseConfiguration = require('./BaseConfiguration');

class TestClass extends BaseConfiguration {

  constructor($routeProvider:angular.route.IRouteProvider,
              $controllerProvider:angular.IControllerProvider,
              $provide:ng.auto.IProvideService,
              $compileProvider:ng.ICompileProvider,
              $translateProvider:ng.translate.ITranslateProvider) {
    super($routeProvider, $controllerProvider, $provide, $compileProvider, $translateProvider);
  }
}

describe('arts - BaseModule', () => {

  it('test otherwise', () => {
    var mockService = <any>{
        otherwise: function () {

        }
      },
      testSubject = new TestClass(mockService, null, null, null, null);
    spyOn(mockService, 'otherwise');
    testSubject.otherwise({});
    expect(mockService.otherwise).toHaveBeenCalled();
  });

  it('test when', () => {
    var mockService = <any>{
        when: function () {

        }
      },
      testSubject = new TestClass(mockService, null, null, null, null);
    spyOn(mockService, 'when');
    testSubject.when('test', {});
    expect(mockService.when).toHaveBeenCalled();
  });

});