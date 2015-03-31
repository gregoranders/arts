/// <reference path="../../../library.d.ts" />

import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');

/**
 * The IService interface represents a service.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 *
 * @see https://docs.angularjs.org/guide/services
 */
interface IService extends IInject, IIdentifier
{
}

export = IService;