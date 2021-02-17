import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/common";
function DialogMessageComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function DialogMessageComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.confirm(); });
    i0.ɵɵtext(1, "confirmation-message.confirm");
    i0.ɵɵelementEnd();
} }
export class DialogMessageComponent {
    constructor(ref, translate) {
        this.ref = ref;
        this.translate = translate;
    }
    ngOnInit() {
        //this.titleTranslated = this.translate.instant(this.title);
        //this.messageTranslated = this.translate.instant(this.message);
    }
    cancel() {
        this.ref.close(false);
    }
    confirm() {
        this.ref.close(true);
    }
}
/** @nocollapse */ DialogMessageComponent.ɵfac = function DialogMessageComponent_Factory(t) { return new (t || DialogMessageComponent)(i0.ɵɵdirectiveInject(i1.NbDialogRef), i0.ɵɵdirectiveInject(i2.TranslateService)); };
/** @nocollapse */ DialogMessageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DialogMessageComponent, selectors: [["shared-dialog-message"]], decls: 9, vars: 3, consts: [["translate", ""], [1, "d-flex", "justify-content-end"], ["nbButton", "", "shape", "round", "size", "small", "outline", "", "translate", "", 3, "click"], ["nbButton", "", "shape", "round", "size", "small", "outline", "", "status", "success", "translate", "", 3, "click", 4, "ngIf"], ["nbButton", "", "shape", "round", "size", "small", "outline", "", "status", "success", "translate", "", 3, "click"]], template: function DialogMessageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card");
        i0.ɵɵelementStart(1, "nb-card-header", 0);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-card-body", 0);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "nb-card-footer", 1);
        i0.ɵɵelementStart(6, "button", 2);
        i0.ɵɵlistener("click", function DialogMessageComponent_Template_button_click_6_listener() { return ctx.cancel(); });
        i0.ɵɵtext(7, "confirmation-message.close");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, DialogMessageComponent_button_8_Template, 2, 0, "button", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.isConfirmationMode);
    } }, directives: [i1.NbCardComponent, i1.NbCardHeaderComponent, i2.TranslateDirective, i1.NbCardBodyComponent, i1.NbCardFooterComponent, i1.NbButtonComponent, i3.NgIf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogMessageComponent, [{
        type: Component,
        args: [{
                selector: 'shared-dialog-message',
                templateUrl: './dialog-message.component.html',
                styleUrls: ['./dialog-message.component.scss']
            }]
    }], function () { return [{ type: i1.NbDialogRef }, { type: i2.TranslateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy1tZXNzYWdlL2RpYWxvZy1tZXNzYWdlLmNvbXBvbmVudC50cyIsImxpYi9kaWFsb2ctbWVzc2FnZS9kaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDSzlDLGlDQUE4SDtJQUE5QiwwTEFBbUI7SUFBVyw0Q0FBNEI7SUFBQSxpQkFBUzs7QURJdkssTUFBTSxPQUFPLHNCQUFzQjtJQVFqQyxZQUFzQixHQUF3QyxFQUFTLFNBQTJCO1FBQTVFLFFBQUcsR0FBSCxHQUFHLENBQXFDO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDO0lBRXZHLFFBQVE7UUFDTiw0REFBNEQ7UUFDNUQsZ0VBQWdFO0lBQ2xFLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOzsrR0FyQlUsc0JBQXNCOzhFQUF0QixzQkFBc0I7UUNUbkMsK0JBQ0U7UUFBQSx5Q0FBMEI7UUFBQSxZQUFTO1FBQUEsaUJBQWlCO1FBQ3BELHVDQUF3QjtRQUFBLFlBQVc7UUFBQSxpQkFBZTtRQUNsRCx5Q0FDRTtRQUFBLGlDQUFpRjtRQUE3QixtR0FBUyxZQUFRLElBQUM7UUFBVywwQ0FBMEI7UUFBQSxpQkFBUztRQUNwSCw2RUFBOEg7UUFDaEksaUJBQWlCO1FBQ25CLGlCQUFVOztRQU5rQixlQUFTO1FBQVQsK0JBQVM7UUFDWCxlQUFXO1FBQVgsaUNBQVc7UUFHekIsZUFBMEI7UUFBMUIsNkNBQTBCOztrRERJekIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmJEaWFsb2dSZWZ9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzaGFyZWQtZGlhbG9nLW1lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgLy9wdWJsaWMgdGl0bGVUcmFuc2xhdGVkOiBzdHJpbmc7XHJcbiAgLy9wdWJsaWMgbWVzc2FnZVRyYW5zbGF0ZWQ6IHN0cmluZztcclxuICBwdWJsaWMgaXNDb25maXJtYXRpb25Nb2RlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVmOiBOYkRpYWxvZ1JlZjxEaWFsb2dNZXNzYWdlQ29tcG9uZW50PiwgcHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy90aGlzLnRpdGxlVHJhbnNsYXRlZCA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQodGhpcy50aXRsZSk7XHJcbiAgICAvL3RoaXMubWVzc2FnZVRyYW5zbGF0ZWQgPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KHRoaXMubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBjYW5jZWwoKSB7XHJcbiAgICB0aGlzLnJlZi5jbG9zZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25maXJtKCkge1xyXG4gICAgdGhpcy5yZWYuY2xvc2UodHJ1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiPG5iLWNhcmQ+XHJcbiAgPG5iLWNhcmQtaGVhZGVyIHRyYW5zbGF0ZT57e3RpdGxlfX08L25iLWNhcmQtaGVhZGVyPlxyXG4gIDxuYi1jYXJkLWJvZHkgdHJhbnNsYXRlPnt7bWVzc2FnZX19PC9uYi1jYXJkLWJvZHk+XHJcbiAgPG5iLWNhcmQtZm9vdGVyIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgIDxidXR0b24gbmJCdXR0b24gc2hhcGU9XCJyb3VuZFwiIHNpemU9XCJzbWFsbFwiIG91dGxpbmUgKGNsaWNrKT1cImNhbmNlbCgpXCIgdHJhbnNsYXRlPmNvbmZpcm1hdGlvbi1tZXNzYWdlLmNsb3NlPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiaXNDb25maXJtYXRpb25Nb2RlXCIgbmJCdXR0b24gc2hhcGU9XCJyb3VuZFwiIHNpemU9XCJzbWFsbFwiIG91dGxpbmUgc3RhdHVzPVwic3VjY2Vzc1wiIChjbGljayk9XCJjb25maXJtKClcIiB0cmFuc2xhdGU+Y29uZmlybWF0aW9uLW1lc3NhZ2UuY29uZmlybTwvYnV0dG9uPlxyXG4gIDwvbmItY2FyZC1mb290ZXI+XHJcbjwvbmItY2FyZD5cclxuICJdfQ==