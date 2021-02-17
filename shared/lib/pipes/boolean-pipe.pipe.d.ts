import { PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class BooleanPipePipe implements PipeTransform {
    translateSrv: TranslateService;
    constructor(translateSrv: TranslateService);
    transform(value: any, ...args: any[]): any;
    static ɵfac: i0.ɵɵFactoryDef<BooleanPipePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<BooleanPipePipe, "booleanPipe">;
}
