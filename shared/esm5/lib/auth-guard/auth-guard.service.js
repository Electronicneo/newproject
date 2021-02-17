import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/auth";
import * as i2 from "@angular/router";
import * as i3 from "../access-checker/access-checker.service";
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router, acs) {
        this.authService = authService;
        this.router = router;
        this.acs = acs;
        this.whiteList = ['/', 'unauthorized'];
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(tap(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['auth/login']);
            }
            else {
                _this.checkPermission(route, state);
                /*   if (Object.keys(this.acs.getPemissions()).length === 0) {
                    this.acs.setPermissionsAndUserInfo(this.acs.getACL())
        
                  }  */
            }
        }));
    };
    AuthGuardService.prototype.checkPermission = function (route, state) {
        if (route.url.length > 0 && !this.whiteList.includes(route.url[route.url.length - 1].path)) {
            var featureOrPageId = this.getFeatureOrPageId(state);
            if (this.isComposerPage(state)) {
                if (!this.acs.isPageRouteGranted(featureOrPageId))
                    this.router.navigate(['auth/unauthorized']);
            }
            else if (!this.acs.isFeatureRouteGranted(featureOrPageId)) {
                this.router.navigate(['auth/unauthorized']);
            }
        }
    };
    AuthGuardService.prototype.isComposerPage = function (state) {
        if (state.url.indexOf('view') > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardService.prototype.getFeatureOrPageId = function (state) {
        var splitArray = state.url.split('/');
        return splitArray[splitArray.length - 1];
    };
    AuthGuardService.prototype.checkUrlContainsString = function (filter) {
    };
    /** @nocollapse */ AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(i0.ɵɵinject(i1.NbAuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.AccessCheckerService)); };
    /** @nocollapse */ AuthGuardService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
    return AuthGuardService;
}());
export { AuthGuardService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NbAuthService }, { type: i2.Router }, { type: i3.AccessCheckerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2F1dGgtZ3VhcmQvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU1yQztJQU9FLDBCQUFvQixXQUEwQixFQUFVLE1BQWMsRUFBVSxHQUF5QjtRQUFyRixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFzQjtRQUZoRyxjQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFa0UsQ0FBQztJQUU5RyxzQ0FBVyxHQUFYLFVBQVksS0FBNkIsRUFBRSxLQUEwQjtRQUFyRSxpQkF3QkM7UUF0QkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTthQUN0QyxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUEsYUFBYTtZQUVmLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzthQUN0QztpQkFDRztnQkFNSCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDckM7Ozt1QkFHTzthQUVOO1FBQ0QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFFTywwQ0FBZSxHQUF2QixVQUF3QixLQUE2QixFQUFFLEtBQTBCO1FBQy9FLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUUxRixJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFHO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUM7b0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2FBQzdDO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzthQUM3QztTQUNGO0lBQ0gsQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXVCLEtBQTBCO1FBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7SUFFTyw2Q0FBa0IsR0FBMUIsVUFBMkIsS0FBMEI7UUFFbkQsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsT0FBTyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8saURBQXNCLEdBQTlCLFVBQStCLE1BQWM7SUFHN0MsQ0FBQzt1R0EvRFUsZ0JBQWdCOytFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07MkJBWHBCO0NBOEVDLEFBcEVELElBb0VDO1NBakVZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5iQXV0aFNlcnZpY2UgfSBmcm9tICdAbmVidWxhci9hdXRoJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFjY2Vzc0NoZWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vYWNjZXNzLWNoZWNrZXIvYWNjZXNzLWNoZWNrZXIuc2VydmljZSc7XHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICByZWFkb25seSB3aGl0ZUxpc3QgPSBbJy8nLCAndW5hdXRob3JpemVkJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IE5iQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYWNzOiBBY2Nlc3NDaGVja2VyU2VydmljZSkgeyB9XHJcblxyXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKGF1dGhlbnRpY2F0ZWQgPT4ge1xyXG5cclxuICAgICAgICAgIGlmICghYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2F1dGgvbG9naW4nXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgdGhpcy5jaGVja1Blcm1pc3Npb24ocm91dGUsc3RhdGUpO1xyXG4gICAgICAgIC8qICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuYWNzLmdldFBlbWlzc2lvbnMoKSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNzLnNldFBlcm1pc3Npb25zQW5kVXNlckluZm8odGhpcy5hY3MuZ2V0QUNMKCkpXHJcblxyXG4gICAgICAgICAgfSAgKi9cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1Blcm1pc3Npb24ocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XHJcbiAgICBpZiAocm91dGUudXJsLmxlbmd0aCA+IDAgJiYgIXRoaXMud2hpdGVMaXN0LmluY2x1ZGVzKHJvdXRlLnVybFtyb3V0ZS51cmwubGVuZ3RoIC0gMV0ucGF0aCkpIHtcclxuXHJcbiAgICAgIGxldCBmZWF0dXJlT3JQYWdlSWQgPSB0aGlzLmdldEZlYXR1cmVPclBhZ2VJZChzdGF0ZSk7XHJcbiAgICAgXHJcbiAgICAgIGlmICh0aGlzLmlzQ29tcG9zZXJQYWdlKHN0YXRlKSApIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWNzLmlzUGFnZVJvdXRlR3JhbnRlZChmZWF0dXJlT3JQYWdlSWQpKVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYXV0aC91bmF1dGhvcml6ZWQnXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYWNzLmlzRmVhdHVyZVJvdXRlR3JhbnRlZChmZWF0dXJlT3JQYWdlSWQpKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhdXRoL3VuYXV0aG9yaXplZCddKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0NvbXBvc2VyUGFnZShzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xyXG4gICAgaWYgKHN0YXRlLnVybC5pbmRleE9mKCd2aWV3JykgPiAtMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGZWF0dXJlT3JQYWdlSWQoc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcclxuXHJcbiAgICBsZXQgc3BsaXRBcnJheSA9IHN0YXRlLnVybC5zcGxpdCgnLycpO1xyXG4gICAgcmV0dXJuIHNwbGl0QXJyYXlbc3BsaXRBcnJheS5sZW5ndGggLSAxXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tVcmxDb250YWluc1N0cmluZyhmaWx0ZXI6IHN0cmluZykge1xyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIl19