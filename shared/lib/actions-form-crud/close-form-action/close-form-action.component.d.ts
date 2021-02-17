import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CloseFormActionComponent implements OnInit {
    closeEditFormEmitter: EventEmitter<Event>;
    tooltip: string;
    constructor();
    ngOnInit(): void;
    close(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<CloseFormActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CloseFormActionComponent, "shared-close-form-action", never, { "tooltip": "tooltip"; }, { "closeEditFormEmitter": "closeEditForm"; }, never, never>;
}
