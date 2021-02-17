export interface IUserEnabling {
    enabling: {
        keyUuid: string;
        rootName: string;
        defaultEnabling: boolean;
    };
    groupName: string;
    roleName: string;
    nodeBreadcrumb: string[];
}
