import { ISharedState } from './shared.reducer';
export declare const setWorkSpace: import("@ngrx/store").ActionCreator<"[shared] set workspace", (props: {
    workspaceID: string;
}) => {
    workspaceID: string;
} & import("@ngrx/store/src/models").TypedAction<"[shared] set workspace">>;
export declare const setPage: import("@ngrx/store").ActionCreator<"[shared] set page", (props: {
    pageID: string;
}) => {
    pageID: string;
} & import("@ngrx/store/src/models").TypedAction<"[shared] set page">>;
export declare const setService: import("@ngrx/store").ActionCreator<"[shared] set service", (props: {
    serviceID: string;
}) => {
    serviceID: string;
} & import("@ngrx/store/src/models").TypedAction<"[shared] set service">>;
export declare const setPermissionsAndUserInfo: import("@ngrx/store").ActionCreator<"[shared] set permissions And User Info", (props: {
    userInfo: ISharedState;
}) => {
    userInfo: ISharedState;
} & import("@ngrx/store/src/models").TypedAction<"[shared] set permissions And User Info">>;
export declare const setLocaleInfo: import("@ngrx/store").ActionCreator<"[shared] set locale info", (props: {
    languageCode: string;
    countryCode: string;
    timezoneCode: string;
}) => {
    languageCode: string;
    countryCode: string;
    timezoneCode: string;
} & import("@ngrx/store/src/models").TypedAction<"[shared] set locale info">>;
