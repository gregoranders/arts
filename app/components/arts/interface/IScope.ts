/// <reference path="../../../library.d.ts" />

import IController = require('./IController');

/**
 * The IScope interface represents the AngularJS $scope.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 *
 * @see https://docs.angularjs.org/guide/scope
 */
interface IScope<T extends IController<IScope<IController<any>>>> extends angular.IScope
{
  /**
   * The controller associated with this scope.
   *
   * @author Gregor Anders
   * @since 0.0.1
   * @version 0.0.1
   */
  vm: IController<T>;
}

export = IScope;