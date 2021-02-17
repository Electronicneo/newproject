import { AccessCheckerService } from '../access-checker/access-checker.service';
import * as i0 from "@angular/core";
export declare class LocaleService {
    private acs;
    constructor(acs: AccessCheckerService);
    private _locale;
    set locale(value: string);
    get locale(): string;
    registerCulture(culture: string): void;
    static ɵfac: i0.ɵɵFactoryDef<LocaleService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LocaleService>;
}
