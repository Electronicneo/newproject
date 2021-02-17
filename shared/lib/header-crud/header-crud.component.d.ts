import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HeaderCrudComponent implements OnInit {
    helpPageEmitter: EventEmitter<Event>;
    addEmitter: EventEmitter<Event>;
    tooltipText: string;
    title: string;
    addButtonText: string;
    constructor();
    ngOnInit(): void;
    helpPage(event: any): void;
    add(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<HeaderCrudComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderCrudComponent, "shared-header-crud", never, { "tooltipText": "tooltipText"; "title": "title"; "addButtonText": "addButtonText"; }, { "helpPageEmitter": "helpPage"; "addEmitter": "add"; }, never, never>;
}
