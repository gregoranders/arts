/// <reference path="./library.d.ts" />

import arts = require("./components/arts/component");

export module application
{
  export function initializeComponents(): void  {
  }

  export class RouteConfiguration extends arts.BaseRouteConfiguration
  {
    static $inject: Array<string> = ['$routeProvider', '$controllerProvider', '$provide', '$compileProvider', '$locationProvider'];

    constructor($routeProvider: angular.route.IRouteProvider,
                $controllerProvider: angular.IControllerProvider,
                $provideService:ng.auto.IProvideService,
                $compileProvider:ng.ICompileProvider,
                $locationProvider: angular.ILocationProvider) {

      super($routeProvider, $controllerProvider, $provideService, $compileProvider);

      $locationProvider.html5Mode(true);

      var component: arts.IApplication = arts.Arts.getApplication(Application.NAME);
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
    }
  }

  export class Application extends arts.BaseApplication
  {
    static NAME: string = 'com.github.gregoranders.arts';
    static DEPENDENCIES: Array<string> = [];

    constructor(baseURL: string)
    {
      super(Application.NAME, baseURL, Application.DEPENDENCIES, RouteConfiguration);
    }
  }

}
