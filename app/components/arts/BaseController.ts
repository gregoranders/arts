/// <reference path="../../library.d.ts" />

import IScope = require('./interface/IScope');
import IController = require('./interface/IController');
'use strict';

/**
 * The BaseController class is the basic class to extend new controllers from.
 *
 * It offers access to the scope via it's protected member scope and exposes a static property named $inject used by
 * Angular.
 *
 * @param T Interface extending IScope representing the scope of this controller.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 *
 * @see https://docs.angularjs.org/guide/controller
 * @see https://docs.angularjs.org/guide/di
 */
class BaseController<T extends IScope<IController<any>>> implements IController<T>
{
  /**
   * The name of the controller as a static property used when registering this controller to the $injector used in
   * AngularJS.
   *
   * @since 0.0.1
   * @version 0.0.1
   */
  static NAME:string = 'com.github.gregoranders.arts.base.controller';

  /**
   * Array of parameters to be injected when calling the controller constructor.
   *
   * @since 0.0.1
   * @version 0.0.1
   *
   * @see https://docs.angularjs.org/guide/di
   */
  static $inject:Array<string> = [
    '$scope'
  ];

  /**
   * The scope associated with this controller.
   */
  protected scope: T = null;

  /**
   * The constructor.
   *
   * The controller instance is available in the scope via the vm member.
   *
   * @param scope The scope to be associated with the controller instance.
   *
   * @since 0.0.1
   * @version 0.0.1
   */
  constructor(scope:T)
  {
    this.scope = scope;

    this.scope.vm = this;
  }
}

export = BaseController;