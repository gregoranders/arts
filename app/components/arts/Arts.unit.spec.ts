/// <reference path="../../test-library.d.ts" />

/// <amd-dependency path="angular-mocks" />

'use strict';

import angular = require('angular');
import testSubject = require('./Arts');

describe('arts component', () => {

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

    it('has BaseRouteConfiguration', () => {
        expect(testSubject.BaseConfiguration).toBeDefined();
    });

    it('has Arts', () => {
        expect(testSubject.Arts).toBeDefined();
    });

});
