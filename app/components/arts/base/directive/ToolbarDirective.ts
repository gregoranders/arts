import BaseDirective = require("../../BaseDirective");
import ToolbarController = require('./controller/ToolbarController');

class ToolbarDirective extends BaseDirective {
  static NAME:string = 'artsToolbar';

  restrict:string = 'E';
  template:string = '<md-toolbar><ng-transclude></ng-transclude></md-toolbar>';
  scope:{

  };
  controller:any = ToolbarController;
  controllerAs:string = 'vm';
  transclude:boolean = true;
}

export = ToolbarDirective;