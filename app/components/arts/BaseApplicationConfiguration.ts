/// <reference path="../../library.d.ts" />

import IConfiguration = require('./interface/IConfiguration');
import BaseConfiguration = require('./BaseConfiguration');

'use strict';

class BaseApplicationConfiguration extends BaseConfiguration {
    /**
     * Class name.
     *
     * @type {string}
     */
    static NAME:string = 'com.github.gregoranders.arts.base.configuration';

    static $inject:Array<string> = [
        '$routeProvider',
        '$controllerProvider',
        '$provide',
        '$compileProvider',
        '$translateProvider',
        '$translatePartialLoaderProvider',
        '$mdThemingProvider',
        'localStorageServiceProvider'];

    constructor(protected id: string,
                protected defaultLanguage: string,
                protected defaultTheme: string,
                protected $routeProvider:angular.route.IRouteProvider,
                protected $controllerProvider:angular.IControllerProvider,
                protected $provideService:ng.auto.IProvideService,
                protected $compileProvider:ng.ICompileProvider,
                protected $translateProvider:ng.translate.ITranslateProvider,
                protected $translatePartialLoaderProvider:ng.translate.ITranslatePartialLoaderService,
                protected $mdThemingProvider:ng.material.MDThemingProvider,
                protected localStorageServiceProvider:angular.local.storage.ILocalStorageServiceProvider) {

        super($routeProvider, $controllerProvider, $provideService, $compileProvider, $translateProvider);

        $routeProvider.otherwise({
            redirectTo: '/'
        });

        // theming
        this.$mdThemingProvider.theme('blue')
            .primaryPalette('blue')
            .accentPalette('light-blue');

        this.$mdThemingProvider.theme('indigo')
            .primaryPalette('indigo')
            .accentPalette('blue');

        this.$mdThemingProvider.theme('green')
            .primaryPalette('green')
            .accentPalette('light-green');

        this.$mdThemingProvider.alwaysWatchTheme(true);

        // defaults
        localStorageServiceProvider
            .setPrefix(id)
            .setNotify(true, true);

        var language = localStorage.getItem(id + '.language'),
            theme = localStorage.getItem(id + '.theme');

        if (!language) {
            language = defaultLanguage;
        }

        if (!theme) {
            theme = defaultTheme;
        }

        $translateProvider.preferredLanguage(language);
        $mdThemingProvider.setDefaultTheme(theme);
    }

    initTranslations(basePath: string) {
        // translations
        this.$translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: basePath + 'components/{part}/l10n/{lang}.json'
        });
        this.$translatePartialLoaderProvider.addPart('arts');
    }
}

export = BaseApplicationConfiguration;