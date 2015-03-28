
import IScope = require("../../../interface/IScope");
import IController = require("../../../interface/IController");
import BaseController = require("../../../BaseController");

interface Scope extends IScope<Controller> {
}

interface Controller extends IController<Scope> {
  language: string;
  theme: string;
  application: string;

  setApplication(application: string): void;
  setLanguage(language: string): void;
  setTheme(theme: string): void;
}

class ToolbarController extends BaseController<Scope> implements Controller {

  static NAME: string = 'com.github.gregoranders.arts.base.controller.toolbar';
  static APPLICATION: string = 'arts';
  static LANGUAGE: string = 'en_US';
  static THEME: string = 'green';

  static $inject: string[] = ['$scope',
    '$translate',
    '$window',
    'localStorageService'
  ];

  language: string = undefined;
  theme: string = undefined;
  application: string = undefined;

  constructor(public $scope: Scope, private $translate: ng.translate.ITranslateService,
              private $window: any,
              private localStorageService: any) {
    super($scope);

    // language
    this.language = localStorageService.get('language');

    if (!this.language) {
      this.language = ToolbarController.LANGUAGE;
    }

    this.$scope.$watch(() => { return this.language; }, (language: string, old: string) => {
      if (old !== language) {
        this.setLanguage(language);
      }
    });

    // theme
    this.theme = localStorageService.get('theme');

    if (!this.theme) {
      this.theme = ToolbarController.THEME;
    }

    this.$scope.$watch(() => { return this.theme; }, (theme: string, old: string) => {
      if (old !== theme) {
        this.setTheme(theme);
      }
    });

    // application
    this.application = localStorageService.get('application');

    if (!this.application) {
      this.application = ToolbarController.APPLICATION;
    }

    this.$scope.$watch(() => { return this.application; }, (application: string) => {
      this.setApplication(application);
    });
  }

  setLanguage(language: string): void {
    this.$translate.refresh(language);
    this.$translate.use(language);
    this.language = language;
    this.localStorageService.set('language', this.language);
    this.$window.location.reload();
  }

  setTheme(theme: string): void {
    this.theme = theme;
    this.localStorageService.set('theme', this.theme);
    this.$window.location.reload();
  }

  setApplication(application: string): void {
    this.application = application;
    this.localStorageService.set('application', this.application);
  }
}

export = ToolbarController;
