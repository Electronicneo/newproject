import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserEnabling } from '../model/IUserEnabling';
import * as i0 from "@angular/core";
export declare class UserEnableApiService {
    private httpClient;
    private environment;
    private COMMON_URL;
    constructor(httpClient: HttpClient, environment: any);
    getEnabling(ownerUuid: string): Observable<IUserEnabling[]>;
    static ɵfac: i0.ɵɵFactoryDef<UserEnableApiService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UserEnableApiService>;
}
