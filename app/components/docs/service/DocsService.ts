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

  static $inject:Array<string> = [
    '$http'
  ];

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

  getGroupEntries(documentation: Model.IDocs, groupType: Model.DocType): Model.IDocClasses
  {
    var group: Model.IDocsGroup = this._getGroup(documentation, groupType);

    group.entries = this._getChildren(documentation, group);

    return group.entries;
  }

  getEntries(documentation: Model.IDocs, entry: Model.IDocsGroup): void
  {
    entry.entries = this._getChildren(documentation, entry);
  }

  _getGroup(documentation: Model.IDocs, docType: Model.DocType): Model.IDocsGroup {
    var group: Model.IDocsGroup = null;

    angular.forEach(documentation.groups, (element: Model.IDocsGroup): void => {
      if (element.kind === docType)
      {
        group = element;
      }
    });

    return group;
  }

  _getChildren(documentation: Model.IDocs, element: Model.IDocsGroup): any {
    var entries: Model.IDocBaseId[] = [];

    angular.forEach(element.children, (id: number): void => {
      angular.forEach(documentation.children, (entry: Model.IDocBaseId): void => {
        if (id === entry.id)
        {
          entries.push(entry);
        }
      });
    });

    return entries;
  }

}

export = DocsService;