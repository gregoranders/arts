import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');
import IModule = require('./IModule');

/**
 * The IApplication interface represents an AngularJS application.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 *
 * @see https://docs.angularjs.org/guide/bootstrap
 */
interface IApplication extends IInject, IIdentifier, IModule
{
  /**
   * Bootstraps the application.
   */
  bootstrap(): void;
}

export = IApplication;