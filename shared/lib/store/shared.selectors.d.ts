import { ISharedState } from './shared.reducer';
export declare const featureShared = "shared";
export interface AppSharedState {
    shared: ISharedState;
}
export declare const selectFeature: import("@ngrx/store").MemoizedSelector<AppSharedState, ISharedState, import("@ngrx/store").DefaultProjectorFn<ISharedState>>;
export declare const selectWorkspace: import("@ngrx/store").MemoizedSelector<AppSharedState, string, import("@ngrx/store").DefaultProjectorFn<string>>;
export declare const selectPage: import("@ngrx/store").MemoizedSelector<AppSharedState, string, import("@ngrx/store").DefaultProjectorFn<string>>;
