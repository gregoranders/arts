/// <reference path="../../library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import BaseApplicationConfiguration = require('./BaseApplicationConfiguration');

class TestClass extends BaseApplicationConfiguration
{

}

describe('BaseApplicationConfiguration', () =>
{

  it('has DI property', () =>
  {
    expect(TestClass.$inject).toBeDefined();
  });

  it('DI property has default amount of entries', () =>
  {
    expect(TestClass.$inject.length).toBe(8);
  });

  it('DI contains $routeProvider', () =>
  {
    expect(TestClass.$inject).toContain('$routeProvider');
  });

  it('DI contains $controllerProvider', () =>
  {
    expect(TestClass.$inject).toContain('$controllerProvider');
  });

  it('DI contains $provide', () =>
  {
    expect(TestClass.$inject).toContain('$provide');
  });

  it('DI contains $compileProvider', () =>
  {
    expect(TestClass.$inject).toContain('$compileProvider');
  });

  it('DI contains $translateProvider', () =>
  {
    expect(TestClass.$inject).toContain('$translateProvider');
  });

  it('DI contains $translatePartialLoaderProvider', () =>
  {
    expect(TestClass.$inject).toContain('$translatePartialLoaderProvider');
  });

  it('DI contains $mdThemingProvider', () =>
  {
    expect(TestClass.$inject).toContain('$mdThemingProvider');
  });

  it('DI contains localStorageServiceProvider', () =>
  {
    expect(TestClass.$inject).toContain('localStorageServiceProvider');
  });

  it('throws error on null $routeProvider', () =>
  {
    expect(() =>
    {
      new TestClass('test', 'en_US', 'test', null, null, null, null,
          null, null, null, null)
    }).toThrow(new Error('Invalid $routeProvider'));
  });

  it('sets default 404 handler theming local storage and locale', () =>
  {

    var $routeProviderMock = <any> {
      otherwise: () =>
      {
      }
    };

    var themeMock = <any> {
      primaryPalette: ():any =>
      {
        return this;
      },
      accentPalette: ():any =>
      {
        return this;
      }
    };

    var $mdThemingProviderMock = <any> {
      theme: ():any =>
      {
        return themeMock;
      },
      alwaysWatchTheme: () =>
      {
      },
      setDefaultTheme: ():any =>
      {

      }
    };

    var $translateProviderMock = <any>{
      preferredLanguage: ():void =>
      {

      }
    };

    var localStorageServiceProvider = <any> {
      setPrefix: () =>
      {
        return this;
      },
      setNotify: () =>
      {
        return this;
      },
      getItem: () =>
      {
        return '';
      }
    };

    spyOn($routeProviderMock, 'otherwise');
    spyOn($mdThemingProviderMock, 'theme').and.returnValue(themeMock);
    spyOn($mdThemingProviderMock, 'alwaysWatchTheme');
    spyOn(themeMock, 'primaryPalette').and.returnValue(themeMock);
    spyOn(themeMock, 'accentPalette');
    spyOn(localStorageServiceProvider, 'setPrefix').and.returnValue(localStorageServiceProvider);
    spyOn(localStorageServiceProvider, 'setNotify').and.returnValue(localStorageServiceProvider);
    spyOn($translateProviderMock, 'preferredLanguage');
    spyOn($mdThemingProviderMock, 'setDefaultTheme');

    spyOn(window.localStorage, 'getItem').and.callFake((key:string):string =>
    {
      return key;
    });

    expect(new TestClass('test', 'en_US', 'test', $routeProviderMock, null, null, null, $translateProviderMock,
        null, $mdThemingProviderMock, localStorageServiceProvider)).toBeDefined();

    expect($routeProviderMock.otherwise).toHaveBeenCalledWith({
      redirectTo: '/'
    });

    expect($mdThemingProviderMock.theme).toHaveBeenCalled();
    expect(themeMock.primaryPalette).toHaveBeenCalled();
    expect(themeMock.accentPalette).toHaveBeenCalled();
    expect($mdThemingProviderMock.alwaysWatchTheme).toHaveBeenCalledWith(true);

    expect(localStorageServiceProvider.setPrefix).toHaveBeenCalledWith('test');
    expect(localStorageServiceProvider.setNotify).toHaveBeenCalledWith(true, true);

    expect($translateProviderMock.preferredLanguage).toHaveBeenCalledWith('test.language');
    expect($mdThemingProviderMock.setDefaultTheme).toHaveBeenCalledWith('test.theme');
  });

  it('sets 404 handler theming local storage and locale', () =>
  {

    var $routeProviderMock = <any> {
      otherwise: () =>
      {
      }
    };

    var themeMock = <any> {
      primaryPalette: ():any =>
      {
        return this;
      },
      accentPalette: ():any =>
      {
        return this;
      }
    };

    var $mdThemingProviderMock = <any> {
      theme: ():any =>
      {
        return themeMock;
      },
      alwaysWatchTheme: () =>
      {
      },
      setDefaultTheme: ():any =>
      {

      }
    };

    var $translateProviderMock = <any>{
      preferredLanguage: ():void =>
      {

      }
    };

    var localStorageServiceProvider = <any> {
      setPrefix: () =>
      {
        return this;
      },
      setNotify: () =>
      {
        return this;
      },
      getItem: () =>
      {
        return '';
      }
    };

    spyOn($routeProviderMock, 'otherwise');
    spyOn($mdThemingProviderMock, 'theme').and.returnValue(themeMock);
    spyOn($mdThemingProviderMock, 'alwaysWatchTheme');
    spyOn(themeMock, 'primaryPalette').and.returnValue(themeMock);
    spyOn(themeMock, 'accentPalette');
    spyOn(localStorageServiceProvider, 'setPrefix').and.returnValue(localStorageServiceProvider);
    spyOn(localStorageServiceProvider, 'setNotify').and.returnValue(localStorageServiceProvider);
    spyOn($translateProviderMock, 'preferredLanguage');
    spyOn($mdThemingProviderMock, 'setDefaultTheme');
    spyOn(window.localStorage, 'getItem').and.callFake((key:string):string =>
    {
      return undefined;
    });

    expect(new TestClass('test', 'hase', 'nase', $routeProviderMock, null, null, null, $translateProviderMock,
        null, $mdThemingProviderMock, localStorageServiceProvider)).toBeDefined();

    expect($routeProviderMock.otherwise).toHaveBeenCalledWith({
      redirectTo: '/'
    });

    expect($mdThemingProviderMock.theme).toHaveBeenCalled();
    expect(themeMock.primaryPalette).toHaveBeenCalled();
    expect(themeMock.accentPalette).toHaveBeenCalled();
    expect($mdThemingProviderMock.alwaysWatchTheme).toHaveBeenCalledWith(true);

    expect(localStorageServiceProvider.setPrefix).toHaveBeenCalledWith('test');
    expect(localStorageServiceProvider.setNotify).toHaveBeenCalledWith(true, true);

    expect($translateProviderMock.preferredLanguage).toHaveBeenCalledWith('hase');
    expect($mdThemingProviderMock.setDefaultTheme).toHaveBeenCalledWith('nase');
  });

  it('sets default 404 handler theming local storage and locale', () =>
  {

    var $routeProviderMock = <any> {
      otherwise: () =>
      {
      }
    };

    var themeMock = <any> {
      primaryPalette: ():any =>
      {
        return this;
      },
      accentPalette: ():any =>
      {
        return this;
      }
    };

    var $mdThemingProviderMock = <any> {
      theme: ():any =>
      {
        return themeMock;
      },
      alwaysWatchTheme: () =>
      {
      },
      setDefaultTheme: ():any =>
      {

      }
    };

    var $translateProviderMock = <any>{
      preferredLanguage: ():void =>
      {

      },
      useLoader: ():void =>
      {

      }
    };

    var $translatePartialLoaderProviderMock = <any>{
      addPart: ():void =>
      {

      }
    };

    var localStorageServiceProvider = <any> {
      setPrefix: () =>
      {
        return this;
      },
      setNotify: () =>
      {
        return this;
      },
      getItem: () =>
      {
        return '';
      }
    };

    spyOn($routeProviderMock, 'otherwise');
    spyOn($mdThemingProviderMock, 'theme').and.returnValue(themeMock);
    spyOn($mdThemingProviderMock, 'alwaysWatchTheme');
    spyOn(themeMock, 'primaryPalette').and.returnValue(themeMock);
    spyOn(themeMock, 'accentPalette');
    spyOn(localStorageServiceProvider, 'setPrefix').and.returnValue(localStorageServiceProvider);
    spyOn(localStorageServiceProvider, 'setNotify').and.returnValue(localStorageServiceProvider);
    spyOn($translatePartialLoaderProviderMock, 'addPart');
    spyOn($translateProviderMock, 'preferredLanguage');
    spyOn($translateProviderMock, 'useLoader');
    spyOn($mdThemingProviderMock, 'setDefaultTheme');
    spyOn(window.localStorage, 'getItem').and.callFake((key:string):string =>
    {
      return undefined;
    });

    var testSubject = new TestClass('test', 'en_US', 'test', $routeProviderMock, null, null, null, $translateProviderMock,
        $translatePartialLoaderProviderMock, $mdThemingProviderMock, localStorageServiceProvider);

    testSubject.initTranslations('/hase/')

    expect($translateProviderMock.useLoader).toHaveBeenCalledWith('$translatePartialLoader', {
      urlTemplate: '/hase/components/{part}/l10n/{lang}.json'
    });
    expect($translatePartialLoaderProviderMock.addPart).toHaveBeenCalledWith('arts');
  });

});