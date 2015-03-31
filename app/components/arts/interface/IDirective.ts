/// <reference path="../../../library.d.ts" />

import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');

/**
 * The IDirective interface represents a AngularJS directive.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 *
 * @see https://docs.angularjs.org/guide/directive
 */
interface IDirective extends IInject, IIdentifier, ng.IDirective
{
}

export = IDirective;
