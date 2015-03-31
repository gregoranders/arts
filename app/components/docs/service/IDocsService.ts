import Arts = require('../../arts/Arts');
import Component = require('../Component');
import Model = require('../model/IDocsModel');

interface IDocsService extends Arts.IService
{
  getDocs(): ng.IHttpPromise<Model.IDocs>;

  getClasses(documentation: Model.IDocs): Model.IDocClasses;
  getInterfaces(documentation: Model.IDocs): Model.IDocClasses;
  getVariables(documentation: Model.IDocs): Model.IDocClasses;
  getFunctions(documentation: Model.IDocs): Model.IDocClasses;
}

export = IDocsService;