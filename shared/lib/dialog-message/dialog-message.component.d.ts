import { OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class DialogMessageComponent implements OnInit {
    protected ref: NbDialogRef<DialogMessageComponent>;
    translate: TranslateService;
    title: string;
    message: string;
    isConfirmationMode: boolean;
    constructor(ref: NbDialogRef<DialogMessageComponent>, translate: TranslateService);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDef<DialogMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DialogMessageComponent, "shared-dialog-message", never, {}, {}, never, never>;
}
