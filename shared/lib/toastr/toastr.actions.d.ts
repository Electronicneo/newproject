export declare const defaultSuccessMessage: import("@ngrx/store").ActionCreator<"[Tostr] Default Success Message", () => import("@ngrx/store/src/models").TypedAction<"[Tostr] Default Success Message">>;
export declare const failureMessage: import("@ngrx/store").ActionCreator<"[Tostr] failure Message", (props: {
    message: string;
    title: string;
}) => {
    message: string;
    title: string;
} & import("@ngrx/store/src/models").TypedAction<"[Tostr] failure Message">>;
export declare const warningMessage: import("@ngrx/store").ActionCreator<"[Tostr] failure Warning", (props: {
    message: string;
}) => {
    message: string;
} & import("@ngrx/store/src/models").TypedAction<"[Tostr] failure Warning">>;
