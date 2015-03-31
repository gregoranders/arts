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
  enumerations: IDocClasses;
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
  Global = 0,
  ExternalModule = 1,
  Module = 2,
  Enum = 4,
  EnumMember = 16,
  Variable = 32,
  Function = 64,
  Class = 128,
  Interface = 256,
  Constructor = 512,
  Property = 1024,
  Method = 2048,
  CallSignature = 4096,
  IndexSignature = 8192,
  ConstructorSignature = 16384,
  Parameter = 32768,
  TypeLiteral = 65536,
  TypeParameter = 131072,
  Accessor = 262144,
  GetSignature = 524288,
  SetSignature = 1048576,
  ObjectLiteral = 2097152,
  TypeAlias = 4194304,
  Event = 8388608,

  ClassOrInterface = Class | Interface,
  VariableOrProperty = Variable | Property,
  FunctionOrMethod = Function | Method,
  SomeSignature = CallSignature | IndexSignature | ConstructorSignature | GetSignature | SetSignature,
  SomeModule = Module | ExternalModule
}

export enum DocTypeFlag
{
  Private = 1,
  Protected = 2,
  Public = 4,
  Static = 8,
  Exported = 16,
  ExportAssignment = 32,
  External = 64,
  Optional = 128,
  DefaultValue = 256,
  Rest = 512,
  ConstructorProperty = 1024
}
