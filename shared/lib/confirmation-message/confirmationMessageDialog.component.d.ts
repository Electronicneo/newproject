import { OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import * as i0 from "@angular/core";
export declare class ConfirmationMessageDialogComponent implements OnInit {
    protected ref: NbDialogRef<ConfirmationMessageDialogComponent>;
    constructor(ref: NbDialogRef<ConfirmationMessageDialogComponent>);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDef<ConfirmationMessageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ConfirmationMessageDialogComponent, "shared-confirmationMessageDialog", never, {}, {}, never, never>;
}
