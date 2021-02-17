import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { AccessCheckerService } from '../access-checker/access-checker.service';
import * as i0 from "@angular/core";
export declare class AuthGuardService implements CanActivate {
    private authService;
    private router;
    private acs;
    readonly whiteList: string[];
    constructor(authService: NbAuthService, router: Router, acs: AccessCheckerService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    private checkPermission;
    private isComposerPage;
    private getFeatureOrPageId;
    private checkUrlContainsString;
    static ɵfac: i0.ɵɵFactoryDef<AuthGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AuthGuardService>;
}
