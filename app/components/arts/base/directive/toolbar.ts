import BaseDirective = require("../../BaseDirective");
import Controller = require('./controller/toolbar');

class ToolbarDirective extends BaseDirective {
  static NAME: string = 'artsToolbar';

  restrict: string = 'E';
  templateUrl: string = 'components/arts/base/directive/view/toolbar.html';
  scope: {};
  controller: any = Controller;
  controllerAs: string = 'vm';
  transclude: boolean = true;
}

export = ToolbarDirective;