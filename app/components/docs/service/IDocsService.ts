import Arts = require('../../arts/Arts');
import Component = require('../Component');
import Model = require('../model/IDocsModel');

interface IDocsService extends Arts.IService {
  getDocs(): ng.IHttpPromise<Model.IDocs>;
}

export = IDocsService;