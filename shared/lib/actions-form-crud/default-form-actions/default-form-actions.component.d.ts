import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DefaultFormActionsComponent implements OnInit {
    isEditMode: boolean;
    form: any;
    removeEmitter: EventEmitter<Event>;
    tooltipRemove: string;
    enableEditFormEmitter: EventEmitter<Event>;
    tooltipEnableEditForm: string;
    updateEmitter: EventEmitter<Event>;
    tooltipUpdate: string;
    tooltipSave: string;
    remove(event: any): void;
    enableEditForm(event: any): void;
    update(event: any): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<DefaultFormActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DefaultFormActionsComponent, "shared-default-form-actions", never, { "isEditMode": "isEditMode"; "form": "form"; "tooltipRemove": "tooltipRemove"; "tooltipEnableEditForm": "tooltipEnableEditForm"; "tooltipUpdate": "tooltipUpdate"; "tooltipSave": "tooltipSave"; }, { "removeEmitter": "remove"; "enableEditFormEmitter": "enableEditForm"; "updateEmitter": "update"; }, never, never>;
}
