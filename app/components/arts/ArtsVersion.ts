/// <reference path="../../library.d.ts" />

export var VERSION:string = '0.0.9';

export var URL:string = 'https://github.com/gregoranders/arts';

export enum TYPE
{
  IModule = 0,
  IIdentifier = 2,
  IInject = 4,
  IScope = 8,
  IController = 16,
  IService = 32,
  IDirective = 64,
  IApplication = 128,
  IFactory = 256,
  IConfiguration = 512,
  IComponent = 1024
}
