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

  getClasses(documentation: Model.IDocs): Model.IDocClasses
  {
    var group: Model.IDocsGroup = this.getGroup(documentation, Model.DocType.Classes);

    group.entries = this.getChildren(documentation, group);

    return group.entries;
  }

  getInterfaces(documentation: Model.IDocs): Model.IDocClasses
  {
    var group: Model.IDocsGroup = this.getGroup(documentation, Model.DocType.Interfaces);

    group.entries = this.getChildren(documentation, group);

    return group.entries;
  }

  getVariables(documentation: Model.IDocs): Model.IDocClasses
  {
    var group: Model.IDocsGroup = this.getGroup(documentation, Model.DocType.Variables);

    group.entries = this.getChildren(documentation, group);

    return group.entries;
  }

  getFunctions(documentation: Model.IDocs): Model.IDocClasses
  {
    var group: Model.IDocsGroup = this.getGroup(documentation, Model.DocType.Functions);

    group.entries = this.getChildren(documentation, group);

    return [];
  }

  getGroup(documentation: Model.IDocs, docType: Model.DocType): Model.IDocsGroup {
    var group: Model.IDocsGroup = null;

    angular.forEach(documentation.groups, (element: Model.IDocsGroup): void => {
      if (element.kind === docType)
      {
        group = element;
      }
    });

    return group;
  }

  getChildren(documentation: Model.IDocs, element: Model.IDocsGroup): any {
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

  getEntries(documentation: Model.IDocs, id: number): Model.IDocsGroup {
    var entry: any = null;

    angular.forEach(documentation.children, (element: Model.IDocBaseId): void => {
      if (element.id === id)
      {
        entry = element;
        return;
      }
    });

    return entry;
  }

}

export = DocsService;