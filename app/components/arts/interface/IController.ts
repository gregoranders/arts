import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');

/**
 * The IController interface represents a controller in AngularJS.
 *
 * @param T Type of scope associated with this controller.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 *
 * @see https://docs.angularjs.org/guide/controller
 */
interface IController<T> extends IInject, IIdentifier
{
}

export = IController;