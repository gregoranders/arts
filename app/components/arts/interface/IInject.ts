/**
 * The IInject interface represents a controller in AngularJS.
 *
 * When minimising the JavaScript code the names of parameters of functions and methods will be replaced by something
 * random. Due to this the DI mechanism used in AngularJS will break. To circumvent this shortcoming pleas use this
 * interface to annotate the DI parameter names.
 *
 * Due to the fact the this needs to be static is is marked as optional and has the nature of a hint.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 *
 * @see https://docs.angularjs.org/guide/controller
 */
interface IInject
{
  /**
   * Array of strings used for DI.
   */
  $inject?: string[];
}

export = IInject;