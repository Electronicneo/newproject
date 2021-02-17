import { Actions } from '@ngrx/effects';
import { NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ToastrEffects {
    private actions$;
    private toastrService;
    private translate;
    defaultSuccessMessage$: import("rxjs").Observable<import("@ngrx/store/src/models").TypedAction<"[Tostr] Default Success Message">> & import("@ngrx/effects").CreateEffectMetadata;
    errorMessage$: import("rxjs").Observable<{
        message: string;
        title: string;
    } & import("@ngrx/store/src/models").TypedAction<"[Tostr] failure Message">> & import("@ngrx/effects").CreateEffectMetadata;
    warningMessage$: import("rxjs").Observable<{
        message: string;
    } & import("@ngrx/store/src/models").TypedAction<"[Tostr] failure Warning">> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, toastrService: NbToastrService, translate: TranslateService);
    static ɵfac: i0.ɵɵFactoryDef<ToastrEffects, never>;
    static ɵprov: i0.ɵɵInjectableDef<ToastrEffects>;
}
