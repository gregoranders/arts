import BaseDirective = require("../../BaseDirective");
import Controller = require('./controller/toolbar');

class ToolbarDirective extends BaseDirective {
  static NAME:string = 'artsToolbar';

  restrict:string = 'E';
  template:string = '<md-toolbar><ng-transclude></ng-transclude></md-toolbar>';
  scope:{};
  controller:any = Controller;
  controllerAs:string = 'vm';
  transclude:boolean = true;
}

export = ToolbarDirective;