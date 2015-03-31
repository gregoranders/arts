/// <reference path="../../../library.d.ts" />

import IController = require('./IController');

/**
 * The IScope interface represents the AngularJS $scope.
 *
 * Do not define view properties on the scope to avoid strange happenings.
 * Use the vm member available in the scope and create the view properties in the controller.
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