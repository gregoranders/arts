/// <reference path="../../library.d.ts" />

///<amd-dependency path="angular-animate" />
///<amd-dependency path="angular-aria" />
///<amd-dependency path="angular-cookies" />
///<amd-dependency path="angular-file-upload" />
///<amd-dependency path="angular-highlightjs" />
///<amd-dependency path="angular-loader" />
///<amd-dependency path="angular-local-storage" />
///<amd-dependency path="angular-material" />
///<amd-dependency path="angular-messages" />
///<amd-dependency path="angular-moment" />
///<amd-dependency path="angular-nvd3-directives" />
///<amd-dependency path="angular-resource" />
///<amd-dependency path="angular-route" />
///<amd-dependency path="angular-sanitize" />
///<amd-dependency path="angular-touch" />
///<amd-dependency path="angular-translate" />
///<amd-dependency path="angular-translate-handler-log" />
///<amd-dependency path="angular-translate-interpolation-messageformat" />
///<amd-dependency path="angular-translate-loader-partial" />
///<amd-dependency path="angular-translate-loader-static-files" />
///<amd-dependency path="angular-translate-loader-url" />
///<amd-dependency path="angular-translate-storage-cookie" />
///<amd-dependency path="angular-translate-storage-local" />
///<amd-dependency path="angular-ui-grid" />

import IApplication = require('./interface/IApplication');
import IConfiguration = require('./interface/IConfiguration');
import BaseModule = require('./BaseModule');
'use strict';

class BaseApplication extends BaseModule implements IApplication
{
  /**
   * Class name.
   *
   * @type {string}
   */
  static NAME:string = 'com.github.gregoranders.arts.base.application';

  static DEPENDENCIES:Array<string> = [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMaterial',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hljs',
    'pascalprecht.translate',
    'angularFileUpload',
    'angularMoment',
    'nvd3ChartDirectives',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.selection',
    'ui.grid.expandable',
    'ui.grid.pinning',
    'ui.grid.resizeColumns',
    'ui.grid.moveColumns',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.exporter',
    'ui.grid.importer',
    'ui.grid.saveState',
    'ui.grid.infiniteScroll',
    'ui.grid.autoResize',
    'LocalStorageModule'
  ];

  static dependencies(deps:Array<string>):Array<string>
  {
    return BaseApplication.DEPENDENCIES.concat(deps);
  }

  constructor(name:string, baseURL:string, deps?:Array<string>, configuration?:IConfiguration)
  {
    super(name, baseURL, BaseApplication.dependencies(deps), configuration);
  }

  bootstrap():void
  {
    angular.bootstrap(document, [this.name()]);
  }
}

export = BaseApplication;
