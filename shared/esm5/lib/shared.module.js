import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbToastrModule, NbToggleModule, NbTooltipModule } from '@nebular/theme';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ConfirmationMessageDialogComponent } from './confirmation-message/confirmationMessageDialog.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { BooleanPipePipe } from './pipes/boolean-pipe.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { UserEnablingComponent } from './user-enabling/user-enabling.component';
import { TableModule } from 'primeng';
import { UserEnableApiService } from './user-enabling/api/user-enabling-api';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/shared.reducer';
import { featureShared } from './store/shared.selectors';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffect } from './store/shared.effects';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderCrudComponent } from './header-crud/header-crud.component';
import { CloseFormActionComponent } from './actions-form-crud/close-form-action/close-form-action.component';
import { DefaultFormActionsComponent } from './actions-form-crud/default-form-actions/default-form-actions.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@ngrx/store";
import * as i4 from "@ngrx/effects";
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function (environment) {
        return {
            ngModule: SharedModule,
            providers: [
                UserEnableApiService,
                {
                    provide: 'env',
                    useValue: environment
                }
            ]
        };
    };
    /** @nocollapse */ SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    /** @nocollapse */ SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                CommonModule,
                NbCardModule,
                NbButtonModule,
                NbToastrModule.forRoot(),
                TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    },
                    isolate: false
                }),
                TableModule,
                NbToggleModule,
                StoreModule.forFeature(featureShared, reducer),
                EffectsModule.forFeature([SharedEffect]),
                NbIconModule,
                NbTooltipModule
            ],
            NbIconModule, NbTooltipModule] });
    return SharedModule;
}());
export { SharedModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [ConfirmationMessageDialogComponent, DialogMessageComponent, BooleanPipePipe, TruncatePipe, UserEnablingComponent, HeaderCrudComponent, CloseFormActionComponent, DefaultFormActionsComponent], imports: [CommonModule,
        NbCardModule,
        NbButtonModule, i1.NbToastrModule, i2.TranslateModule, TableModule,
        NbToggleModule, i3.StoreFeatureModule, i4.EffectsFeatureModule, NbIconModule,
        NbTooltipModule], exports: [ConfirmationMessageDialogComponent, DialogMessageComponent, BooleanPipePipe, TruncatePipe, UserEnablingComponent, NbIconModule, NbTooltipModule, HeaderCrudComponent, CloseFormActionComponent, DefaultFormActionsComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [ConfirmationMessageDialogComponent, DialogMessageComponent, BooleanPipePipe, TruncatePipe, UserEnablingComponent, HeaderCrudComponent, CloseFormActionComponent, DefaultFormActionsComponent],
                imports: [
                    CommonModule,
                    NbCardModule,
                    NbButtonModule,
                    NbToastrModule.forRoot(),
                    TranslateModule.forChild({
                        loader: {
                            provide: TranslateLoader,
                            useFactory: HttpLoaderFactory,
                            deps: [HttpClient]
                        },
                        isolate: false
                    }),
                    TableModule,
                    NbToggleModule,
                    StoreModule.forFeature(featureShared, reducer),
                    EffectsModule.forFeature([SharedEffect]),
                    NbIconModule,
                    NbTooltipModule
                ],
                exports: [ConfirmationMessageDialogComponent, DialogMessageComponent, BooleanPipePipe, TruncatePipe, UserEnablingComponent, NbIconModule, NbTooltipModule, HeaderCrudComponent, CloseFormActionComponent, DefaultFormActionsComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzSCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ2hILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxN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QUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsMkJBQTJCLENBQUM7YUFDdE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05iQnV0dG9uTW9kdWxlLCBOYkNhcmRNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJUb2FzdHJNb2R1bGUsIE5iVG9nZ2xlTW9kdWxlLCBOYlRvb2x0aXBNb2R1bGV9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uTWVzc2FnZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uLW1lc3NhZ2UvY29uZmlybWF0aW9uTWVzc2FnZURpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctbWVzc2FnZS9kaWFsb2ctbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCb29sZWFuUGlwZVBpcGUgfSBmcm9tICcuL3BpcGVzL2Jvb2xlYW4tcGlwZS5waXBlJztcclxuaW1wb3J0IHsgVHJ1bmNhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy90cnVuY2F0ZS5waXBlJztcclxuaW1wb3J0IHsgVXNlckVuYWJsaW5nQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLWVuYWJsaW5nL3VzZXItZW5hYmxpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHtUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZyc7XHJcbmltcG9ydCB7IFVzZXJFbmFibGVBcGlTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWVuYWJsaW5nL2FwaS91c2VyLWVuYWJsaW5nLWFwaSc7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQge3JlZHVjZXJ9IGZyb20gJy4vc3RvcmUvc2hhcmVkLnJlZHVjZXInXHJcbmltcG9ydCB7IGZlYXR1cmVTaGFyZWQgfSBmcm9tICcuL3N0b3JlL3NoYXJlZC5zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFNoYXJlZEVmZmVjdCB9IGZyb20gJy4vc3RvcmUvc2hhcmVkLmVmZmVjdHMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xyXG5pbXBvcnQgeyBIZWFkZXJDcnVkQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXItY3J1ZC9oZWFkZXItY3J1ZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nsb3NlRm9ybUFjdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hY3Rpb25zLWZvcm0tY3J1ZC9jbG9zZS1mb3JtLWFjdGlvbi9jbG9zZS1mb3JtLWFjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RlZmF1bHRGb3JtQWN0aW9uc0NvbXBvbmVudH0gZnJvbSAnLi9hY3Rpb25zLWZvcm0tY3J1ZC9kZWZhdWx0LWZvcm0tYWN0aW9ucy9kZWZhdWx0LWZvcm0tYWN0aW9ucy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEh0dHBMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ29uZmlybWF0aW9uTWVzc2FnZURpYWxvZ0NvbXBvbmVudCwgRGlhbG9nTWVzc2FnZUNvbXBvbmVudCwgQm9vbGVhblBpcGVQaXBlLCBUcnVuY2F0ZVBpcGUsIFVzZXJFbmFibGluZ0NvbXBvbmVudCwgSGVhZGVyQ3J1ZENvbXBvbmVudCwgQ2xvc2VGb3JtQWN0aW9uQ29tcG9uZW50LCBEZWZhdWx0Rm9ybUFjdGlvbnNDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5iQ2FyZE1vZHVsZSxcclxuICAgIE5iQnV0dG9uTW9kdWxlLFxyXG4gICAgTmJUb2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvckNoaWxkKHtcclxuICAgICAgbG9hZGVyOiB7XHJcbiAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcclxuICAgICAgdXNlRmFjdG9yeTogSHR0cExvYWRlckZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtIdHRwQ2xpZW50XVxyXG4gICAgfSxcclxuICAgIGlzb2xhdGU6IGZhbHNlXHJcbn0pLFxyXG4gICAgVGFibGVNb2R1bGUsXHJcbiAgICBOYlRvZ2dsZU1vZHVsZSxcclxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoZmVhdHVyZVNoYXJlZCwgcmVkdWNlciksXHJcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1NoYXJlZEVmZmVjdF0pLFxyXG4gICAgTmJJY29uTW9kdWxlLFxyXG4gICAgTmJUb29sdGlwTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbQ29uZmlybWF0aW9uTWVzc2FnZURpYWxvZ0NvbXBvbmVudCxEaWFsb2dNZXNzYWdlQ29tcG9uZW50LCBCb29sZWFuUGlwZVBpcGUsIFRydW5jYXRlUGlwZSwgVXNlckVuYWJsaW5nQ29tcG9uZW50LCBOYkljb25Nb2R1bGUsIE5iVG9vbHRpcE1vZHVsZSwgSGVhZGVyQ3J1ZENvbXBvbmVudCwgQ2xvc2VGb3JtQWN0aW9uQ29tcG9uZW50LCBEZWZhdWx0Rm9ybUFjdGlvbnNDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgVXNlckVuYWJsZUFwaVNlcnZpY2UsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogJ2VudicsIC8vIHlvdSBjYW4gYWxzbyB1c2UgSW5qZWN0aW9uVG9rZW5cclxuICAgICAgICAgIHVzZVZhbHVlOiBlbnZpcm9ubWVudFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19