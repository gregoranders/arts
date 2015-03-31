import Arts = require('../../arts/Arts');
import IDocsService = require('./IDocsService');
import Component = require('../Component');
import Model = require('../model/IDocsModel');

class DocsService extends Arts.BaseService implements IDocsService
{
  /**
   * Class name.
   *
   * @type {string}
   */
  static NAME:string = Component.SERVICE;

  static $inject:Array<string> = ['$http'];

  constructor(private $http:ng.IHttpService)
  {
    super(DocsService.NAME);
  }

  getDocs():ng.IHttpPromise<Model.IDocs>
  {
    var component:Arts.IApplication = <Arts.IApplication>Arts.Arts.getModule(Component.NAME),
        basePath = component.getBaseURL();

    return this.$http.get(basePath + 'l10n/docs.json');
  }
}

export = DocsService;