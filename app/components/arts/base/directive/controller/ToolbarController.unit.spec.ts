/// <reference path="../../../../../test-library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import testSubject = require('./ToolbarController');

describe('ToolbarController', ():void => {

  it('should have static $inject property', ():void => {
    expect(testSubject.$inject).toBeDefined();
  });

  it('should have 4 $inject entries', ():void => {
    expect(testSubject.$inject.length).toBe(4);
  });

  it('should contain $scope in $inject', ():void => {
    expect(testSubject.$inject).toContain('$scope');
  });

  it('should contain $translate in $inject', ():void => {
    expect(testSubject.$inject).toContain('$translate');
  });

  it('should contain $window in $inject', ():void => {
    expect(testSubject.$inject).toContain('$window');
  });

  it('should contain localStorageService in $inject', ():void => {
    expect(testSubject.$inject).toContain('localStorageService');
  });

  it('should be able to be created', ():void => {
    var promise: any = {
          then: (func: any): void => {
            func();
          }
        },
        $scope:any = {
          $watch: (func: any, func1: any): void => {
            func();
            func1('test', 'test');
          }
        },
        $translate:any = {
          use: (): ng.IPromise<any> => {
            return promise;
          }
        },
        $window:any = {},
        localStorageService:any = {
          get: (): string => {
            return '';
          },
          set: (): void => {

          }
        };



    expect(new testSubject($scope, $translate, $window, localStorageService)).toBeDefined();
  });


  describe('should have locales', ():void => {
    it('4 defined', ():void => {
      expect(testSubject.LANGUAGES.length).toBe(4);
    });

    it('default', ():void => {
      expect(testSubject.LANGUAGE).toBe('en_US');
    });
  });


  describe('should have themes', ():void => {
    it('3 themes defined', ():void => {
      expect(testSubject.THEMES.length).toBe(3);
    });

    it('default theme', ():void => {
      expect(testSubject.THEME).toBe('green');
    });
  });

  describe('should have applications', ():void => {
    it('1 themes applications', ():void => {
      expect(testSubject.APPLICATIONS.length).toBe(1);
    });

    it('default application', ():void => {
      expect(testSubject.APPLICATION).toBe('arts');
    });
  });

});
