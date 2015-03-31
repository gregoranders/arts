import Arts = require('../../arts/Arts');
import Component = require('../Component');
import IDocsService = require('../service/IDocsService');
import Model = require('../model/IDocsModel');

interface IScope extends Arts.IScope<IController>
{
}

interface IController extends Arts.IController<IScope>
{
  selectedTabIndex: number;
  documentation: Model.IDocs;

  toggleSideBar(id:string): void;

  tabSelected(group:Model.IDocsGroup): void;
  switchToTab(group:Model.IDocsGroup): void;

  showDocumentation(entry: Model.IDocsGroup): void;
}

class IndexController extends Arts.BaseController<IScope> implements IController
{
  static NAME:string = Component.NAME + '.controller.index';

  static TABS_NAME:string = 'docs.controller.index.tab';

  static $inject:string[] = [
    '$scope',
    '$mdSidenav',
    '$mdToast',
    '$mdBottomSheet',
    'localStorageService',
    Component.SERVICE
  ];

  static DEFAULT_TAB:number = 0;

  selectedTabIndex:number = 0;

  bottomSheetPromise:ng.IPromise<void>;

  documentation:Model.IDocs = null;

  private baseURL:string;

  constructor(public $scope:IScope,
              private $mdSidenav:ng.material.MDSidenavService,
              private $mdToast:ng.material.MDToastService,
              private $mdBottomSheet:ng.material.MDBottomSheetService,
              private localStorageService:angular.local.storage.ILocalStorageService<number>,
              private IDocsService:IDocsService)
  {
    super($scope);

    var component:Arts.IApplication = <Arts.IApplication>Arts.Arts.getModule(Component.NAME);

    this.selectedTabIndex = localStorageService.get(IndexController.TABS_NAME);

    if (!this.selectedTabIndex)
    {
      this.selectedTabIndex = IndexController.DEFAULT_TAB;
    }

    this.baseURL = component.getBaseURL();

    IDocsService.getDocs()
        .success((data:any):void =>
        {
          this.documentation = data;

          this.documentation.enumerations = this.IDocsService.getGroupEntries(this.documentation, Model.DocType.Enum);
          this.documentation.classes = this.IDocsService.getGroupEntries(this.documentation, Model.DocType.Class);
          this.documentation.interfaces = this.IDocsService.getGroupEntries(this.documentation, Model.DocType.Interface);
          this.documentation.variables = this.IDocsService.getGroupEntries(this.documentation, Model.DocType.Variable);
          this.documentation.functions = this.IDocsService.getGroupEntries(this.documentation, Model.DocType.Function);
        })
        .error((data:any):void =>
        {
          console.log(data);
        })
  }

  toggleSideBar(id:string):void
  {
    this.$mdSidenav(id).toggle();
  }

  tabSelected(group:Model.IDocsGroup):void
  {
    this.localStorageService.set(IndexController.TABS_NAME, this.documentation.groups.indexOf(group));
  }

  switchToTab(group:Model.IDocsGroup):void
  {
    this.selectedTabIndex = this.documentation.groups.indexOf(group);
    this.$mdSidenav('left').close();
  }

  showDocumentation(entry: Model.IDocsGroup): void
  {
  }
}

export = IndexController;
