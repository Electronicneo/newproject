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
export class SharedModule {
    static forRoot(environment) {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzSCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ2hILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1FQUFtRSxDQUFDO0FBQzNHLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlFQUF5RSxDQUFDOzs7Ozs7QUFFcEgsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQWdCO0lBQ2hELE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBMEJELE1BQU0sT0FBTyxZQUFZO0lBRWhCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDcEMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0I7Z0JBQ3BCO29CQUNFLE9BQU8sRUFBRSxLQUFLO29CQUNkLFFBQVEsRUFBRSxXQUFXO2lCQUN0QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O21FQWJVLFlBQVk7MEhBQVosWUFBWSxrQkF0QmQ7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUNaLGNBQWM7WUFDZCxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZCLE1BQU0sRUFBRTtvQkFDUixPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLGlCQUFpQjtvQkFDN0IsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFDO1lBQ0UsV0FBVztZQUNYLGNBQWM7WUFDZCxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7WUFDOUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLFlBQVk7WUFDWixlQUFlO1NBQ2hCO1FBQzBILFlBQVksRUFBRSxlQUFlO3dGQUU3SSxZQUFZLG1CQXZCUixrQ0FBa0MsRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLDJCQUEyQixhQUV6TSxZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWMseUNBVWQsV0FBVztRQUNYLGNBQWMsa0RBR2QsWUFBWTtRQUNaLGVBQWUsYUFFUCxrQ0FBa0MsRUFBQyxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsMkJBQTJCO2tEQUV6TixZQUFZO2NBeEJ4QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0NBQWtDLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSx3QkFBd0IsRUFBRSwyQkFBMkIsQ0FBQztnQkFDNU0sT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixjQUFjO29CQUNkLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLGVBQWUsQ0FBQyxRQUFRLENBQUM7d0JBQ3ZCLE1BQU0sRUFBRTs0QkFDUixPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGlCQUFpQjs0QkFDN0IsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO3lCQUNuQjt3QkFDRCxPQUFPLEVBQUUsS0FBSztxQkFDakIsQ0FBQztvQkFDRSxXQUFXO29CQUNYLGNBQWM7b0JBQ2QsV0FBVyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO29CQUM5QyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3hDLFlBQVk7b0JBQ1osZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsa0NBQWtDLEVBQUMsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLDJCQUEyQixDQUFDO2FBQ3RPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYkJ1dHRvbk1vZHVsZSwgTmJDYXJkTW9kdWxlLCBOYkljb25Nb2R1bGUsIE5iVG9hc3RyTW9kdWxlLCBOYlRvZ2dsZU1vZHVsZSwgTmJUb29sdGlwTW9kdWxlfSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbk1lc3NhZ2VEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1tZXNzYWdlL2NvbmZpcm1hdGlvbk1lc3NhZ2VEaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLW1lc3NhZ2UvZGlhbG9nLW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm9vbGVhblBpcGVQaXBlIH0gZnJvbSAnLi9waXBlcy9ib29sZWFuLXBpcGUucGlwZSc7XHJcbmltcG9ydCB7IFRydW5jYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvdHJ1bmNhdGUucGlwZSc7XHJcbmltcG9ydCB7IFVzZXJFbmFibGluZ0NvbXBvbmVudCB9IGZyb20gJy4vdXNlci1lbmFibGluZy91c2VyLWVuYWJsaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGFibGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBVc2VyRW5hYmxlQXBpU2VydmljZSB9IGZyb20gJy4vdXNlci1lbmFibGluZy9hcGkvdXNlci1lbmFibGluZy1hcGknO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHtyZWR1Y2VyfSBmcm9tICcuL3N0b3JlL3NoYXJlZC5yZWR1Y2VyJ1xyXG5pbXBvcnQgeyBmZWF0dXJlU2hhcmVkIH0gZnJvbSAnLi9zdG9yZS9zaGFyZWQuc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBTaGFyZWRFZmZlY3QgfSBmcm9tICcuL3N0b3JlL3NoYXJlZC5lZmZlY3RzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcclxuaW1wb3J0IHsgSGVhZGVyQ3J1ZENvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLWNydWQvaGVhZGVyLWNydWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtDbG9zZUZvcm1BY3Rpb25Db21wb25lbnR9IGZyb20gJy4vYWN0aW9ucy1mb3JtLWNydWQvY2xvc2UtZm9ybS1hY3Rpb24vY2xvc2UtZm9ybS1hY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtEZWZhdWx0Rm9ybUFjdGlvbnNDb21wb25lbnR9IGZyb20gJy4vYWN0aW9ucy1mb3JtLWNydWQvZGVmYXVsdC1mb3JtLWFjdGlvbnMvZGVmYXVsdC1mb3JtLWFjdGlvbnMuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIdHRwTG9hZGVyRmFjdG9yeShodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHApO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NvbmZpcm1hdGlvbk1lc3NhZ2VEaWFsb2dDb21wb25lbnQsIERpYWxvZ01lc3NhZ2VDb21wb25lbnQsIEJvb2xlYW5QaXBlUGlwZSwgVHJ1bmNhdGVQaXBlLCBVc2VyRW5hYmxpbmdDb21wb25lbnQsIEhlYWRlckNydWRDb21wb25lbnQsIENsb3NlRm9ybUFjdGlvbkNvbXBvbmVudCwgRGVmYXVsdEZvcm1BY3Rpb25zQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOYkNhcmRNb2R1bGUsXHJcbiAgICBOYkJ1dHRvbk1vZHVsZSxcclxuICAgIE5iVG9hc3RyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JDaGlsZCh7XHJcbiAgICAgIGxvYWRlcjoge1xyXG4gICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IEh0dHBMb2FkZXJGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbSHR0cENsaWVudF1cclxuICAgIH0sXHJcbiAgICBpc29sYXRlOiBmYWxzZVxyXG59KSxcclxuICAgIFRhYmxlTW9kdWxlLFxyXG4gICAgTmJUb2dnbGVNb2R1bGUsXHJcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKGZlYXR1cmVTaGFyZWQsIHJlZHVjZXIpLFxyXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtTaGFyZWRFZmZlY3RdKSxcclxuICAgIE5iSWNvbk1vZHVsZSxcclxuICAgIE5iVG9vbHRpcE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0NvbmZpcm1hdGlvbk1lc3NhZ2VEaWFsb2dDb21wb25lbnQsRGlhbG9nTWVzc2FnZUNvbXBvbmVudCwgQm9vbGVhblBpcGVQaXBlLCBUcnVuY2F0ZVBpcGUsIFVzZXJFbmFibGluZ0NvbXBvbmVudCwgTmJJY29uTW9kdWxlLCBOYlRvb2x0aXBNb2R1bGUsIEhlYWRlckNydWRDb21wb25lbnQsIENsb3NlRm9ybUFjdGlvbkNvbXBvbmVudCwgRGVmYXVsdEZvcm1BY3Rpb25zQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFVzZXJFbmFibGVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6ICdlbnYnLCAvLyB5b3UgY2FuIGFsc28gdXNlIEluamVjdGlvblRva2VuXHJcbiAgICAgICAgICB1c2VWYWx1ZTogZW52aXJvbm1lbnRcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==