import { Injectable, } from '@angular/core';
import { createEffect, ofType, } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { setLocaleInfo } from './shared.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "@ngx-translate/core";
import * as i3 from "../locale/locale.service";
var SharedEffect = /** @class */ (function () {
    function SharedEffect(actions$, translate, localeService) {
        var _this = this;
        this.actions$ = actions$;
        this.translate = translate;
        this.localeService = localeService;
        this.setLocalInfo$ = createEffect(function () { return _this.actions$.pipe(ofType(setLocaleInfo), tap(function (action) {
            _this.translate.use(action.languageCode);
            _this.localeService.registerCulture(action.languageCode);
        })); }, { dispatch: false });
    }
    /** @nocollapse */ SharedEffect.ɵfac = function SharedEffect_Factory(t) { return new (t || SharedEffect)(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i2.TranslateService), i0.ɵɵinject(i3.LocaleService)); };
    /** @nocollapse */ SharedEffect.ɵprov = i0.ɵɵdefineInjectable({ token: SharedEffect, factory: SharedEffect.ɵfac });
    return SharedEffect;
}());
export { SharedEffect };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedEffect, [{
        type: Injectable
    }], function () { return [{ type: i1.Actions }, { type: i2.TranslateService }, { type: i3.LocaleService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUvc2hhcmVkLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsR0FBSSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQVcsWUFBWSxFQUFFLE1BQU0sR0FBRyxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQU1qRDtJQUdFLHNCQUFvQixRQUFpQixFQUFXLFNBQTJCLEVBQVUsYUFBNkI7UUFBbEgsaUJBRUM7UUFGbUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFXLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBSWpILGtCQUFhLEdBQUcsWUFBWSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUNyQixHQUFHLENBQUUsVUFBQSxNQUFNO1lBQ1QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FDSCxFQU5tQyxDQU1uQyxFQUNELEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFUckIsQ0FBQzsrRkFKVSxZQUFZOzJFQUFaLFlBQVksV0FBWixZQUFZO3VCQVp6QjtDQTRCQyxBQWpCRCxJQWlCQztTQWhCWSxZQUFZO2tEQUFaLFlBQVk7Y0FEeEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSwgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBzZXRMb2NhbGVJbmZvIH0gZnJvbSAnLi9zaGFyZWQuYWN0aW9ucyc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkRWZmZWN0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyAsIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIGxvY2FsZVNlcnZpY2UgOiBMb2NhbGVTZXJ2aWNlICApIHtcclxuXHJcbiAgfVxyXG5cclxuICAgc2V0TG9jYWxJbmZvJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcbiAgICBvZlR5cGUoc2V0TG9jYWxlSW5mbyksXHJcbiAgICB0YXAoIGFjdGlvbiA9PiB7XHJcbiAgICAgIHRoaXMudHJhbnNsYXRlLnVzZShhY3Rpb24ubGFuZ3VhZ2VDb2RlKTsgICAgXHJcbiAgICAgIHRoaXMubG9jYWxlU2VydmljZS5yZWdpc3RlckN1bHR1cmUoYWN0aW9uLmxhbmd1YWdlQ29kZSk7XHJcbiAgICB9KSxcclxuICApLFxyXG4gIHsgZGlzcGF0Y2g6IGZhbHNlIH0pOyBcclxuXHJcblxyXG59XHJcbiJdfQ==