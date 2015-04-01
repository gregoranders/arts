import Arts = require("../arts/Arts");

import IndexController = require("./controller/IndexController");
import DocsService = require("./service/DocsService");
import Component = require("./Component");

class ModuleConfiguration extends Arts.BaseConfiguration
{

  static NAME:string = Component.NAME + '.configuration';

  static $inject:Array<string> = [
    '$routeProvider',
    '$controllerProvider',
    '$provide',
    '$compileProvider',
    '$translateProvider',
    '$translatePartialLoaderProvider'
  ];

  constructor(protected $routeProvider:angular.route.IRouteProvider,
              protected $controllerProvider:angular.IControllerProvider,
              protected $provideService:ng.auto.IProvideService,
              protected $compileProvider:ng.ICompileProvider,
              protected $translateProvider:ng.translate.ITranslateProvider,
              protected $translatePartialLoaderProvider:ng.translate.ITranslatePartialLoaderService)
  {

    super($routeProvider, $controllerProvider, $provideService, $compileProvider, $translateProvider);

    var component:Arts.IApplication = <Arts.IApplication>Arts.Arts.getModule(DocsComponent.NAME)
            .initModule($routeProvider, $controllerProvider, $provideService, $compileProvider),
        basePath = component.getBaseURL();

    // routing
    super.when('/docs', {
      templateUrl: basePath + 'view/main.html',
      controller: IndexController,
      reloadOnSearch: false
    });

    $translatePartialLoaderProvider.addPart('docs');

    component.service(<any>DocsService);
  }
}

class DocsComponent extends Arts.BaseModule
{

  static NAME:string = Component.NAME;

  static DEPENDENCIES:Array<string> = ['pascalprecht.translate'];

  constructor(baseURL:string)
  {
    super(DocsComponent.NAME, baseURL, DocsComponent.DEPENDENCIES, ModuleConfiguration);
    Arts.Arts.registerModule(DocsComponent.NAME, this);
  }

  static initializeComponents(basePath:string):DocsComponent
  {
    return new DocsComponent(basePath);
  }
}

export = DocsComponent;
