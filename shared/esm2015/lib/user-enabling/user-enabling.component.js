import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "primeng";
import * as i2 from "primeng/api";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
import * as i5 from "@nebular/theme";
function UserEnablingComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "th", 6);
    i0.ɵɵelementStart(2, "span", 7);
    i0.ɵɵtext(3, "crudForm.enablingManager.table.group");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 6);
    i0.ɵɵelementStart(5, "span", 7);
    i0.ɵɵtext(6, "crudForm.enablingManager.table.role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 6);
    i0.ɵɵelementStart(8, "span", 7);
    i0.ɵɵtext(9, "crudForm.enablingManager.table.path");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 6);
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 1, ctx_r0.selectedLabel));
} }
function UserEnablingComponent_ng_template_2_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r10);
} }
function UserEnablingComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-toggle", 14);
    i0.ɵɵlistener("checkedChange", function UserEnablingComponent_ng_template_2_ng_template_9_Template_nb_toggle_checkedChange_0_listener() { i0.ɵɵrestoreView(_r13); const rowData_r4 = i0.ɵɵnextContext().$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.checkedChange(rowData_r4); })("checkedChange", function UserEnablingComponent_ng_template_2_ng_template_9_Template_nb_toggle_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r13); const rowData_r4 = i0.ɵɵnextContext().$implicit; return rowData_r4.enabling.defaultEnabling = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rowData_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("disabled", rowData_r4.enabling.defaultEnabling)("checked", rowData_r4.enabling.defaultEnabling);
} }
function UserEnablingComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-icon", 15);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    i0.ɵɵproperty("nbTooltip", i0.ɵɵpipeBind1(1, 1, "userEnabling.noRoleError"));
} }
function UserEnablingComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 8);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 8);
    i0.ɵɵelementStart(6, "ol", 9);
    i0.ɵɵtemplate(7, UserEnablingComponent_ng_template_2_li_7_Template, 2, 1, "li", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td", 8);
    i0.ɵɵtemplate(9, UserEnablingComponent_ng_template_2_ng_template_9_Template, 1, 2, "ng-template", 11);
    i0.ɵɵtemplate(10, UserEnablingComponent_ng_template_2_ng_template_10_Template, 2, 3, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rowData_r4 = ctx.$implicit;
    const _r8 = i0.ɵɵreference(11);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", rowData_r4.groupName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", rowData_r4.roleName, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", rowData_r4.nodeBreadcrumb);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", rowData_r4.roleName !== null)("ngIfElse", _r8);
} }
function UserEnablingComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function UserEnablingComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.enablingManagerSave(ctx_r17.userEnablingSelected); });
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2, "crudForm.enablingManager.buttonOk");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function UserEnablingComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function UserEnablingComponent_button_7_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.enablingManagerCancel($event); });
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2, "crudForm.enablingManager.buttonCancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class UserEnablingComponent {
    constructor() {
        this.enablingManagerSaveEmitter = new EventEmitter();
        this.enablingManagerCancelEmitter = new EventEmitter();
        this.enablingManagerSelectEmitter = new EventEmitter();
        this.selectedLabel = 'crudForm.enablingManager.table.default';
        this.showSave = true;
        this.showCancel = true;
        this.userEnablingSelected = null;
    }
    ngOnInit() {
    }
    enablingManagerSave(event) {
        this.enablingManagerSaveEmitter.emit(event);
    }
    enablingManagerCancel(event) {
        this.enablingManagerCancelEmitter.emit(event);
    }
    enablingManagerSelect(event) {
        this.enablingManagerSelectEmitter.emit(event);
    }
    checkedChange(userEnablingChecked) {
        this.userEnablingSelected = userEnablingChecked;
        this.userEnablingList.forEach((userEnabling) => {
            if (userEnabling.groupName !== '' && userEnabling.groupName !== userEnablingChecked.groupName) {
                userEnabling.enabling.defaultEnabling = false;
            }
            else if (userEnabling.roleName !== '' && userEnabling.roleName !== userEnablingChecked.roleName) {
                userEnabling.enabling.defaultEnabling = false;
            }
        });
        this.enablingManagerSelect(this.userEnablingSelected);
    }
}
/** @nocollapse */ UserEnablingComponent.ɵfac = function UserEnablingComponent_Factory(t) { return new (t || UserEnablingComponent)(); };
/** @nocollapse */ UserEnablingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserEnablingComponent, selectors: [["shared-user-enabling"]], inputs: { userEnablingList: "userEnablingList", selectedLabel: "selectedLabel", showSave: "showSave", showCancel: "showCancel" }, outputs: { enablingManagerSaveEmitter: "enablingManagerSave", enablingManagerCancelEmitter: "enablingManagerCancel", enablingManagerSelectEmitter: "enablingManagerSelect" }, decls: 8, vars: 4, consts: [[1, "rq-table", 3, "value", "resizableColumns"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "d-flex", "justify-content-end"], [1, "p-2"], ["type", "button", "size", "tiny", "outline", "", "nbButton", "", "status", "primary", 3, "click", 4, "ngIf"], ["pResizableColumn", ""], ["translate", ""], [1, "ui-resizable-column"], [1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [3, "ngIf", "ngIfElse"], ["noRole", ""], [1, "breadcrumb-item"], [3, "disabled", "checked", "checkedChange"], ["icon", "alert-triangle-outline", "nbTooltipStatus", "danger", 3, "nbTooltip"], ["type", "button", "size", "tiny", "outline", "", "nbButton", "", "status", "primary", 3, "click"]], template: function UserEnablingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p-table", 0);
        i0.ɵɵtemplate(1, UserEnablingComponent_ng_template_1_Template, 14, 3, "ng-template", 1);
        i0.ɵɵtemplate(2, UserEnablingComponent_ng_template_2_Template, 12, 5, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtemplate(5, UserEnablingComponent_button_5_Template, 3, 0, "button", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵtemplate(7, UserEnablingComponent_button_7_Template, 3, 0, "button", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.userEnablingList)("resizableColumns", true);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.showSave);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showCancel);
    } }, directives: [i1.Table, i2.PrimeTemplate, i3.NgIf, i1.ResizableColumn, i4.TranslateDirective, i3.NgForOf, i5.NbToggleComponent, i5.NbIconComponent, i5.NbTooltipDirective, i5.NbButtonComponent], pipes: [i4.TranslatePipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserEnablingComponent, [{
        type: Component,
        args: [{
                selector: 'shared-user-enabling',
                templateUrl: './user-enabling.component.html',
                styleUrls: ['./user-enabling.component.css']
            }]
    }], function () { return []; }, { enablingManagerSaveEmitter: [{
            type: Output,
            args: ['enablingManagerSave']
        }], enablingManagerCancelEmitter: [{
            type: Output,
            args: ['enablingManagerCancel']
        }], enablingManagerSelectEmitter: [{
            type: Output,
            args: ['enablingManagerSelect']
        }], userEnablingList: [{
            type: Input
        }], selectedLabel: [{
            type: Input
        }], showSave: [{
            type: Input
        }], showCancel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1lbmFibGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdXNlci1lbmFibGluZy91c2VyLWVuYWJsaW5nLmNvbXBvbmVudC50cyIsImxpYi91c2VyLWVuYWJsaW5nL3VzZXItZW5hYmxpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNHckUsMEJBQ0U7SUFBQSw2QkFBcUI7SUFBQSwrQkFBZ0I7SUFBQSxvREFBb0M7SUFBQSxpQkFBTztJQUFBLGlCQUFLO0lBQ3JGLDZCQUFxQjtJQUFBLCtCQUFnQjtJQUFBLG1EQUFtQztJQUFBLGlCQUFPO0lBQUEsaUJBQUs7SUFDcEYsNkJBQXFCO0lBQUEsK0JBQWdCO0lBQUEsbURBQW1DO0lBQUEsaUJBQU87SUFBQSxpQkFBSztJQUNwRiw4QkFBcUI7SUFBQSw2QkFBTTtJQUFBLGFBQTZCOztJQUFBLGlCQUFPO0lBQUEsaUJBQUs7SUFDdEUsaUJBQUs7OztJQUR3QixnQkFBNkI7SUFBN0IsaUVBQTZCOzs7SUFhcEQsOEJBQXdFO0lBQUEsWUFBUTtJQUFBLGlCQUFLOzs7SUFBYixlQUFRO0lBQVIsOEJBQVE7Ozs7SUFLaEYscUNBRXNFO0lBRDNELG1TQUF3QyxtUUFBQTtJQUNPLGlCQUFZOzs7SUFGM0QsOERBQTZDLGdEQUFBOzs7SUFNeEQsOEJBQWdJOzs7SUFBekYsNEVBQW9EOzs7SUFwQmpHLDBCQUNFO0lBQUEsNkJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUs7SUFDTCw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBSztJQUNMLDZCQUNFO0lBQUEsNkJBQ0U7SUFBQSxtRkFBd0U7SUFDMUUsaUJBQUs7SUFDUCxpQkFBSztJQUNMLDZCQUNFO0lBQUEscUdBQ0U7SUFLRix3SUFDRTtJQUVK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Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SVVzZXJFbmFibGluZ30gZnJvbSAnLi9tb2RlbC9JVXNlckVuYWJsaW5nJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NoYXJlZC11c2VyLWVuYWJsaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci1lbmFibGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdXNlci1lbmFibGluZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJFbmFibGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoJ2VuYWJsaW5nTWFuYWdlclNhdmUnKSBlbmFibGluZ01hbmFnZXJTYXZlRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgnZW5hYmxpbmdNYW5hZ2VyQ2FuY2VsJykgZW5hYmxpbmdNYW5hZ2VyQ2FuY2VsRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgnZW5hYmxpbmdNYW5hZ2VyU2VsZWN0JykgZW5hYmxpbmdNYW5hZ2VyU2VsZWN0RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQElucHV0KCkgdXNlckVuYWJsaW5nTGlzdDogSVVzZXJFbmFibGluZ1tdO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkTGFiZWw6IHN0cmluZyA9ICdjcnVkRm9ybS5lbmFibGluZ01hbmFnZXIudGFibGUuZGVmYXVsdCdcclxuICBASW5wdXQoKSBzaG93U2F2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd0NhbmNlbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHVzZXJFbmFibGluZ1NlbGVjdGVkOiBJVXNlckVuYWJsaW5nID0gbnVsbDtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbmFibGluZ01hbmFnZXJTYXZlKGV2ZW50KXtcclxuICAgIHRoaXMuZW5hYmxpbmdNYW5hZ2VyU2F2ZUVtaXR0ZXIuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW5hYmxpbmdNYW5hZ2VyQ2FuY2VsKGV2ZW50KXtcclxuICAgIHRoaXMuZW5hYmxpbmdNYW5hZ2VyQ2FuY2VsRW1pdHRlci5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbmFibGluZ01hbmFnZXJTZWxlY3QoZXZlbnQpe1xyXG4gICAgdGhpcy5lbmFibGluZ01hbmFnZXJTZWxlY3RFbWl0dGVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrZWRDaGFuZ2UodXNlckVuYWJsaW5nQ2hlY2tlZDogSVVzZXJFbmFibGluZyl7XHJcbiAgICB0aGlzLnVzZXJFbmFibGluZ1NlbGVjdGVkID0gdXNlckVuYWJsaW5nQ2hlY2tlZDtcclxuICAgIHRoaXMudXNlckVuYWJsaW5nTGlzdC5mb3JFYWNoKCh1c2VyRW5hYmxpbmcpPT57XHJcbiAgICAgIGlmKHVzZXJFbmFibGluZy5ncm91cE5hbWUhPT0gJycgJiYgdXNlckVuYWJsaW5nLmdyb3VwTmFtZSAhPT0gdXNlckVuYWJsaW5nQ2hlY2tlZC5ncm91cE5hbWUpe1xyXG4gICAgICAgIHVzZXJFbmFibGluZy5lbmFibGluZy5kZWZhdWx0RW5hYmxpbmcgPSBmYWxzZTtcclxuICAgICAgfWVsc2UgaWYodXNlckVuYWJsaW5nLnJvbGVOYW1lIT09ICcnICYmIHVzZXJFbmFibGluZy5yb2xlTmFtZSAhPT0gdXNlckVuYWJsaW5nQ2hlY2tlZC5yb2xlTmFtZSl7XHJcbiAgICAgICAgdXNlckVuYWJsaW5nLmVuYWJsaW5nLmRlZmF1bHRFbmFibGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVuYWJsaW5nTWFuYWdlclNlbGVjdCh0aGlzLnVzZXJFbmFibGluZ1NlbGVjdGVkKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJcclxuICAgIDxwLXRhYmxlIGNsYXNzPVwicnEtdGFibGVcIiBbdmFsdWVdPVwidXNlckVuYWJsaW5nTGlzdFwiIFtyZXNpemFibGVDb2x1bW5zXT1cInRydWVcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImhlYWRlclwiPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aCBwUmVzaXphYmxlQ29sdW1uPjxzcGFuIHRyYW5zbGF0ZT5jcnVkRm9ybS5lbmFibGluZ01hbmFnZXIudGFibGUuZ3JvdXA8L3NwYW4+PC90aD5cclxuICAgICAgICAgIDx0aCBwUmVzaXphYmxlQ29sdW1uPjxzcGFuIHRyYW5zbGF0ZT5jcnVkRm9ybS5lbmFibGluZ01hbmFnZXIudGFibGUucm9sZTwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgPHRoIHBSZXNpemFibGVDb2x1bW4+PHNwYW4gdHJhbnNsYXRlPmNydWRGb3JtLmVuYWJsaW5nTWFuYWdlci50YWJsZS5wYXRoPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICA8dGggcFJlc2l6YWJsZUNvbHVtbj48c3Bhbj57e3NlbGVjdGVkTGFiZWwgfCB0cmFuc2xhdGV9fTwvc3Bhbj48L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJib2R5XCIgbGV0LXJvd0RhdGEgbGV0LXJvd0luZGV4PVwicm93SW5kZXhcIj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgIGNsYXNzPVwidWktcmVzaXphYmxlLWNvbHVtblwiPlxyXG4gICAgICAgICAgICB7e3Jvd0RhdGEuZ3JvdXBOYW1lfX1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgIGNsYXNzPVwidWktcmVzaXphYmxlLWNvbHVtblwiPlxyXG4gICAgICAgICAgICB7e3Jvd0RhdGEucm9sZU5hbWV9fVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCAgY2xhc3M9XCJ1aS1yZXNpemFibGUtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm93RGF0YS5ub2RlQnJlYWRjcnVtYlwiIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCI+e3tpdGVtfX08L2xpPlxyXG4gICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCAgY2xhc3M9XCJ1aS1yZXNpemFibGUtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJyb3dEYXRhLnJvbGVOYW1lICE9PSBudWxsXCIgW25nSWZFbHNlXT1cIm5vUm9sZVwiPlxyXG4gICAgICAgICAgICAgIDxuYi10b2dnbGUgW2Rpc2FibGVkXT1cInJvd0RhdGEuZW5hYmxpbmcuZGVmYXVsdEVuYWJsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChjaGVja2VkQ2hhbmdlKT1cImNoZWNrZWRDaGFuZ2Uocm93RGF0YSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgWyhjaGVja2VkKV09XCJyb3dEYXRhLmVuYWJsaW5nLmRlZmF1bHRFbmFibGluZ1wiPjwvbmItdG9nZ2xlPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub1JvbGU+XHJcbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cImFsZXJ0LXRyaWFuZ2xlLW91dGxpbmVcIiBbbmJUb29sdGlwXT1cIid1c2VyRW5hYmxpbmcubm9Sb2xlRXJyb3InIHwgdHJhbnNsYXRlXCIgbmJUb29sdGlwU3RhdHVzPVwiZGFuZ2VyXCIgPjwvbmItaWNvbj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvcC10YWJsZT5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicC0yXCI+XHJcbiAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93U2F2ZVwiIHR5cGU9XCJidXR0b25cIiBzaXplPVwidGlueVwiIG91dGxpbmUgbmJCdXR0b24gc3RhdHVzPVwicHJpbWFyeVwiIChjbGljayk9XCJlbmFibGluZ01hbmFnZXJTYXZlKHVzZXJFbmFibGluZ1NlbGVjdGVkKVwiPlxyXG4gICAgICAgIDxzcGFuIHRyYW5zbGF0ZT5jcnVkRm9ybS5lbmFibGluZ01hbmFnZXIuYnV0dG9uT2s8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicC0yXCI+XHJcbiAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93Q2FuY2VsXCIgdHlwZT1cImJ1dHRvblwiIHNpemU9XCJ0aW55XCIgb3V0bGluZSBuYkJ1dHRvbiBzdGF0dXM9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImVuYWJsaW5nTWFuYWdlckNhbmNlbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgPHNwYW4gdHJhbnNsYXRlPmNydWRGb3JtLmVuYWJsaW5nTWFuYWdlci5idXR0b25DYW5jZWw8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4iXX0=