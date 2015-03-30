/// <reference path='./library.d.ts' />
'use strict';

describe('index', function () {

  beforeEach(function () {
    browser.get('/#/');
  });

  it('should render index when user navigates to /', function () {
    expect(browser.getTitle()).toEqual('arts - the AngularJS and RequireJS using TypeScript Seed');
  });
});
