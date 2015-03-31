/// <reference path='./library.d.ts' />
'use strict';

describe('404', (): void =>
{

  beforeEach((): void =>
  {
    browser.get('/#/404');
  });

  it('should redirect to /', (): void =>
  {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

});
