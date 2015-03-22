/// <reference path="./library.d.ts" />

import Arts = require("./components/arts/Arts");

import ToDo = require("./components/todo/ToDo");

class RouteConfiguration extends Arts.BaseConfiguration {
  static NAME:string = 'com.github.gregoranders.arts.configuration';

  static $inject:Array<string> = [
    '$routeProvider',
    '$controllerProvider',
    '$provide',
    '$compileProvider',
    '$locationProvider',
    '$mdThemingProvider'
  ];

  constructor($routeProvider:angular.route.IRouteProvider,
              $controllerProvider:angular.IControllerProvider,
              $provideService:ng.auto.IProvideService,
              $compileProvider:ng.ICompileProvider,
              $locationProvider:angular.ILocationProvider,
              $mdThemingProvider: any) {

    super($routeProvider, $controllerProvider, $provideService, $compileProvider);

    $locationProvider.html5Mode(true);

    var component:Arts.IApplication = Arts.Arts.getApplication(Application.NAME);
    component.initModule($routeProvider, $controllerProvider, $provideService, $compileProvider);

    var path = component.getBaseURL();

    super.when('/', {
      name: 'index',
      templateUrl: path + '/view/main.html'
    });

    super.when('/about', {
      name: 'about',
      templateUrl: path + '/view/about.html'
    });

    super.otherwise({
      redirectTo: '/'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('blue');

    component.directive(Arts.ToolbarDirective);
  }
}

class Application extends Arts.BaseApplication {

  static NAME:string = 'com.github.gregoranders.arts';

  static DEPENDENCIES:Array<string> = [ToDo.NAME];

  constructor(baseURL:string) {
    super(Application.NAME, baseURL, Application.DEPENDENCIES, RouteConfiguration);
    Arts.Arts.registerApplication(Application.NAME, this);
  }

  static initializeComponents():void {
    ToDo.initializeComponents('components/todo');
  }
}

export = Application;