import ArtsVersion = require("../../../ArtsVersion");

import IScope = require("../../../interface/IScope");
import IController = require("../../../interface/IController");
import BaseController = require("../../../BaseController");

interface ITheme {
  id: string;
}

interface ILanguage {
  id: string;
}

interface IApplication {
  id: string;
  name: string;
}

interface IToolbarControllerScope extends IScope<IToolbarController> {
}

interface IToolbarController extends IController<IToolbarControllerScope> {
  languages: ILanguage[];
  language: string;

  themes: ITheme[];
  theme: string;

  url: string;
  version: string;

  applications: IApplication[];
  application: string;

  setApplication(application:string): void;
  setLanguage(language:string): void;
  setTheme(theme:string): void;
}

class ToolbarController extends BaseController<IToolbarControllerScope> implements IToolbarController {

  static NAME:string = 'com.github.gregoranders.arts.base.controller.toolbar';

  static LANGUAGES:ILanguage[] = [
    {id: 'en_US'},
    {id: 'de_DE'},
    {id: 'pl_PL'},
    {id: 'ru_RU'}
  ];
  static LANGUAGE:string = 'en_US';

  static THEMES:ILanguage[] = [
    {id: 'blue'},
    {id: 'green'},
    {id: 'indigo'}
  ];
  static THEME:string = 'green';

  static APPLICATIONS:IApplication[] = [
    {id: 'arts', name: 'Arts'}
  ];
  static APPLICATION:string = 'arts';

  static $inject:string[] = ['$scope',
    '$translate',
    '$window',
    'localStorageService'
  ];

  languages:ILanguage[] = [];
  language:string = undefined;

  themes:ILanguage[] = [];
  theme:string = undefined;

  applications:IApplication[];
  application:string = undefined;

  url:string = ArtsVersion.URL;
  version:string = ArtsVersion.VERSION;

  constructor(public $scope:IToolbarControllerScope, private $translate:ng.translate.ITranslateService,
              private $window:Window,
              private localStorageService:angular.local.storage.ILocalStorageService<string>) {
    super($scope);

    // language
    this.languages = ToolbarController.LANGUAGES;
    var lang = localStorageService.get('language');

    if (!lang) {
      lang = ToolbarController.LANGUAGE;
    }

    $translate.use(lang).then(() => {
      this.setLanguage(lang);
      this.$scope.$watch(() => {
        return this.language;
      }, (language:string, old:string) => {
        if (language && old !== language) {
          this.setLanguage(language);
        }
      });
    });

    // theme
    this.themes = ToolbarController.THEMES;
    this.theme = localStorageService.get('theme');

    if (!this.theme) {
      this.theme = ToolbarController.THEME;
    }

    this.$scope.$watch(() => {
      return this.theme;
    }, (theme:string, old:string) => {
      if (old !== theme) {
        this.setTheme(theme);
      }
    });

    // application
    this.applications = ToolbarController.APPLICATIONS;
    this.application = localStorageService.get('application');

    if (!this.application) {
      this.application = ToolbarController.APPLICATION;
    }

    this.$scope.$watch(() => {
      return this.application;
    }, (application:string) => {
      this.setApplication(application);
    });
  }

  setLanguage(language:string):void {
    this.$translate.use(language).then(() => {
      this.language = language;
      this.localStorageService.set('language', this.language);
    });
  }

  setTheme(theme:string):void {
    this.theme = theme;

    this.localStorageService.set('theme', this.theme);

    // It seems there is something broken with angular material forcing a hard reload here to apply new color palettes
    this.$window.location.reload();
  }

  setApplication(application:string):void {
    this.application = application;
    this.localStorageService.set('application', this.application);
  }
}

export = ToolbarController;