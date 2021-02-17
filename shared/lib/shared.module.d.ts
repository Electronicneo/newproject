import { ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as i0 from "@angular/core";
import * as i1 from "./confirmation-message/confirmationMessageDialog.component";
import * as i2 from "./dialog-message/dialog-message.component";
import * as i3 from "./pipes/boolean-pipe.pipe";
import * as i4 from "./pipes/truncate.pipe";
import * as i5 from "./user-enabling/user-enabling.component";
import * as i6 from "./header-crud/header-crud.component";
import * as i7 from "./actions-form-crud/close-form-action/close-form-action.component";
import * as i8 from "./actions-form-crud/default-form-actions/default-form-actions.component";
import * as i9 from "@angular/common";
import * as i10 from "@nebular/theme";
import * as i11 from "@ngx-translate/core";
import * as i12 from "primeng";
import * as i13 from "@ngrx/store";
import * as i14 from "@ngrx/effects";
export declare function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader;
export declare class SharedModule {
    static forRoot(environment: any): i0.ModuleWithProviders<SharedModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<SharedModule, [typeof i1.ConfirmationMessageDialogComponent, typeof i2.DialogMessageComponent, typeof i3.BooleanPipePipe, typeof i4.TruncatePipe, typeof i5.UserEnablingComponent, typeof i6.HeaderCrudComponent, typeof i7.CloseFormActionComponent, typeof i8.DefaultFormActionsComponent], [typeof i9.CommonModule, typeof i10.NbCardModule, typeof i10.NbButtonModule, typeof i10.NbToastrModule, typeof i11.TranslateModule, typeof i12.TableModule, typeof i10.NbToggleModule, typeof i13.StoreFeatureModule, typeof i14.EffectsFeatureModule, typeof i10.NbIconModule, typeof i10.NbTooltipModule], [typeof i1.ConfirmationMessageDialogComponent, typeof i2.DialogMessageComponent, typeof i3.BooleanPipePipe, typeof i4.TruncatePipe, typeof i5.UserEnablingComponent, typeof i10.NbIconModule, typeof i10.NbTooltipModule, typeof i6.HeaderCrudComponent, typeof i7.CloseFormActionComponent, typeof i8.DefaultFormActionsComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<SharedModule>;
}
