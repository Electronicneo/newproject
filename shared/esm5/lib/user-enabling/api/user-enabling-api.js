import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var UserEnableApiService = /** @class */ (function () {
    function UserEnableApiService(httpClient, environment) {
        this.httpClient = httpClient;
        this.environment = environment;
        this.COMMON_URL = this.environment.apiTarget + "/rs/public/";
    }
    UserEnableApiService.prototype.getEnabling = function (ownerUuid) {
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.post(this.COMMON_URL + "getAbilitationsWSR", JSON.stringify({ keyUuid: ownerUuid }), { headers: headers }).pipe(catchError(function (error) {
            return throwError('getEnablings Something went wrong! ' + error);
        }));
    };
    /** @nocollapse */ UserEnableApiService.ɵfac = function UserEnableApiService_Factory(t) { return new (t || UserEnableApiService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('env')); };
    /** @nocollapse */ UserEnableApiService.ɵprov = i0.ɵɵdefineInjectable({ token: UserEnableApiService, factory: UserEnableApiService.ɵfac, providedIn: 'root' });
    return UserEnableApiService;
}());
export { UserEnableApiService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserEnableApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['env']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lbmFibGluZy1hcGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdXNlci1lbmFibGluZy9hcGkvdXNlci1lbmFibGluZy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBTyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR2pEO0lBT0UsOEJBQW9CLFVBQXNCLEVBQTJCLFdBQVc7UUFBNUQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUEyQixnQkFBVyxHQUFYLFdBQVcsQ0FBQTtRQUR0RSxlQUFVLEdBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLGdCQUFhLENBQUM7SUFDa0IsQ0FBQztJQUlyRiwwQ0FBVyxHQUFYLFVBQVksU0FBaUI7UUFDM0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDekUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBcUIsSUFBSSxDQUFDLFVBQVUsdUJBQW9CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUNqSixVQUFVLENBQUMsVUFBQSxLQUFLO1lBQ2YsT0FBTyxVQUFVLENBQUMscUNBQXFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7K0dBZFUsb0JBQW9CLDBDQUd1QixLQUFLO21GQUhoRCxvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUhqQixNQUFNOytCQVJ0QjtDQTZCQyxBQXRCRCxJQXNCQztTQWxCWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUpoQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7O3NCQUtnRCxNQUFNO3VCQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElVc2VyRW5hYmxpbmcgfSBmcm9tICcuLi9tb2RlbC9JVXNlckVuYWJsaW5nJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJFbmFibGVBcGlTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIENPTU1PTl9VUkwgPSBgJHt0aGlzLmVudmlyb25tZW50LmFwaVRhcmdldH0vcnMvcHVibGljL2A7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50ICwgIEBJbmplY3QoJ2VudicpIHByaXZhdGUgZW52aXJvbm1lbnQpIHsgfVxyXG5cclxuXHJcblxyXG4gIGdldEVuYWJsaW5nKG93bmVyVXVpZDogc3RyaW5nKTpPYnNlcnZhYmxlPElVc2VyRW5hYmxpbmdbXT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8SVVzZXJFbmFibGluZ1tdPihgJHt0aGlzLkNPTU1PTl9VUkx9Z2V0QWJpbGl0YXRpb25zV1NSYCwgSlNPTi5zdHJpbmdpZnkoe2tleVV1aWQ6IG93bmVyVXVpZH0pLCB7aGVhZGVyczogaGVhZGVyc30pLnBpcGUoXHJcbiAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignZ2V0RW5hYmxpbmdzIFNvbWV0aGluZyB3ZW50IHdyb25nISAnICsgZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuXHJcbn0iXX0=