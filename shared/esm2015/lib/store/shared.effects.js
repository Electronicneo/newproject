import { Injectable, } from '@angular/core';
import { createEffect, ofType, } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { setLocaleInfo } from './shared.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "@ngx-translate/core";
import * as i3 from "../locale/locale.service";
export class SharedEffect {
    constructor(actions$, translate, localeService) {
        this.actions$ = actions$;
        this.translate = translate;
        this.localeService = localeService;
        this.setLocalInfo$ = createEffect(() => this.actions$.pipe(ofType(setLocaleInfo), tap(action => {
            this.translate.use(action.languageCode);
            this.localeService.registerCulture(action.languageCode);
        })), { dispatch: false });
    }
}
/** @nocollapse */ SharedEffect.ɵfac = function SharedEffect_Factory(t) { return new (t || SharedEffect)(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i2.TranslateService), i0.ɵɵinject(i3.LocaleService)); };
/** @nocollapse */ SharedEffect.ɵprov = i0.ɵɵdefineInjectable({ token: SharedEffect, factory: SharedEffect.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedEffect, [{
        type: Injectable
    }], function () { return [{ type: i1.Actions }, { type: i2.TranslateService }, { type: i3.LocaleService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUvc2hhcmVkLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsR0FBSSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQVcsWUFBWSxFQUFFLE1BQU0sR0FBRyxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQU9qRCxNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUFvQixRQUFpQixFQUFXLFNBQTJCLEVBQVUsYUFBNkI7UUFBOUYsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFXLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBSWpILGtCQUFhLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRCxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQ3JCLEdBQUcsQ0FBRSxNQUFNLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQ0gsRUFDRCxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBVHJCLENBQUM7OzJGQUpVLFlBQVk7dUVBQVosWUFBWSxXQUFaLFlBQVk7a0RBQVosWUFBWTtjQUR4QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlLCB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IHNldExvY2FsZUluZm8gfSBmcm9tICcuL3NoYXJlZC5hY3Rpb25zJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRFZmZlY3Qge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zICwgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgbG9jYWxlU2VydmljZSA6IExvY2FsZVNlcnZpY2UgICkge1xyXG5cclxuICB9XHJcblxyXG4gICBzZXRMb2NhbEluZm8kID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShcclxuICAgIG9mVHlwZShzZXRMb2NhbGVJbmZvKSxcclxuICAgIHRhcCggYWN0aW9uID0+IHtcclxuICAgICAgdGhpcy50cmFuc2xhdGUudXNlKGFjdGlvbi5sYW5ndWFnZUNvZGUpOyAgICBcclxuICAgICAgdGhpcy5sb2NhbGVTZXJ2aWNlLnJlZ2lzdGVyQ3VsdHVyZShhY3Rpb24ubGFuZ3VhZ2VDb2RlKTtcclxuICAgIH0pLFxyXG4gICksXHJcbiAgeyBkaXNwYXRjaDogZmFsc2UgfSk7IFxyXG5cclxuXHJcbn1cclxuIl19