/// <reference path="../../library.d.ts" />

import IService = require('./interface/IService');
'use strict';

class BaseService implements IService {
    /**
     * Class name.
     *
     * @type {string}
     */
    static NAME:string = 'com.github.gregoranders.arts.base.service';

    static $inject:Array<string> = [];

    constructor() {
    }
}

export = BaseService;
