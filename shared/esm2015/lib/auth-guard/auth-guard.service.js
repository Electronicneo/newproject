import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/auth";
import * as i2 from "@angular/router";
import * as i3 from "../access-checker/access-checker.service";
export class AuthGuardService {
    constructor(authService, router, acs) {
        this.authService = authService;
        this.router = router;
        this.acs = acs;
        this.whiteList = ['/', 'unauthorized'];
    }
    canActivate(route, state) {
        return this.authService.isAuthenticated()
            .pipe(tap(authenticated => {
            if (!authenticated) {
                this.router.navigate(['auth/login']);
            }
            else {
                this.checkPermission(route, state);
                /*   if (Object.keys(this.acs.getPemissions()).length === 0) {
                    this.acs.setPermissionsAndUserInfo(this.acs.getACL())
        
                  }  */
            }
        }));
    }
    checkPermission(route, state) {
        if (route.url.length > 0 && !this.whiteList.includes(route.url[route.url.length - 1].path)) {
            let featureOrPageId = this.getFeatureOrPageId(state);
            if (this.isComposerPage(state)) {
                if (!this.acs.isPageRouteGranted(featureOrPageId))
                    this.router.navigate(['auth/unauthorized']);
            }
            else if (!this.acs.isFeatureRouteGranted(featureOrPageId)) {
                this.router.navigate(['auth/unauthorized']);
            }
        }
    }
    isComposerPage(state) {
        if (state.url.indexOf('view') > -1) {
            return true;
        }
        else {
            return false;
        }
    }
    getFeatureOrPageId(state) {
        let splitArray = state.url.split('/');
        return splitArray[splitArray.length - 1];
    }
    checkUrlContainsString(filter) {
    }
}
/** @nocollapse */ AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(i0.ɵɵinject(i1.NbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.AccessCheckerService)); };
/** @nocollapse */ AuthGuardService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NbAuthService }, { type: i2.Router }, { type: i3.AccessCheckerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2F1dGgtZ3VhcmQvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVNyQyxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCLFlBQW9CLFdBQTBCLEVBQVUsTUFBYyxFQUFVLEdBQXlCO1FBQXJGLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQXNCO1FBRmhHLGNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVrRSxDQUFDO0lBRTlHLFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBRW5FLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7YUFDdEMsSUFBSSxDQUNILEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUVsQixJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7YUFDdEM7aUJBQ0c7Z0JBTUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDOzs7dUJBR087YUFFTjtRQUNELENBQUMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDO0lBRU8sZUFBZSxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDL0UsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRTFGLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUc7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQztvQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7YUFDN0M7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQTBCO1FBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxLQUEwQjtRQUVuRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxPQUFPLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxNQUFjO0lBRzdDLENBQUM7O21HQS9EVSxnQkFBZ0I7MkVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmYsTUFBTTtrREFFUCxnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmJBdXRoU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQWNjZXNzQ2hlY2tlclNlcnZpY2UgfSBmcm9tICcuLi9hY2Nlc3MtY2hlY2tlci9hY2Nlc3MtY2hlY2tlci5zZXJ2aWNlJztcclxuXHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gIHJlYWRvbmx5IHdoaXRlTGlzdCA9IFsnLycsICd1bmF1dGhvcml6ZWQnXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogTmJBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhY3M6IEFjY2Vzc0NoZWNrZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoYXV0aGVudGljYXRlZCA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKCFhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYXV0aC9sb2dpbiddKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICB0aGlzLmNoZWNrUGVybWlzc2lvbihyb3V0ZSxzdGF0ZSk7XHJcbiAgICAgICAgLyogICBpZiAoT2JqZWN0LmtleXModGhpcy5hY3MuZ2V0UGVtaXNzaW9ucygpKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Muc2V0UGVybWlzc2lvbnNBbmRVc2VySW5mbyh0aGlzLmFjcy5nZXRBQ0woKSlcclxuXHJcbiAgICAgICAgICB9ICAqL1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrUGVybWlzc2lvbihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcclxuICAgIGlmIChyb3V0ZS51cmwubGVuZ3RoID4gMCAmJiAhdGhpcy53aGl0ZUxpc3QuaW5jbHVkZXMocm91dGUudXJsW3JvdXRlLnVybC5sZW5ndGggLSAxXS5wYXRoKSkge1xyXG5cclxuICAgICAgbGV0IGZlYXR1cmVPclBhZ2VJZCA9IHRoaXMuZ2V0RmVhdHVyZU9yUGFnZUlkKHN0YXRlKTtcclxuICAgICBcclxuICAgICAgaWYgKHRoaXMuaXNDb21wb3NlclBhZ2Uoc3RhdGUpICkge1xyXG4gICAgICAgIGlmICghdGhpcy5hY3MuaXNQYWdlUm91dGVHcmFudGVkKGZlYXR1cmVPclBhZ2VJZCkpXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhdXRoL3VuYXV0aG9yaXplZCddKTtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5hY3MuaXNGZWF0dXJlUm91dGVHcmFudGVkKGZlYXR1cmVPclBhZ2VJZCkpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2F1dGgvdW5hdXRob3JpemVkJ10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQ29tcG9zZXJQYWdlKHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XHJcbiAgICBpZiAoc3RhdGUudXJsLmluZGV4T2YoJ3ZpZXcnKSA+IC0xKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZlYXR1cmVPclBhZ2VJZChzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xyXG5cclxuICAgIGxldCBzcGxpdEFycmF5ID0gc3RhdGUudXJsLnNwbGl0KCcvJyk7XHJcbiAgICByZXR1cm4gc3BsaXRBcnJheVtzcGxpdEFycmF5Lmxlbmd0aCAtIDFdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1VybENvbnRhaW5zU3RyaW5nKGZpbHRlcjogc3RyaW5nKSB7XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=