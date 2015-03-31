/// <reference path='./library.d.ts' />
'use strict';

describe('404', function () {

  beforeEach(function () {
    browser.get('/#/404');
  });

  it('should redirect to /', function () {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

});
