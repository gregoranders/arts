/// <reference path='./library.d.ts' />
'use strict';

describe('index', function () {

    beforeEach(function () {
        browser.get('/');
    });

    it('should render index when user navigates to /', function () {
        expect(browser.getTitle()).toEqual('arts - the AngularJS and RequireJS using TypeScript Seed');
    });

    it('should contain one h1', function () {
        expect($$('h1').count()).toBe(1);
    });

    it('should contain h1 tag with text', function () {
        expect(element(by.tagName('h1')).getText()).toBe('angular-require-typescript-seed - the AngularJS and RequireJS using TypeScript Seed');
    });

});
