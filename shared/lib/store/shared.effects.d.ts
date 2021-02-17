import { Actions } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from '../locale/locale.service';
import * as i0 from "@angular/core";
export declare class SharedEffect {
    private actions$;
    private translate;
    private localeService;
    constructor(actions$: Actions, translate: TranslateService, localeService: LocaleService);
    setLocalInfo$: import("rxjs").Observable<{
        languageCode: string;
        countryCode: string;
        timezoneCode: string;
    } & import("@ngrx/store/src/models").TypedAction<"[shared] set locale info">> & import("@ngrx/effects").CreateEffectMetadata;
    static ɵfac: i0.ɵɵFactoryDef<SharedEffect, never>;
    static ɵprov: i0.ɵɵInjectableDef<SharedEffect>;
}
