/**
 * The IInject interface represents the $inject mechanism used by AngularJS.
 */

/**
 * This interface represents the $inject mechanism  used by AngularJS.
 *
 * When minimising the JavaScript code the names of parameters of functions and methods will be replaced by something
 * random. Due to this the DI mechanism used in AngularJS will break. To circumvent this shortcoming pleas use this
 * interface to annotate the DI parameter names.
 *
 * @see https://docs.angularjs.org/guide/di
 */
interface IInject
{

  /**
   * Array of strings used for DI.
   */
  $inject?: string[];
}

export = IInject;