
import IScope = require("../../../interface/IScope");
import IController = require("../../../interface/IController");
import BaseController = require("../../../BaseController");

interface Scope extends IScope<Controller> {
  showNavigation: boolean;
}

interface Controller extends IController<Scope> {
  toggleSideBar(event: Event): void;
}

class ToolbarController extends BaseController<Scope> implements Controller {

  static NAME: string = 'com.github.gregoranders.arts.base.controller.toolbar';

  static $inject: string[] = ['$scope', '$mdSidenav'];

  constructor(public $scope: Scope, private $mdSidenav: any) {
    super($scope);
  }

  toggleSideBar(event: Event): void {
    this.scope.showNavigation = !this.scope.showNavigation;
  }
}

export = ToolbarController;
