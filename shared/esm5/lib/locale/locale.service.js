import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeIt from '@angular/common/locales/it';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import * as i0 from "@angular/core";
import * as i1 from "../access-checker/access-checker.service";
var LocaleService = /** @class */ (function () {
    function LocaleService(acs) {
        this.acs = acs;
    }
    Object.defineProperty(LocaleService.prototype, "locale", {
        get: function () {
            this.registerCulture(this.acs.getLanguageCode());
            return this.acs.getLanguageCode();
        },
        set: function (value) {
            this._locale = value;
        },
        enumerable: true,
        configurable: true
    });
    LocaleService.prototype.registerCulture = function (culture) {
        if (!culture) {
            return;
        }
        this.locale = culture;
        debugger;
        switch (culture) {
            case 'en': {
                registerLocaleData(localeEn);
                break;
            }
            case 'it': {
                registerLocaleData(localeIt);
                break;
            }
            case 'fr': {
                registerLocaleData(localeFr);
                break;
            }
            case 'de': {
                registerLocaleData(localeDe);
                break;
            }
        }
    };
    /** @nocollapse */ LocaleService.ɵfac = function LocaleService_Factory(t) { return new (t || LocaleService)(i0.ɵɵinject(i1.AccessCheckerService)); };
    /** @nocollapse */ LocaleService.ɵprov = i0.ɵɵdefineInjectable({ token: LocaleService, factory: LocaleService.ɵfac, providedIn: 'root' });
    return LocaleService;
}());
export { LocaleService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocaleService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.AccessCheckerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvbG9jYWxlL2xvY2FsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxRQUFRLE1BQU0sNEJBQTRCLENBQUM7QUFDbEQsT0FBTyxRQUFRLE1BQU0sNEJBQTRCLENBQUM7QUFDbEQsT0FBTyxRQUFRLE1BQU0sNEJBQTRCLENBQUM7QUFDbEQsT0FBTyxRQUFRLE1BQU0sNEJBQTRCLENBQUM7OztBQUdsRDtJQUdJLHVCQUFvQixHQUEwQjtRQUExQixRQUFHLEdBQUgsR0FBRyxDQUF1QjtJQUc5QyxDQUFDO0lBS0Qsc0JBQUksaUNBQU07YUFHVjtZQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFBO1lBQ2hELE9BQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QyxDQUFDO2FBTkQsVUFBVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQsdUNBQWUsR0FBZixVQUFnQixPQUFlO1FBQzNCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUM5QixRQUFRLENBQUM7UUFDRCxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ1Asa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdCLE1BQU07YUFDVDtZQUNELEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ1Asa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdCLE1BQU07YUFDVDtZQUNELEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ1Asa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdCLE1BQU07YUFDVDtZQUNELEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ1Asa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdCLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQztpR0ExQ1EsYUFBYTs0RUFBYixhQUFhLFdBQWIsYUFBYSxtQkFEQSxNQUFNO3dCQVJoQztDQW9EQyxBQTVDRCxJQTRDQztTQTNDWSxhQUFhO2tEQUFiLGFBQWE7Y0FEekIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IGxvY2FsZUVuIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2VuJztcclxuaW1wb3J0IGxvY2FsZUl0IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2l0JztcclxuaW1wb3J0IGxvY2FsZUZyIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2ZyJztcclxuaW1wb3J0IGxvY2FsZURlIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2RlJztcclxuaW1wb3J0IHsgQWNjZXNzQ2hlY2tlclNlcnZpY2UgfSBmcm9tICcuLi9hY2Nlc3MtY2hlY2tlci9hY2Nlc3MtY2hlY2tlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbGVTZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNzIDogQWNjZXNzQ2hlY2tlclNlcnZpY2Upe1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nO1xyXG5cclxuICAgIHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGxvY2FsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDdWx0dXJlKHRoaXMuYWNzLmdldExhbmd1YWdlQ29kZSgpKVxyXG4gICAgICAgIHJldHVybiAgdGhpcy5hY3MuZ2V0TGFuZ3VhZ2VDb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDdWx0dXJlKGN1bHR1cmU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghY3VsdHVyZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9jYWxlID0gY3VsdHVyZTtcclxuZGVidWdnZXI7XHJcbiAgICAgICAgc3dpdGNoIChjdWx0dXJlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VuJzoge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZUVuKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2l0Jzoge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZUl0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZyJzoge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZUZyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlJzoge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZURlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19