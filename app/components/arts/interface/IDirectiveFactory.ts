/// <reference path="../../../library.d.ts" />

import IDirective = require('./IDirective');
import IFactory = require('./IFactory');

interface IDirectiveFactory<T extends IDirective> extends IFactory<T>, ng.IDirectiveFactory {
}

export = IDirectiveFactory;
