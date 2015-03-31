/// <reference path='./library.d.ts' />
'use strict';

describe('index', (): void =>
{

  beforeEach( (): void =>
  {
    browser.get('/#/');
  });

  it('should render index when user navigates to /', (): void =>
  {
    expect(browser.getTitle()).toEqual('arts - the AngularJS and RequireJS using TypeScript Seed');
  });
});
