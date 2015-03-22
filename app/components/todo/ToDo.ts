import Arts = require('../arts/Arts');

var baseURL: string = null;

class Configuration extends Arts.BaseConfiguration {
  constructor($routeProvider:angular.route.IRouteProvider,
              $controllerProvider:angular.IControllerProvider,
              $provideService:ng.auto.IProvideService,
              $compileProvider:ng.ICompileProvider) {

    super($routeProvider, $controllerProvider, $provideService, $compileProvider);

    var mod:Arts.IModule = Arts.Arts.getModule(Module.NAME);
    mod.initModule($routeProvider, $controllerProvider, $provideService, $compileProvider);

    var path = mod.getBaseURL();

    super.when('/todo', {
      name: 'todo',
      templateUrl: path + '/view/main.html'
    });

    super.when('/todo/about', {
      name: 'todo.about',
      templateUrl: path + '/view/about.html'
    });
  }
}

class Module extends Arts.BaseModule {
  static NAME:string = 'com.github.gregoranders.arts.todo';

  constructor(path:string) {
    super(Module.NAME, path, [], Configuration);
  }

  static initializeComponents(path: string):void {
    baseURL = path;
    Arts.Arts.registerModule(Module.NAME, new Module(path));
  }
}

export = Module;