import Arts = require('../../arts/Arts');
import Component = require('../Component');
import IDocsService = require('../service/IDocsService');
import Model = require('../model/IDocsModel');

interface IScope extends Arts.IScope<IController> {

}

interface IController extends Arts.IController<IScope> {

  selectedTabIndex: number;
  docs: Model.IDocs;
  documentation: any;

  toggleSideBar(id:string): void;

  switchToTab(group:Model.IDocsGroup): void;
}

class IndexController extends Arts.BaseController<IScope> implements IController {

  static $inject:string[] = ['$scope', '$mdSidenav', '$mdToast', '$mdBottomSheet', Component.SERVICE];

  selectedTabIndex:number = 0;

  bottomSheetPromise:ng.IPromise<void>;

  docs:Model.IDocs = null;

  documentation: any = {
    classes: null
  };

  private baseURL:string;

  constructor(public $scope:IScope, private $mdSidenav:ng.material.MDSidenavService,
              private $mdToast:ng.material.MDToastService,
              private $mdBottomSheet:ng.material.MDBottomSheetService,
              private IDocsService:IDocsService) {
    super($scope);

    var component:Arts.IApplication = <Arts.IApplication>Arts.Arts.getModule(Component.NAME);

    this.baseURL = component.getBaseURL();

    IDocsService.getDocs()
        .success((data:any):void => {
          this.docs = data;
        })
        .error((data:any):void => {
          console.log(data);
        })
  }

  toggleSideBar(id:string):void {
    this.$mdSidenav(id).toggle();
  }

  switchToTab(group:Model.IDocsGroup):void {

    var obj: any = [];

    this.documentation = {};

    angular.forEach(group.children, (element: number) => {
      var def = this.findObjectById(element, this.docs);

      if (def) {
        obj.push(def);
      }
    });

    this.documentation.classes = obj;
    this.selectedTabIndex = this.docs.groups.indexOf(group);
    this.$mdSidenav('left').close();
  }

  findObjectById(id: number, docs: Model.IDocs): Model.IDocBaseId {
    var retval: Model.IDocBaseId = null;
    angular.forEach(docs.children, (element: Model.IDocBaseId): void => {
      if (element.id === id) {
        retval = element;
        return;
      }
    });

    return retval;
  }
}

export = IndexController;
