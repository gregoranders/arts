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
}