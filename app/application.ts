/// <reference path="./library.d.ts" />

import Arts = require("./components/arts/Arts");

declare var window:Window;

interface IScope extends Arts.IScope<IController> {

}

interface IController extends Arts.IController<IScope> {

}

class IndexController extends Arts.BaseController<IScope> implements IController {

  static $inject:string[] = ['$scope', '$mdSidenav'];

  constructor(public $scope:IScope, private $mdSidenav:ng.material.MDSidenavService) {
    super($scope);
  }

  toggleSideBar(id:string):void {
    console.log(id);
    this.$mdSidenav('left').toggle();
  }
}

class RouteConfiguration extends Arts.BaseConfiguration {
  static NAME:string = 'com.github.gregoranders.arts.configuration';

  static $inject:Array<string> = [
    '$routeProvider',
    '$controllerProvider',
    '$provide',
    '$compileProvider',
    '$translateProvider',
    '$translatePartialLoaderProvider',
    '$mdThemingProvider',
    'localStorageServiceProvider'
  ];

  constructor($routeProvider:angular.route.IRouteProvider,
              $controllerProvider:angular.IControllerProvider,
              $provideService:ng.auto.IProvideService,
              $compileProvider:ng.ICompileProvider,
              $translateProvider:ng.translate.ITranslateProvider,
              $translatePartialLoaderProvider:ng.translate.ITranslatePartialLoaderService,
              $mdThemingProvider:ng.material.MDThemingProvider,
              localStorageServiceProvider:any) {

    super($routeProvider, $controllerProvider, $provideService, $compileProvider);

    var component:Arts.IApplication = <Arts.IApplication>Arts.Arts.getApplication(Application.NAME)
        .initModule($routeProvider, $controllerProvider, $provideService, $compileProvider),
      language = localStorage.getItem(Application.NAME + '.language'),
      theme = localStorage.getItem(Application.NAME + '.theme'),
      path = component.getBaseURL();

    super.when('/', {
      name: 'index',
      templateUrl: path + 'view/main.html',
      controller: IndexController
    });

    super.otherwise({
      redirectTo: '/'
    });

    $mdThemingProvider.theme('blue')
      .primaryPalette('blue')
      .accentPalette('light-blue');

    $mdThemingProvider.theme('indigo')
      .primaryPalette('indigo')
      .accentPalette('blue');

    $mdThemingProvider.theme('green')
      .primaryPalette('green')
      .accentPalette('light-green');

    $mdThemingProvider.alwaysWatchTheme(true);

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: path + '/components/{part}/l10n/{lang}.json'
    });

    localStorageServiceProvider
      .setPrefix(Application.NAME)
      .setNotify(true, true);

    if (!language) {
      language = 'en_US';
    }

    if (!theme) {
      theme = 'green';
    }

    $translateProvider.preferredLanguage(language);
    $mdThemingProvider.setDefaultTheme(theme);

    $translatePartialLoaderProvider.addPart('arts');

    component.directive(Arts.ToolbarDirective);
  }
}

class Application extends Arts.BaseApplication {

  static NAME:string = 'com.github.gregoranders.arts';

  static DEPENDENCIES:Array<string> = [];

  constructor(baseURL:string) {
    super(Application.NAME, baseURL, Application.DEPENDENCIES, RouteConfiguration);
    Arts.Arts.registerApplication(Application.NAME, this);
  }

  static initializeComponents():void {
  }
}

export = Application;