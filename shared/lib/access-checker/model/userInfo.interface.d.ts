export interface IUserInfo {
    workspaceId?: string;
    pageId?: string;
    serviceId?: string;
    userUuid: string;
    authPermissions: {};
    userName: string;
    nomeRuolo: string;
    fullName: string;
    rootName: string;
    keyOid: string;
    nodeBreadcrumb: string;
    enablingUuid: string;
    rootList?: string[];
    languageCode: string;
    countryCode: string;
    timeZoneCode: string;
}
