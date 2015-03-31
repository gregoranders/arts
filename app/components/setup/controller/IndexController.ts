import Arts = require('../../arts/Arts');
import Component = require("../Component");

interface IScope extends Arts.IScope<IController>
{
}

interface IController extends Arts.IController<IScope>
{
  selectedTabIndex: number;

  tabSelected(tab:number): void;
  switchToTab(tab:number): void;
  switchToTabFromBottomSheet(tab:number): void;

  toggleSideBar(id:string): void;

  refresh(): void;

  success(): void;
  error(): void;

  bottomSheet(): void;
}

class IndexController extends Arts.BaseController<IScope> implements IController
{
  static NAME:string = Component.NAME + '.controller.index';

  static TABS_NAME:string = 'setup.controller.index.tab';

  static $inject:string[] = [
    '$scope',
    '$mdSidenav',
    '$mdToast',
    '$mdBottomSheet',
    'localStorageService'
  ];

  static DEFAULT_TAB:number = 0;

  selectedTabIndex:number = IndexController.DEFAULT_TAB;

  bottomSheetPromise:ng.IPromise<void>;

  private baseURL:string;

  constructor(private $scope:IScope,
              private $mdSidenav:ng.material.MDSidenavService,
              private $mdToast:ng.material.MDToastService,
              private $mdBottomSheet:ng.material.MDBottomSheetService,
              private localStorageService:angular.local.storage.ILocalStorageService<number>)
  {
    super($scope);

    var component:Arts.IApplication = <Arts.IApplication>Arts.Arts.getModule(Component.NAME);

    this.selectedTabIndex = localStorageService.get(IndexController.TABS_NAME);

    if (!this.selectedTabIndex)
    {
      this.selectedTabIndex = IndexController.DEFAULT_TAB;
    }

    this.baseURL = component.getBaseURL();
  }

  bottomSheet():void
  {
    this.bottomSheetPromise = this.$mdBottomSheet.show({
      templateUrl: this.baseURL + 'view/main-bottom-sheet.html',
      scope: this.$scope,
      preserveScope: true,
      parent: <any>angular.element(document.getElementById('content'))
    });
  }

  tabSelected(tab:number):void
  {
    this.localStorageService.set(IndexController.TABS_NAME, tab);
  }

  switchToTab(tab:number):void
  {
    this.selectedTabIndex = tab;
    this.$mdSidenav('left').close();
  }

  switchToTabFromBottomSheet(tab:number):void
  {
    if (this.bottomSheetPromise)
    {
      this.$mdBottomSheet.hide(this.bottomSheetPromise);
      this.bottomSheetPromise = null;
    }
    this.switchToTab(tab);
  }


  toggleSideBar(id:string):void
  {
    this.$mdSidenav(id).toggle();
  }

  refresh():void
  {
    this.$mdToast.show({
      hideDelay: 3000,
      template: '<md-toast><span translate="load.partial.arts.generic.refresh"></span></md-toast>',
      position: 'top right'
    });
  }

  success():void
  {
    this.$mdToast.show({
      hideDelay: 3000,
      template: '<md-toast class="success"><span translate="load.partial.arts.generic.success"></span></md-toast>',
      position: 'top right'
    });

  }

  error():void
  {
    this.$mdToast.show({
      hideDelay: 3000,
      template: '<md-toast class="error"><span translate="load.partial.arts.generic.error"></span></md-toast>',
      position: 'top right'
    });
  }
}

export = IndexController;
