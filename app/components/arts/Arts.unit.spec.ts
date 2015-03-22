/// <reference path="../../test-library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import testSubject = require('./Arts');

class TestApplicationClass extends testSubject.BaseApplication {

}

class TestModuleClass extends testSubject.BaseModule {

}

class TestServiceNullNameClass extends testSubject.BaseService {
  static NAME:string = null;
}

class TestServiceZeroLengthNameClass extends testSubject.BaseService {
  static NAME:string = '';
}

class TestServiceClass extends testSubject.BaseService {
  static NAME:string = 'test';
}


class TestControllerNullNameClass extends testSubject.BaseController<any> {
  static NAME:string = null;
}

class TestControllerZeroLengthNameClass extends testSubject.BaseController<any> {
  static NAME:string = '';
}

class TestControllerClass extends testSubject.BaseController<any> {
  static NAME:string = 'test';
}


class TestDirectiveNullNameClass extends testSubject.BaseDirective {
  static NAME:string = null;
}

class TestDirectiveZeroLengthNameClass extends testSubject.BaseDirective {
  static NAME:string = '';
}

class TestDirectiveClass extends testSubject.BaseDirective {
  static NAME:string = 'test';
}

describe('arts', () => {

  it('has BaseModule', () => {
    expect(testSubject.BaseModule).toBeDefined();
  });

  it('has BaseController', () => {
    expect(testSubject.BaseController).toBeDefined();
  });

  it('has BaseDirective', () => {
    expect(testSubject.BaseDirective).toBeDefined();
  });

  it('has BaseService', () => {
    expect(testSubject.BaseService).toBeDefined();
  });

  it('has BaseApplication', () => {
    expect(testSubject.BaseApplication).toBeDefined();
  });

  it('has BaseConfiguration', () => {
    expect(testSubject.BaseConfiguration).toBeDefined();
  });

  it('has Arts', () => {
    expect(testSubject.Arts).toBeDefined();
  });

  describe('register application', () => {
    it('should throw exception on null application', () => {
      expect(() => {
        testSubject.Arts.registerApplication('test', null)
      }).toThrowError('Application cannot be null');
    });

    it('should throw exception on null application name', () => {
      expect(() => {
        testSubject.Arts.registerApplication(null, null)
      }).toThrowError('Application name cannot be null or of zero length');
    });

    it('should throw exception on invalid application', () => {
      expect(() => {
        testSubject.Arts.registerApplication('test', <testSubject.IApplication>{})
      }).toThrowError('Application invalid');
    });

    it('should work with valid application', () => {
      var test = new TestApplicationClass('test1', 'test2');
      expect(testSubject.Arts.registerApplication('test1', test)).toBeDefined();
      expect(testSubject.Arts.getApplication('test1')).toBe(test);
      expect(testSubject.Arts.getApplication('test1').getBaseURL()).toBe('test2');
      expect(testSubject.Arts.getApplication('test1').name()).toBe('test1');
    });
  });

  describe('register module', () => {
    it('should throw exception on null module', () => {
      expect(() => {
        testSubject.Arts.registerModule('test', null)
      }).toThrowError('Module cannot be null');
    });

    it('should throw exception on null module name', () => {
      expect(() => {
        testSubject.Arts.registerModule(null, null)
      }).toThrowError('Module name cannot be null or of zero length');
    });

    it('should throw exception on invalid module', () => {
      expect(() => {
        testSubject.Arts.registerModule('test', <testSubject.IModule>{})
      }).toThrowError('Module invalid');
    });

    it('should work with valid module', () => {
      var test = new TestModuleClass('test1', 'test2', []);
      expect(testSubject.Arts.registerModule('test1', test)).toBeDefined();
      expect(testSubject.Arts.getModule('test1')).toBe(test);
      expect(testSubject.Arts.getModule('test1').getBaseURL()).toBe('test2');
      expect(testSubject.Arts.getModule('test1').name()).toBe('test1');
    });
  });

  describe('register service', () => {
    it('should throw exception on null service', () => {
      expect(() => {
        testSubject.Arts.registerService(null)
      }).toThrowError('Service cannot be null');
    });

    it('should throw exception on null service name', () => {
      expect(() => {
        testSubject.Arts.registerService(<any>TestServiceNullNameClass)
      }).toThrowError('Service name cannot be null or of zero length');
    });

    it('should throw exception on zero length service name', () => {
      expect(() => {
        testSubject.Arts.registerService(<any>TestServiceZeroLengthNameClass)
      }).toThrowError('Service name cannot be null or of zero length');
    });

    it('should work with valid service', () => {
      expect(testSubject.Arts.getService('test')).not.toBeDefined();
      expect(testSubject.Arts.registerService(<any>TestServiceClass)).toBeDefined();
      expect(testSubject.Arts.getService('test')).toBeDefined();
    });
  });


  describe('register controller', () => {
    it('should throw exception on null controller', () => {
      expect(() => {
        testSubject.Arts.registerController(null)
      }).toThrowError('Controller cannot be null');
    });

    it('should throw exception on null controller name', () => {
      expect(() => {
        testSubject.Arts.registerController(<any>TestControllerNullNameClass)
      }).toThrowError('Controller name cannot be null or of zero length');
    });

    it('should throw exception on zero length controller name', () => {
      expect(() => {
        testSubject.Arts.registerController(<any>TestControllerZeroLengthNameClass)
      }).toThrowError('Controller name cannot be null or of zero length');
    });

    it('should work with valid controller', () => {
      expect(testSubject.Arts.getController('test')).not.toBeDefined();
      expect(testSubject.Arts.registerController(<any>TestControllerClass)).toBeDefined();
      expect(testSubject.Arts.getController('test')).toBeDefined();
    });
  });

  describe('register directive', () => {
    it('should throw exception on null directive', () => {
      expect(() => {
        testSubject.Arts.registerDirective(null)
      }).toThrowError('Directive cannot be null');
    });

    it('should throw exception on null directive name', () => {
      expect(() => {
        testSubject.Arts.registerDirective(<any>TestDirectiveNullNameClass)
      }).toThrowError('Directive name cannot be null or of zero length');
    });

    it('should throw exception on zero length directive name', () => {
      expect(() => {
        testSubject.Arts.registerDirective(<any>TestDirectiveZeroLengthNameClass)
      }).toThrowError('Directive name cannot be null or of zero length');
    });

    it('should work with valid directive', () => {
      expect(testSubject.Arts.getDirective('test')).not.toBeDefined();
      expect(testSubject.Arts.registerDirective(<any>TestDirectiveClass)).toBeDefined();
      expect(testSubject.Arts.getDirective('test')).toBeDefined();
    });
  });

  describe('normalize path directive', () => {
    it('should not change', () => {
      expect(testSubject.Arts.normalizePath('test')).toBe('test');
    });
    it('should strip leading ./', () => {
      expect(testSubject.Arts.normalizePath('./test')).toBe('test');
    });
    it('should strip / from end', () => {
      expect(testSubject.Arts.normalizePath('./test/')).toBe('test');
    });
  });
});
