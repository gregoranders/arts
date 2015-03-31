/// <reference path="../../../library.d.ts" />

import IDirective = require('./IDirective');
import IFactory = require('./IFactory');

/**
 * The IDirectiveFactory interface represents a directive factory.
 *
 * AngularJS expects directives to be functions therefore apply the factory pattern here to deliver a instance of a
 * directive via a factory to AngularJS.
 *
 * @param T Type of directive this factory produces.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 */
interface IDirectiveFactory<T extends IDirective> extends IFactory<T>, ng.IDirectiveFactory
{
}

export = IDirectiveFactory;
