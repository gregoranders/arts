export interface IDocBaseKind
{
  kind: number;
}

export interface IDocBaseId extends IDocBaseKind
{
  id: number;
}

export interface IDocBase extends IDocBaseId
{
  name: string;
}

export interface IDocs extends IDocBase
{
  groups: IDocsGroups;
  children: IDocsChildren;
  classes: IDocClasses;
  interfaces: IDocClasses;
  variables: IDocClasses;
  functions: IDocClasses;
}

export interface IDocsGroups extends Array<IDocsGroup>
{
  [index: number]: IDocsGroup;
}

export interface IDocsChildren extends Array<IDocBaseId>
{
  [index: number]: IDocBaseId;
}

export interface IDocsGroup extends IDocBaseKind
{
  title: string;
  children: any;
  entries: any;
}

export interface IDocClasses extends Array<IDocClass>
{
  [index: number]: IDocClass;
}

export interface IDocClass extends IDocBaseKind
{
  title: string;
  children: any;
}

export enum DocType
{
  Classes = 128,
  Interfaces = 256,
  Variables = 32,
  Functions = 64
}
