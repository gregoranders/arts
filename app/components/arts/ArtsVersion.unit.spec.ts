/// <reference path="../../test-library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import testSubject = require('./ArtsVersion');


describe('arts', () =>
{

  it('has correct url', () =>
  {
    expect(testSubject.URL).toBeDefined();

    expect(testSubject.URL).toBe('https://github.com/gregoranders/arts');
  });

  it('has correct version', () =>
  {
    expect(testSubject.VERSION).toBeDefined();

    expect(testSubject.VERSION).toBe('0.0.9');
  });

});
