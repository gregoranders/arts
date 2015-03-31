import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');

/**
 * The IFactory interface represents a basic factory.
 *
 * @param T Type this factory produces.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 */
interface IFactory<T> extends IInject, IIdentifier
{
  /**
   * Factory method.
   *
   * @param params Parameters used when creating a new instance of T
   */
  (...params:any[]): T;
}

export = IFactory;