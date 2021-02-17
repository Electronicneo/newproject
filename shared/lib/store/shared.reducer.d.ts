import { Action } from '@ngrx/store';
export interface ISharedState {
    workspaceId: string;
    pageId: string;
    languageCode: string;
    countryCode: string;
    timezoneCode: string;
}
export declare function reducer(state: ISharedState | undefined, action: Action): ISharedState;
