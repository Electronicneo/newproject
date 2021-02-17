import { EventEmitter, OnInit } from '@angular/core';
import { IUserEnabling } from './model/IUserEnabling';
import * as i0 from "@angular/core";
export declare class UserEnablingComponent implements OnInit {
    enablingManagerSaveEmitter: EventEmitter<Event>;
    enablingManagerCancelEmitter: EventEmitter<Event>;
    enablingManagerSelectEmitter: EventEmitter<Event>;
    userEnablingList: IUserEnabling[];
    selectedLabel: string;
    showSave: boolean;
    showCancel: boolean;
    userEnablingSelected: IUserEnabling;
    constructor();
    ngOnInit(): void;
    enablingManagerSave(event: any): void;
    enablingManagerCancel(event: any): void;
    enablingManagerSelect(event: any): void;
    checkedChange(userEnablingChecked: IUserEnabling): void;
    static ɵfac: i0.ɵɵFactoryDef<UserEnablingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UserEnablingComponent, "shared-user-enabling", never, { "userEnablingList": "userEnablingList"; "selectedLabel": "selectedLabel"; "showSave": "showSave"; "showCancel": "showCancel"; }, { "enablingManagerSaveEmitter": "enablingManagerSave"; "enablingManagerCancelEmitter": "enablingManagerCancel"; "enablingManagerSelectEmitter": "enablingManagerSelect"; }, never, never>;
}
