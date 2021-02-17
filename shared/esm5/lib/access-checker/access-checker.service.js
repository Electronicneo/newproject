import { Injectable } from '@angular/core';
import { localStorangeACLKey, allowed } from './access-checker-key';
import * as jsonQuery from 'json-query';
import { selectWorkspace, selectPage, } from '../store/shared.selectors';
import { setPage, setWorkSpace, setLocaleInfo } from '../store/shared.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var AccessCheckerService = /** @class */ (function () {
    function AccessCheckerService(store$) {
        var _this = this;
        this.store$ = store$;
        this.workspaceSelected = null;
        this.pageId = null;
        this.workspaceSelected$ = this.store$.select(selectWorkspace);
        this.page$ = this.store$.select(selectPage);
        this.workspaceSelected$.subscribe(function (ws) { return _this.workspaceSelected = ws; });
        this.page$.subscribe(function (page) { return _this.pageId = page; });
    }
    AccessCheckerService.prototype.clearACLLocalStorage = function () {
        localStorage.removeItem(localStorangeACLKey);
    };
    AccessCheckerService.prototype.setWorkSpaceSelected = function (workspaceId) {
        this.store$.dispatch(setWorkSpace({ workspaceID: workspaceId }));
    };
    AccessCheckerService.prototype.getWorkSpaceSelected = function () {
        return this.workspaceSelected;
    };
    AccessCheckerService.prototype.setPageSelected = function (pageId) {
        this.store$.dispatch(setPage({ pageID: pageId }));
    };
    AccessCheckerService.prototype.setLocaleCode = function (languageCode, countryCode, timezoneCode) {
        this.store$.dispatch(setLocaleInfo({ languageCode: languageCode, countryCode: countryCode, timezoneCode: timezoneCode }));
    };
    AccessCheckerService.prototype.isFeatureRouteGranted = function (featureLabel) {
        var result;
        var serviceList = [];
        serviceList = this.getPemissions()[this.workspaceSelected + "_PAGES"];
        if (serviceList && serviceList.length > 0 && (this.checkSpecialSelect(serviceList) || serviceList.filter(function (service) { return service.label.toLowerCase() == featureLabel.toLowerCase(); }).length > 0)) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    AccessCheckerService.prototype.isPageRouteGranted = function (pageId) {
        var result;
        var serviceList = [];
        serviceList = this.getPemissions()[this.workspaceSelected + "_PAGESCOMP"];
        if (serviceList && serviceList.length > 0 && serviceList.filter(function (service) { return service.keyUuid == pageId; }).length > 0) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    AccessCheckerService.prototype.isWidgetGrantedByLabel = function (serviceLabel, pageId, widgetId) {
        var result;
        var serviceList = [];
        serviceList = this.getPemissions()[this.workspaceSelected + "_" + pageId + "_" + widgetId + "_SERVICESWIDGET"];
        if (serviceList && serviceList.length > 0 && (this.checkSpecialSelect(serviceList) || serviceList.filter(function (service) { return service.label == serviceLabel; }).length > 0)) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    AccessCheckerService.prototype.isPageGrantedByLabel = function (serviceLabel, pageId) {
        var result;
        var serviceList = [];
        serviceList = this.getPemissions()[this.workspaceSelected + "_" + pageId + "_SERVICESPAGESCOMP"];
        if (serviceList && serviceList.length > 0 && (this.checkSpecialSelect(serviceList) || serviceList.filter(function (service) { return service.label == serviceLabel; }).length > 0)) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    AccessCheckerService.prototype.isWidgetGrantedById = function (serviceId, pageId, widgetId) {
        var result;
        var serviceList = [];
        serviceList = this.getPemissions()[this.workspaceSelected + "_" + pageId + "_" + widgetId + "_SERVICESWIDGET"];
        if (serviceList && serviceList.length > 0 && (this.checkSpecialSelect(serviceList) || serviceList.filter(function (service) { return service.keyUuid == serviceId; }).length > 0)) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    AccessCheckerService.prototype.isFeatureGrantedById = function (serviceId) {
        if (!this.workspaceSelected) {
            return false;
        }
        if (this.checkSpecialSelect(this.getPemissions()[this.workspaceSelected + "_PAGES"])) {
            return true;
        }
        var result;
        var serviceList = [];
        serviceList = this.getPemissions()[this.workspaceSelected + "_" + this.pageId + "_SERVICESPAGES"];
        if (serviceList && serviceList.length > 0 && (this.checkSpecialSelect(serviceList) || serviceList.filter(function (service) { return service.keyUuid == serviceId; }).length > 0)) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    AccessCheckerService.prototype.isFeatureGrantedByLabel = function (serviceLabel) {
        if (!this.workspaceSelected) {
            return false;
        }
        if (this.checkSpecialSelect(this.getPemissions()[this.workspaceSelected + "_PAGES"])) {
            return true;
        }
        var result;
        var serviceList = [];
        serviceList = this.getPemissions()[this.workspaceSelected + "_" + this.pageId + "_SERVICESPAGES"];
        if (serviceList && serviceList.length > 0 && (this.checkSpecialSelect(serviceList) || serviceList.filter(function (service) { return service.label == serviceLabel; }).length > 0)) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    AccessCheckerService.prototype.isPageGrantedById = function (serviceId) {
        var result;
        var serviceList = [];
        serviceList = this.getPemissions()[this.workspaceSelected + "_" + this.pageId + "_SERVICESPAGESCOMP"];
        if (serviceList && serviceList.length > 0 && (this.checkSpecialSelect(serviceList) || serviceList.filter(function (service) { return service.keyUuid == serviceId; }).length > 0)) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    AccessCheckerService.prototype.generateFeatureSecurityParamBody = function (resourceId) {
        var result = {};
        result['context'] = {};
        var userContextMetadata = result['context']['userContextMetadata'] = {};
        userContextMetadata['username'] = this.getUserName();
        userContextMetadata['authPermissionPath'] = this.workspaceSelected + "_" + this.pageId + "_SERVICESPAGES";
        userContextMetadata['resourceId'] = resourceId;
        userContextMetadata['parentType'] = 'PAGES';
        return result;
    };
    AccessCheckerService.prototype.generateFeatureSecurityParamBodyByLabel = function (resourceLabel) {
        var result = {};
        result['context'] = {};
        var userContextMetadata = result['context']['userContextMetadata'] = {};
        var serviceList = this.getPemissions()[this.workspaceSelected + "_" + this.pageId + "_SERVICESPAGES"];
        var serviceItem = serviceList != null ? serviceList.find(function (service) { return service.label == resourceLabel; }) : null;
        userContextMetadata['username'] = this.getUserName();
        userContextMetadata['authPermissionPath'] = this.workspaceSelected + "_" + this.pageId + "_SERVICESPAGES";
        userContextMetadata['resourceId'] = serviceItem != null ? serviceItem.keyUuid : '';
        userContextMetadata['parentType'] = 'PAGES';
        return result;
    };
    AccessCheckerService.prototype.generateComposerPageSecurityParamBody = function (resourceId) {
        var result = {};
        result['context'] = {};
        var userContextMetadata = result['context']['userContextMetadata'] = {};
        userContextMetadata['username'] = this.getUserName();
        userContextMetadata['authPermissionPath'] = this.workspaceSelected + "_" + this.pageId + "SERVICESPAGESCOMP";
        userContextMetadata['resourceId'] = resourceId;
        userContextMetadata['parentType'] = 'PAGESCOMP';
        return result;
    };
    AccessCheckerService.prototype.getAuthPermissionPath = function () {
        return this.workspaceSelected + "_" + this.pageId;
    };
    AccessCheckerService.prototype.getWorkSpace = function () {
        return this.workspaceSelected;
    };
    AccessCheckerService.prototype.getWorkPage = function () {
        return this.pageId;
    };
    AccessCheckerService.prototype.getPemissions = function () {
        return this.getACL().authPermissions;
    };
    AccessCheckerService.prototype.getWorkSpaces = function () {
        return this.getPemissions().WORKSPACE;
    };
    AccessCheckerService.prototype.getFullName = function () {
        return this.getACL().fullName;
    };
    // sta fuori dal contesto
    AccessCheckerService.prototype.getRoleName = function () {
        return this.getACL().nomeRuolo;
    };
    AccessCheckerService.prototype.getUserName = function () {
        return this.getACL().userName;
    };
    AccessCheckerService.prototype.getNodeBreadcrumb = function () {
        return this.getACL().nodeBreadcrumb;
    };
    AccessCheckerService.prototype.getRootName = function () {
        return this.getACL().rootName;
    };
    AccessCheckerService.prototype.getUserUUID = function () {
        return this.getACL().userUuid;
    };
    AccessCheckerService.prototype.getKeyOid = function () {
        return this.getACL().keyOid;
    };
    AccessCheckerService.prototype.getEnablingUuid = function () {
        return this.getACL().enablingUuid;
    };
    AccessCheckerService.prototype.getLanguageCode = function () {
        return this.getACL().languageCode;
    };
    AccessCheckerService.prototype.getCountryCode = function () {
        return this.getACL().countryCode;
    };
    AccessCheckerService.prototype.getTimeZoneCode = function () {
        return this.getACL().timeZoneCode;
    };
    AccessCheckerService.prototype.getACL = function () {
        return JSON.parse(localStorage.getItem(localStorangeACLKey));
    };
    AccessCheckerService.prototype.setACLLocalStorage = function (revoContext) {
        localStorage.setItem(localStorangeACLKey, JSON.stringify(this.createUserInfo(revoContext)));
    };
    AccessCheckerService.prototype.createUserInfo = function (revoContext) {
        var userContextMetadata = revoContext.context.userContextMetadata;
        var context = revoContext.context;
        var permissionsAndUserInfo = {
            authPermissions: JSON.parse(userContextMetadata.authPermissions),
            keyOid: userContextMetadata.keyOid,
            rootName: userContextMetadata.rootName,
            userUuid: userContextMetadata.userUuid,
            fullName: userContextMetadata.fullName,
            userName: context.userName,
            nomeRuolo: context.nomeRuolo,
            nodeBreadcrumb: userContextMetadata.nodeBreadcrumb,
            enablingUuid: userContextMetadata.enablingUuid,
            countryCode: userContextMetadata.countryCode,
            languageCode: userContextMetadata.languageCode,
            timeZoneCode: userContextMetadata.timeZoneCode
        };
        return permissionsAndUserInfo;
    };
    /*   public setPermissionsAndUserInfo(userInfo: IUserInfo) {
        this.store$.dispatch(setPermissionsAndUserInfo({ userInfo: userInfo }));
      } */
    AccessCheckerService.prototype.setNewToken = function (token) {
        var tokenInfo = {
            createdAt: new Date().getTime(),
            name: "nb:auth:simple:token",
            ownerStrategyName: "username",
            value: token,
        };
        localStorage.setItem('auth_app_token', JSON.stringify(tokenInfo));
    };
    AccessCheckerService.prototype.getFeatureIdByFeatureLabel = function (featureLabel) {
        var result = jsonQuery.default(this.workspaceSelected + "_PAGES[label=" + featureLabel + "].keyUuid", {
            data: this.getPemissions()
        });
        return result.value;
    };
    AccessCheckerService.prototype.checkSpecialSelect = function (serviceList) {
        return allowed.includes(serviceList[0].label);
    };
    /** @nocollapse */ AccessCheckerService.ɵfac = function AccessCheckerService_Factory(t) { return new (t || AccessCheckerService)(i0.ɵɵinject(i1.Store)); };
    /** @nocollapse */ AccessCheckerService.ɵprov = i0.ɵɵdefineInjectable({ token: AccessCheckerService, factory: AccessCheckerService.ɵfac, providedIn: 'root' });
    return AccessCheckerService;
}());
export { AccessCheckerService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AccessCheckerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Store }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLWNoZWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9hY2Nlc3MtY2hlY2tlci9hY2Nlc3MtY2hlY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sS0FBSyxTQUFTLE1BQU0sWUFBWSxDQUFBO0FBRXZDLE9BQU8sRUFBa0IsZUFBZSxFQUFFLFVBQVUsR0FBSyxNQUFNLDJCQUEyQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7QUFVOUU7SUFlRSw4QkFBc0IsTUFBNkI7UUFBbkQsaUJBUUM7UUFScUIsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFWM0Msc0JBQWlCLEdBQVcsSUFBSSxDQUFDO1FBRWpDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFFOUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFekQsVUFBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBT3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBR25ELENBQUM7SUFHRCxtREFBb0IsR0FBcEI7UUFFRSxZQUFZLENB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QixNQUFNOytCQWhCcEI7Q0FvWEMsQUFyV0QsSUFxV0M7U0FsV1ksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBsb2NhbFN0b3JhbmdlQUNMS2V5LCBhbGxvd2VkIH0gZnJvbSAnLi9hY2Nlc3MtY2hlY2tlci1rZXknO1xyXG5pbXBvcnQgKiBhcyBqc29uUXVlcnkgZnJvbSAnanNvbi1xdWVyeSdcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEFwcFNoYXJlZFN0YXRlLCBzZWxlY3RXb3Jrc3BhY2UsIHNlbGVjdFBhZ2UgLCAgfSBmcm9tICcuLi9zdG9yZS9zaGFyZWQuc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgc2V0UGFnZSwgc2V0V29ya1NwYWNlICxzZXRMb2NhbGVJbmZvfSBmcm9tICcuLi9zdG9yZS9zaGFyZWQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEFDTCB9IGZyb20gJy4vbW9kZWwvQUNMLmludGVyZmFjZSdcclxuXHJcbmltcG9ydCB7IElVc2VySW5mbyB9IGZyb20gJy4uL2FjY2Vzcy1jaGVja2VyL21vZGVsL3VzZXJJbmZvLmludGVyZmFjZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY2Vzc0NoZWNrZXJTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSB3b3Jrc3BhY2VTZWxlY3RlZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBwYWdlSWQ6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gIHdvcmtzcGFjZVNlbGVjdGVkJCA9IHRoaXMuc3RvcmUkLnNlbGVjdChzZWxlY3RXb3Jrc3BhY2UpO1xyXG5cclxuICBwYWdlJCA9IHRoaXMuc3RvcmUkLnNlbGVjdChzZWxlY3RQYWdlKTtcclxuXHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmUkOiBTdG9yZTxBcHBTaGFyZWRTdGF0ZT4pIHtcclxuXHJcblxyXG4gICAgdGhpcy53b3Jrc3BhY2VTZWxlY3RlZCQuc3Vic2NyaWJlKHdzID0+IHRoaXMud29ya3NwYWNlU2VsZWN0ZWQgPSB3cyk7XHJcblxyXG4gICAgdGhpcy5wYWdlJC5zdWJzY3JpYmUocGFnZSA9PiB0aGlzLnBhZ2VJZCA9IHBhZ2UpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgY2xlYXJBQ0xMb2NhbFN0b3JhZ2UoKSB7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYW5nZUFDTEtleSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0V29ya1NwYWNlU2VsZWN0ZWQod29ya3NwYWNlSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yZSQuZGlzcGF0Y2goc2V0V29ya1NwYWNlKHsgd29ya3NwYWNlSUQ6IHdvcmtzcGFjZUlkIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXb3JrU3BhY2VTZWxlY3RlZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMud29ya3NwYWNlU2VsZWN0ZWRcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2V0UGFnZVNlbGVjdGVkKHBhZ2VJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlJC5kaXNwYXRjaChzZXRQYWdlKHsgcGFnZUlEOiBwYWdlSWQgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldExvY2FsZUNvZGUobGFuZ3VhZ2VDb2RlIDogc3RyaW5nLGNvdW50cnlDb2RlIDogc3RyaW5nLCB0aW1lem9uZUNvZGUgIDpzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RvcmUkLmRpc3BhdGNoKHNldExvY2FsZUluZm8oeyBsYW5ndWFnZUNvZGU6IGxhbmd1YWdlQ29kZSAgLCBjb3VudHJ5Q29kZSA6IGNvdW50cnlDb2RlICwgdGltZXpvbmVDb2RlIDogdGltZXpvbmVDb2RlfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRmVhdHVyZVJvdXRlR3JhbnRlZChmZWF0dXJlTGFiZWw6IHN0cmluZykge1xyXG4gICAgbGV0IHJlc3VsdDogYm9vbGVhblxyXG4gICAgbGV0IHNlcnZpY2VMaXN0ID0gW107XHJcbiAgICBzZXJ2aWNlTGlzdCA9IHRoaXMuZ2V0UGVtaXNzaW9ucygpW2Ake3RoaXMud29ya3NwYWNlU2VsZWN0ZWR9X1BBR0VTYF07XHJcblxyXG4gICAgaWYgKHNlcnZpY2VMaXN0ICYmIHNlcnZpY2VMaXN0Lmxlbmd0aCA+IDAgJiYgKHRoaXMuY2hlY2tTcGVjaWFsU2VsZWN0KHNlcnZpY2VMaXN0KSB8fCBzZXJ2aWNlTGlzdC5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlLmxhYmVsLnRvTG93ZXJDYXNlKCkgPT0gZmVhdHVyZUxhYmVsLnRvTG93ZXJDYXNlKCkpLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzUGFnZVJvdXRlR3JhbnRlZChwYWdlSWQ6IHN0cmluZykge1xyXG4gICAgbGV0IHJlc3VsdDogYm9vbGVhblxyXG4gICAgbGV0IHNlcnZpY2VMaXN0ID0gW107XHJcbiAgICBzZXJ2aWNlTGlzdCA9IHRoaXMuZ2V0UGVtaXNzaW9ucygpW2Ake3RoaXMud29ya3NwYWNlU2VsZWN0ZWR9X1BBR0VTQ09NUGBdO1xyXG5cclxuICAgIGlmIChzZXJ2aWNlTGlzdCAmJiBzZXJ2aWNlTGlzdC5sZW5ndGggPiAwICYmIHNlcnZpY2VMaXN0LmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2Uua2V5VXVpZCA9PSBwYWdlSWQpLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNXaWRnZXRHcmFudGVkQnlMYWJlbChzZXJ2aWNlTGFiZWw6IHN0cmluZywgcGFnZUlkOiBzdHJpbmcsIHdpZGdldElkOiBzdHJpbmcpIHtcclxuICAgIGxldCByZXN1bHQ6IGJvb2xlYW5cclxuICAgIGxldCBzZXJ2aWNlTGlzdCA9IFtdO1xyXG4gICAgc2VydmljZUxpc3QgPSB0aGlzLmdldFBlbWlzc2lvbnMoKVtgJHt0aGlzLndvcmtzcGFjZVNlbGVjdGVkfV8ke3BhZ2VJZH1fJHt3aWRnZXRJZH1fU0VSVklDRVNXSURHRVRgXTtcclxuICAgIGlmIChzZXJ2aWNlTGlzdCAmJiBzZXJ2aWNlTGlzdC5sZW5ndGggPiAwICYmICh0aGlzLmNoZWNrU3BlY2lhbFNlbGVjdChzZXJ2aWNlTGlzdCkgfHwgc2VydmljZUxpc3QuZmlsdGVyKHNlcnZpY2UgPT4gc2VydmljZS5sYWJlbCA9PSBzZXJ2aWNlTGFiZWwpLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgaXNQYWdlR3JhbnRlZEJ5TGFiZWwoc2VydmljZUxhYmVsOiBzdHJpbmcsIHBhZ2VJZDogc3RyaW5nKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuXHJcbiAgICBsZXQgc2VydmljZUxpc3QgPSBbXTtcclxuICAgIHNlcnZpY2VMaXN0ID0gdGhpcy5nZXRQZW1pc3Npb25zKClbYCR7dGhpcy53b3Jrc3BhY2VTZWxlY3RlZH1fJHtwYWdlSWR9X1NFUlZJQ0VTUEFHRVNDT01QYF07XHJcblxyXG4gICAgaWYgKHNlcnZpY2VMaXN0ICYmIHNlcnZpY2VMaXN0Lmxlbmd0aCA+IDAgJiYgKHRoaXMuY2hlY2tTcGVjaWFsU2VsZWN0KHNlcnZpY2VMaXN0KSB8fCBzZXJ2aWNlTGlzdC5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlLmxhYmVsID09IHNlcnZpY2VMYWJlbCkubGVuZ3RoID4gMCkpIHtcclxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGlzV2lkZ2V0R3JhbnRlZEJ5SWQoc2VydmljZUlkOiBzdHJpbmcsIHBhZ2VJZDogc3RyaW5nLCB3aWRnZXRJZDogc3RyaW5nKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuXHJcbiAgICBsZXQgc2VydmljZUxpc3QgPSBbXTtcclxuICAgIHNlcnZpY2VMaXN0ID0gdGhpcy5nZXRQZW1pc3Npb25zKClbYCR7dGhpcy53b3Jrc3BhY2VTZWxlY3RlZH1fJHtwYWdlSWR9XyR7d2lkZ2V0SWR9X1NFUlZJQ0VTV0lER0VUYF07XHJcbiAgICBpZiAoc2VydmljZUxpc3QgJiYgc2VydmljZUxpc3QubGVuZ3RoID4gMCAmJiAodGhpcy5jaGVja1NwZWNpYWxTZWxlY3Qoc2VydmljZUxpc3QpIHx8IHNlcnZpY2VMaXN0LmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2Uua2V5VXVpZCA9PSBzZXJ2aWNlSWQpLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRmVhdHVyZUdyYW50ZWRCeUlkKHNlcnZpY2VJZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMud29ya3NwYWNlU2VsZWN0ZWQpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICBpZiAodGhpcy5jaGVja1NwZWNpYWxTZWxlY3QodGhpcy5nZXRQZW1pc3Npb25zKClbYCR7dGhpcy53b3Jrc3BhY2VTZWxlY3RlZH1fUEFHRVNgXSkpIHsgcmV0dXJuIHRydWUgfVxyXG4gICAgbGV0IHJlc3VsdDogYm9vbGVhblxyXG4gICAgbGV0IHNlcnZpY2VMaXN0ID0gW107XHJcbiAgICBzZXJ2aWNlTGlzdCA9IHRoaXMuZ2V0UGVtaXNzaW9ucygpW2Ake3RoaXMud29ya3NwYWNlU2VsZWN0ZWR9XyR7dGhpcy5wYWdlSWR9X1NFUlZJQ0VTUEFHRVNgXTtcclxuICAgIGlmIChzZXJ2aWNlTGlzdCAmJiBzZXJ2aWNlTGlzdC5sZW5ndGggPiAwICYmICh0aGlzLmNoZWNrU3BlY2lhbFNlbGVjdChzZXJ2aWNlTGlzdCkgfHwgc2VydmljZUxpc3QuZmlsdGVyKHNlcnZpY2UgPT4gc2VydmljZS5rZXlVdWlkID09IHNlcnZpY2VJZCkubGVuZ3RoID4gMCkpIHtcclxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0ZlYXR1cmVHcmFudGVkQnlMYWJlbChzZXJ2aWNlTGFiZWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cclxuICAgIGlmICghdGhpcy53b3Jrc3BhY2VTZWxlY3RlZCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIGlmICh0aGlzLmNoZWNrU3BlY2lhbFNlbGVjdCh0aGlzLmdldFBlbWlzc2lvbnMoKVtgJHt0aGlzLndvcmtzcGFjZVNlbGVjdGVkfV9QQUdFU2BdKSkgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuXHJcbiAgICBsZXQgc2VydmljZUxpc3QgPSBbXTtcclxuICAgIHNlcnZpY2VMaXN0ID0gdGhpcy5nZXRQZW1pc3Npb25zKClbYCR7dGhpcy53b3Jrc3BhY2VTZWxlY3RlZH1fJHt0aGlzLnBhZ2VJZH1fU0VSVklDRVNQQUdFU2BdO1xyXG4gICAgaWYgKHNlcnZpY2VMaXN0ICYmIHNlcnZpY2VMaXN0Lmxlbmd0aCA+IDAgJiYgKHRoaXMuY2hlY2tTcGVjaWFsU2VsZWN0KHNlcnZpY2VMaXN0KSB8fCBzZXJ2aWNlTGlzdC5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlLmxhYmVsID09IHNlcnZpY2VMYWJlbCkubGVuZ3RoID4gMCkpIHtcclxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNQYWdlR3JhbnRlZEJ5SWQoc2VydmljZUlkOiBzdHJpbmcpIHtcclxuICAgIGxldCByZXN1bHQ6IGJvb2xlYW5cclxuICAgIGxldCBzZXJ2aWNlTGlzdCA9IFtdO1xyXG4gICAgc2VydmljZUxpc3QgPSB0aGlzLmdldFBlbWlzc2lvbnMoKVtgJHt0aGlzLndvcmtzcGFjZVNlbGVjdGVkfV8ke3RoaXMucGFnZUlkfV9TRVJWSUNFU1BBR0VTQ09NUGBdO1xyXG5cclxuICAgIGlmIChzZXJ2aWNlTGlzdCAmJiBzZXJ2aWNlTGlzdC5sZW5ndGggPiAwICYmICh0aGlzLmNoZWNrU3BlY2lhbFNlbGVjdChzZXJ2aWNlTGlzdCkgfHwgc2VydmljZUxpc3QuZmlsdGVyKHNlcnZpY2UgPT4gc2VydmljZS5rZXlVdWlkID09IHNlcnZpY2VJZCkubGVuZ3RoID4gMCkpIHtcclxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUZlYXR1cmVTZWN1cml0eVBhcmFtQm9keShyZXNvdXJjZUlkOiBzdHJpbmcpIHtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0ge31cclxuICAgIHJlc3VsdFsnY29udGV4dCddID0ge307XHJcbiAgICBsZXQgdXNlckNvbnRleHRNZXRhZGF0YSA9IHJlc3VsdFsnY29udGV4dCddWyd1c2VyQ29udGV4dE1ldGFkYXRhJ10gPSB7fTtcclxuXHJcblxyXG4gICAgdXNlckNvbnRleHRNZXRhZGF0YVsndXNlcm5hbWUnXSA9IHRoaXMuZ2V0VXNlck5hbWUoKTtcclxuICAgIHVzZXJDb250ZXh0TWV0YWRhdGFbJ2F1dGhQZXJtaXNzaW9uUGF0aCddID0gYCR7dGhpcy53b3Jrc3BhY2VTZWxlY3RlZH1fJHt0aGlzLnBhZ2VJZH1fU0VSVklDRVNQQUdFU2A7XHJcbiAgICB1c2VyQ29udGV4dE1ldGFkYXRhWydyZXNvdXJjZUlkJ10gPSByZXNvdXJjZUlkO1xyXG4gICAgdXNlckNvbnRleHRNZXRhZGF0YVsncGFyZW50VHlwZSddID0gJ1BBR0VTJztcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlRmVhdHVyZVNlY3VyaXR5UGFyYW1Cb2R5QnlMYWJlbChyZXNvdXJjZUxhYmVsOiBzdHJpbmcpIHtcclxuICAgIGxldCByZXN1bHQgPSB7fVxyXG4gICAgcmVzdWx0Wydjb250ZXh0J10gPSB7fTtcclxuICAgIGxldCB1c2VyQ29udGV4dE1ldGFkYXRhID0gcmVzdWx0Wydjb250ZXh0J11bJ3VzZXJDb250ZXh0TWV0YWRhdGEnXSA9IHt9O1xyXG5cclxuICAgIGNvbnN0IHNlcnZpY2VMaXN0ID0gdGhpcy5nZXRQZW1pc3Npb25zKClbYCR7dGhpcy53b3Jrc3BhY2VTZWxlY3RlZH1fJHt0aGlzLnBhZ2VJZH1fU0VSVklDRVNQQUdFU2BdO1xyXG5cclxuICAgIGxldCBzZXJ2aWNlSXRlbSA9IHNlcnZpY2VMaXN0ICE9IG51bGwgPyBzZXJ2aWNlTGlzdC5maW5kKHNlcnZpY2UgPT4gc2VydmljZS5sYWJlbCA9PSByZXNvdXJjZUxhYmVsKSA6IG51bGw7XHJcbiAgICB1c2VyQ29udGV4dE1ldGFkYXRhWyd1c2VybmFtZSddID0gdGhpcy5nZXRVc2VyTmFtZSgpO1xyXG4gICAgdXNlckNvbnRleHRNZXRhZGF0YVsnYXV0aFBlcm1pc3Npb25QYXRoJ10gPSBgJHt0aGlzLndvcmtzcGFjZVNlbGVjdGVkfV8ke3RoaXMucGFnZUlkfV9TRVJWSUNFU1BBR0VTYDtcclxuICAgIHVzZXJDb250ZXh0TWV0YWRhdGFbJ3Jlc291cmNlSWQnXSA9IHNlcnZpY2VJdGVtICE9IG51bGwgPyBzZXJ2aWNlSXRlbS5rZXlVdWlkIDogJyc7XHJcbiAgICB1c2VyQ29udGV4dE1ldGFkYXRhWydwYXJlbnRUeXBlJ10gPSAnUEFHRVMnO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDb21wb3NlclBhZ2VTZWN1cml0eVBhcmFtQm9keShyZXNvdXJjZUlkOiBzdHJpbmcpIHtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0ge31cclxuICAgIHJlc3VsdFsnY29udGV4dCddID0ge307XHJcbiAgICBsZXQgdXNlckNvbnRleHRNZXRhZGF0YSA9IHJlc3VsdFsnY29udGV4dCddWyd1c2VyQ29udGV4dE1ldGFkYXRhJ10gPSB7fTtcclxuXHJcbiAgICB1c2VyQ29udGV4dE1ldGFkYXRhWyd1c2VybmFtZSddID0gdGhpcy5nZXRVc2VyTmFtZSgpO1xyXG4gICAgdXNlckNvbnRleHRNZXRhZGF0YVsnYXV0aFBlcm1pc3Npb25QYXRoJ10gPSBgJHt0aGlzLndvcmtzcGFjZVNlbGVjdGVkfV8ke3RoaXMucGFnZUlkfVNFUlZJQ0VTUEFHRVNDT01QYDtcclxuICAgIHVzZXJDb250ZXh0TWV0YWRhdGFbJ3Jlc291cmNlSWQnXSA9IHJlc291cmNlSWQ7XHJcbiAgICB1c2VyQ29udGV4dE1ldGFkYXRhWydwYXJlbnRUeXBlJ10gPSAnUEFHRVNDT01QJztcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICB9XHJcblxyXG4gIGdldEF1dGhQZXJtaXNzaW9uUGF0aCgpOiBzdHJpbmcge1xyXG5cclxuICAgIHJldHVybiBgJHt0aGlzLndvcmtzcGFjZVNlbGVjdGVkfV8ke3RoaXMucGFnZUlkfWA7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFdvcmtTcGFjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMud29ya3NwYWNlU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V29ya1BhZ2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2VJZDtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0UGVtaXNzaW9ucygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QUNMKCkuYXV0aFBlcm1pc3Npb25zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFdvcmtTcGFjZXMoKTogQUNMW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UGVtaXNzaW9ucygpLldPUktTUEFDRTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRGdWxsTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QUNMKCkuZnVsbE5hbWU7XHJcbiAgfVxyXG4gIC8vIHN0YSBmdW9yaSBkYWwgY29udGVzdG9cclxuICBwdWJsaWMgZ2V0Um9sZU5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldEFDTCgpLm5vbWVSdW9sbztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QUNMKCkudXNlck5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Tm9kZUJyZWFkY3J1bWIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldEFDTCgpLm5vZGVCcmVhZGNydW1iO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJvb3ROYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBQ0woKS5yb290TmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VyVVVJRCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QUNMKCkudXNlclV1aWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0S2V5T2lkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBQ0woKS5rZXlPaWQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBwdWJsaWMgZ2V0RW5hYmxpbmdVdWlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBQ0woKS5lbmFibGluZ1V1aWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBQ0woKS5sYW5ndWFnZUNvZGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q291bnRyeUNvZGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldEFDTCgpLmNvdW50cnlDb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRpbWVab25lQ29kZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QUNMKCkudGltZVpvbmVDb2RlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgZ2V0QUNMKCkgOiBJVXNlckluZm8ge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYW5nZUFDTEtleSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFDTExvY2FsU3RvcmFnZShyZXZvQ29udGV4dDogYW55KSB7XHJcblxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFuZ2VBQ0xLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuY3JlYXRlVXNlckluZm8ocmV2b0NvbnRleHQpKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVVc2VySW5mbyhyZXZvQ29udGV4dDogYW55KTogSVVzZXJJbmZvIHtcclxuXHJcbiAgICBjb25zdCB1c2VyQ29udGV4dE1ldGFkYXRhID0gcmV2b0NvbnRleHQuY29udGV4dC51c2VyQ29udGV4dE1ldGFkYXRhO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHJldm9Db250ZXh0LmNvbnRleHQ7XHJcblxyXG5cclxuICAgIGNvbnN0IHBlcm1pc3Npb25zQW5kVXNlckluZm86IElVc2VySW5mbyA9IHtcclxuXHJcbiAgICAgIGF1dGhQZXJtaXNzaW9uczogSlNPTi5wYXJzZSh1c2VyQ29udGV4dE1ldGFkYXRhLmF1dGhQZXJtaXNzaW9ucyksXHJcbiAgICAgIGtleU9pZDogdXNlckNvbnRleHRNZXRhZGF0YS5rZXlPaWQsXHJcbiAgICAgIHJvb3ROYW1lOiB1c2VyQ29udGV4dE1ldGFkYXRhLnJvb3ROYW1lLFxyXG4gICAgICB1c2VyVXVpZDogdXNlckNvbnRleHRNZXRhZGF0YS51c2VyVXVpZCxcclxuICAgICAgZnVsbE5hbWU6IHVzZXJDb250ZXh0TWV0YWRhdGEuZnVsbE5hbWUsXHJcbiAgICAgIHVzZXJOYW1lOiBjb250ZXh0LnVzZXJOYW1lLFxyXG4gICAgICBub21lUnVvbG86IGNvbnRleHQubm9tZVJ1b2xvLFxyXG4gICAgICBub2RlQnJlYWRjcnVtYjogdXNlckNvbnRleHRNZXRhZGF0YS5ub2RlQnJlYWRjcnVtYixcclxuICAgICAgZW5hYmxpbmdVdWlkIDogdXNlckNvbnRleHRNZXRhZGF0YS5lbmFibGluZ1V1aWQsXHJcbiAgICAgIGNvdW50cnlDb2RlICA6IHVzZXJDb250ZXh0TWV0YWRhdGEuY291bnRyeUNvZGUsXHJcbiAgICAgIGxhbmd1YWdlQ29kZSA6IHVzZXJDb250ZXh0TWV0YWRhdGEubGFuZ3VhZ2VDb2RlLFxyXG4gICAgICB0aW1lWm9uZUNvZGUgIDogdXNlckNvbnRleHRNZXRhZGF0YS50aW1lWm9uZUNvZGVcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGVybWlzc2lvbnNBbmRVc2VySW5mbztcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4vKiAgIHB1YmxpYyBzZXRQZXJtaXNzaW9uc0FuZFVzZXJJbmZvKHVzZXJJbmZvOiBJVXNlckluZm8pIHtcclxuICAgIHRoaXMuc3RvcmUkLmRpc3BhdGNoKHNldFBlcm1pc3Npb25zQW5kVXNlckluZm8oeyB1c2VySW5mbzogdXNlckluZm8gfSkpO1xyXG4gIH0gKi9cclxuXHJcbiAgcHVibGljIHNldE5ld1Rva2VuKHRva2VuOiBTdHJpbmcpIHtcclxuXHJcbiAgICBjb25zdCB0b2tlbkluZm8gPSB7XHJcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgIG5hbWU6IFwibmI6YXV0aDpzaW1wbGU6dG9rZW5cIixcclxuICAgICAgb3duZXJTdHJhdGVneU5hbWU6IFwidXNlcm5hbWVcIixcclxuICAgICAgdmFsdWU6IHRva2VuLFxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoX2FwcF90b2tlbicsIEpTT04uc3RyaW5naWZ5KHRva2VuSW5mbykpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnZXRGZWF0dXJlSWRCeUZlYXR1cmVMYWJlbChmZWF0dXJlTGFiZWw6IHN0cmluZykge1xyXG4gICAgbGV0IHJlc3VsdCA9IGpzb25RdWVyeS5kZWZhdWx0KGAke3RoaXMud29ya3NwYWNlU2VsZWN0ZWR9X1BBR0VTW2xhYmVsPSR7ZmVhdHVyZUxhYmVsfV0ua2V5VXVpZGAsIHtcclxuICAgICAgZGF0YTogdGhpcy5nZXRQZW1pc3Npb25zKClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tTcGVjaWFsU2VsZWN0KHNlcnZpY2VMaXN0OiBhbnlbXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGFsbG93ZWQuaW5jbHVkZXMoc2VydmljZUxpc3RbMF0ubGFiZWwpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19