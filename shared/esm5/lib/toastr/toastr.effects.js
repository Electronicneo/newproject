import { Injectable } from '@angular/core';
import { ofType, createEffect } from '@ngrx/effects';
import { first, tap } from 'rxjs/operators';
import { defaultSuccessMessage, failureMessage, warningMessage } from './toastr.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "@nebular/theme";
import * as i3 from "@ngx-translate/core";
var ToastrEffects = /** @class */ (function () {
    function ToastrEffects(actions$, toastrService, translate) {
        var _this = this;
        this.actions$ = actions$;
        this.toastrService = toastrService;
        this.translate = translate;
        this.defaultSuccessMessage$ = createEffect(function () {
            return _this.actions$.pipe(ofType(defaultSuccessMessage), tap(function (action) {
                var title;
                _this.translate.get('toastr.operationSuccess').pipe(first()).subscribe(function (text) { return _this.toastrService.success('', text); });
            }));
        }, { dispatch: false });
        this.errorMessage$ = createEffect(function () {
            return _this.actions$.pipe(ofType(failureMessage), tap(function (action) {
                _this.translate.get([action.message, action.title]).pipe(first()).subscribe(function (text) { _this.toastrService.danger(text[Object.keys(text)[0]], text[Object.keys(text)[1]]); });
            }));
        }, { dispatch: false });
        this.warningMessage$ = createEffect(function () {
            return _this.actions$.pipe(ofType(warningMessage), tap(function (action) { _this.toastrService.warning('', action.message, { destroyByClick: true, duration: 0 }); }));
        }, { dispatch: false });
    }
    /** @nocollapse */ ToastrEffects.ɵfac = function ToastrEffects_Factory(t) { return new (t || ToastrEffects)(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i2.NbToastrService), i0.ɵɵinject(i3.TranslateService)); };
    /** @nocollapse */ ToastrEffects.ɵprov = i0.ɵɵdefineInjectable({ token: ToastrEffects, factory: ToastrEffects.ɵfac, providedIn: 'root' });
    return ToastrEffects;
}());
export { ToastrEffects };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToastrEffects, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Actions }, { type: i2.NbToastrService }, { type: i3.TranslateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdG9hc3RyL3RvYXN0ci5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFXLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQVN6RjtJQTBDRSx1QkFDVSxRQUFpQixFQUNqQixhQUE4QixFQUM5QixTQUEyQjtRQUhyQyxpQkFJSztRQUhLLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBckNyQywyQkFBc0IsR0FBRyxZQUFZLENBQUM7WUFDcEMsT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQzdCLEdBQUcsQ0FBQyxVQUFBLE1BQU07Z0JBQ1IsSUFBSSxLQUFLLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQXBDLENBQW9DLENBQUUsQ0FBQztZQUV4SCxDQUFDLENBQUMsQ0FFSDtRQVJELENBUUMsRUFDRCxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDcEIsQ0FBQztRQUVGLGtCQUFhLEdBQUcsWUFBWSxDQUFDO1lBQzNCLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFDdEIsR0FBRyxDQUFDLFVBQUEsTUFBTTtnQkFDUixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFDNUssQ0FBQyxDQUFDLENBRUg7UUFORCxDQU1DLEVBQ0QsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQ3BCLENBQUM7UUFHRixvQkFBZSxHQUFHLFlBQVksQ0FBQztZQUM3QixPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsY0FBYyxDQUFDLEVBQ3RCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBTSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FFekc7UUFKRCxDQUlDLEVBQ0QsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQ3BCLENBQUM7SUFNRSxDQUFDO2lHQXpDTSxhQUFhOzRFQUFiLGFBQWEsV0FBYixhQUFhLG1CQUhWLE1BQU07d0JBZHRCO0NBMkRDLEFBL0NELElBK0NDO1NBMUNZLGFBQWE7a0RBQWIsYUFBYTtjQUx6QixVQUFVO2VBQ1Q7Z0JBQ0UsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbnMsIG9mVHlwZSwgY3JlYXRlRWZmZWN0IH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IGZpcnN0LCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGRlZmF1bHRTdWNjZXNzTWVzc2FnZSwgZmFpbHVyZU1lc3NhZ2UsIHdhcm5pbmdNZXNzYWdlIH0gZnJvbSAnLi90b2FzdHIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IE5iVG9hc3RyU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuXHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZShcclxuICB7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxuICB9XHJcbilcclxuZXhwb3J0IGNsYXNzIFRvYXN0ckVmZmVjdHMge1xyXG5cclxuXHJcbiAgZGVmYXVsdFN1Y2Nlc3NNZXNzYWdlJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PlxyXG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKFxyXG4gICAgICBvZlR5cGUoZGVmYXVsdFN1Y2Nlc3NNZXNzYWdlKSxcclxuICAgICAgdGFwKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgbGV0IHRpdGxlO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldCgndG9hc3RyLm9wZXJhdGlvblN1Y2Nlc3MnKS5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSh0ZXh0ID0+ICB0aGlzLnRvYXN0clNlcnZpY2Uuc3VjY2VzcygnJywgdGV4dCkgKTtcclxuICAgICAgIFxyXG4gICAgICB9KSxcclxuXHJcbiAgICApLFxyXG4gICAgeyBkaXNwYXRjaDogZmFsc2UgfVxyXG4gICk7XHJcblxyXG4gIGVycm9yTWVzc2FnZSQgPSBjcmVhdGVFZmZlY3QoKCkgPT5cclxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcclxuICAgICAgb2ZUeXBlKGZhaWx1cmVNZXNzYWdlKSxcclxuICAgICAgdGFwKGFjdGlvbiA9PiB7IFxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChbYWN0aW9uLm1lc3NhZ2UsIGFjdGlvbi50aXRsZV0pLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKHRleHQgPT4ge3RoaXMudG9hc3RyU2VydmljZS5kYW5nZXIodGV4dFtPYmplY3Qua2V5cyh0ZXh0KVswXV0sIHRleHRbT2JqZWN0LmtleXModGV4dClbMV1dKSB9ICk7XHJcbiAgICAgIH0pLFxyXG5cclxuICAgICksXHJcbiAgICB7IGRpc3BhdGNoOiBmYWxzZSB9XHJcbiAgKTtcclxuXHJcblxyXG4gIHdhcm5pbmdNZXNzYWdlJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PlxyXG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKFxyXG4gICAgICBvZlR5cGUod2FybmluZ01lc3NhZ2UpLFxyXG4gICAgICB0YXAoYWN0aW9uID0+IHsgdGhpcy50b2FzdHJTZXJ2aWNlLndhcm5pbmcoJycsIGFjdGlvbi5tZXNzYWdlLCB7IGRlc3Ryb3lCeUNsaWNrOiB0cnVlLCBkdXJhdGlvbjogMCB9KSB9KSxcclxuXHJcbiAgICApLFxyXG4gICAgeyBkaXNwYXRjaDogZmFsc2UgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuICAgIHByaXZhdGUgdG9hc3RyU2VydmljZTogTmJUb2FzdHJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcclxuICApIHsgfVxyXG59XHJcbiJdfQ==