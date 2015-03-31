/// <reference path="../../../library.d.ts" />

import IInject = require('./IInject');
import IIdentifier = require('./IIdentifier');

interface IDirective extends IInject, IIdentifier, ng.IDirective
{
}

export = IDirective;
