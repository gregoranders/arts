/// <reference path="../../library.d.ts" />

///<amd-dependency path="angular-animate" />
///<amd-dependency path="angular-aria" />
///<amd-dependency path="angular-cookies" />
///<amd-dependency path="angular-loader" />
///<amd-dependency path="angular-material" />
///<amd-dependency path="angular-resource" />
///<amd-dependency path="angular-route" />
///<amd-dependency path="angular-sanitize" />
///<amd-dependency path="angular-touch" />
///<amd-dependency path="angular-translate" />

import IApplication = require('./interface/IApplication');
import IConfiguration = require('./interface/IConfiguration');
import BaseModule = require('./BaseModule');
'use strict';

class BaseApplication extends BaseModule implements IApplication {
    /**
     * Class name.
     *
     * @type {string}
     */
    static NAME:string = 'com.github.gregoranders.arts.base.application';

    static DEPENDENCIES: Array<string> = [
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMaterial',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'pascalprecht.translate'
    ];

    static dependencies(deps: Array<string>): Array<string> {
      return BaseApplication.DEPENDENCIES.concat(deps);
    }

    constructor(name: string, baseURL: string, deps?: Array<string>, configuration?: IConfiguration) {
      super(name, baseURL, BaseApplication.dependencies(deps), configuration);
    }

    bootstrap(): void {
      angular.bootstrap(document, [this.name()]);
    }
}

export = BaseApplication;
