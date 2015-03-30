import Arts = require('../../arts/Arts');

interface IScope extends Arts.IScope<IController> {

}

interface IController extends Arts.IController<IScope> {
    selectedTabIndex: number;

    switchToTab(tab: number): void;
    switchToTabFromBottomSheet(tab: number): void;

    toggleSideBar(id: string): void;

    refresh(): void;

    success(): void;
    error(): void;

    bottomSheet(): void;
}

class IndexController extends Arts.BaseController<IScope> implements IController {

    static $inject:string[] = ['$scope', '$mdSidenav', '$mdToast', '$mdBottomSheet'];

    selectedTabIndex: number = 0;

    bottomSheetPromise: ng.IPromise<void>;

    constructor(public $scope:IScope, private $mdSidenav:ng.material.MDSidenavService,
                private $mdToast: ng.material.MDToastService,
                private $mdBottomSheet: ng.material.MDBottomSheetService) {
        super($scope);
    }

    bottomSheet(): void {
        this.bottomSheetPromise = this.$mdBottomSheet.show({
            templateUrl: 'view/main-bottom-sheet.html',
            scope: this.$scope,
            preserveScope: true,
            parent: <any>angular.element(document.getElementById('content'))
        });
    }

    switchToTab(tab: number): void {
        this.selectedTabIndex = tab;
        this.$mdSidenav('left').close();
    }

    switchToTabFromBottomSheet(tab: number): void {
        if (this.bottomSheetPromise) {
            this.$mdBottomSheet.hide(this.bottomSheetPromise);
            this.bottomSheetPromise = null;
        }
        this.selectedTabIndex = tab;
    }


    toggleSideBar(id: string): void {
        this.$mdSidenav(id).toggle();
    }

    refresh(): void {
        this.$mdToast.show({
            hideDelay: 3000,
            template: '<md-toast><span translate="load.partial.arts.generic.refresh"></span></md-toast>',
            position: 'top right'
        });
    }

    success(): void {
        this.$mdToast.show({
            hideDelay: 3000,
            template: '<md-toast class="success"><span translate="load.partial.arts.generic.success"></span></md-toast>',
            position: 'top right'
        });

    }

    error(): void {
        this.$mdToast.show({
            hideDelay: 3000,
            template: '<md-toast class="error"><span translate="load.partial.arts.generic.error"></span></md-toast>',
            position: 'top right'
        });
    }
}

export = IndexController;
