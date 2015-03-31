import Arts = require('../../arts/Arts');
import Component = require('../Component');
import Model = require('../model/IDocsModel');

interface IDocsService extends Arts.IService
{
  getDocs(): ng.IHttpPromise<Model.IDocs>;

  getGroupEntries(documentation: Model.IDocs, groupType: Model.DocType): Model.IDocClasses;

  getEntries(documentation: Model.IDocs, entry: Model.IDocsGroup): void;
}

export = IDocsService;