export type PermissionDefinition = {
  [permissionName: string]: number;
};

export type PermissionMap<T extends PermissionDefinition> = {
  [permissionName in keyof T]: boolean;
};
