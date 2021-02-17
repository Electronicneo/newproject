import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/common";
function DialogMessageComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function DialogMessageComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.confirm(); });
    i0.ɵɵtext(1, "confirmation-message.confirm");
    i0.ɵɵelementEnd();
} }
var DialogMessageComponent = /** @class */ (function () {
    function DialogMessageComponent(ref, translate) {
        this.ref = ref;
        this.translate = translate;
    }
    DialogMessageComponent.prototype.ngOnInit = function () {
        //this.titleTranslated = this.translate.instant(this.title);
        //this.messageTranslated = this.translate.instant(this.message);
    };
    DialogMessageComponent.prototype.cancel = function () {
        this.ref.close(false);
    };
    DialogMessageComponent.prototype.confirm = function () {
        this.ref.close(true);
    };
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
    return DialogMessageComponent;
}());
export { DialogMessageComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogMessageComponent, [{
        type: Component,
        args: [{
                selector: 'shared-dialog-message',
                templateUrl: './dialog-message.component.html',
                styleUrls: ['./dialog-message.component.scss']
            }]
    }], function () { return [{ type: i1.NbDialogRef }, { type: i2.TranslateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy1tZXNzYWdlL2RpYWxvZy1tZXNzYWdlLmNvbXBvbmVudC50cyIsImxpYi9kaWFsb2ctbWVzc2FnZS9kaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDSzlDLGlDQUE4SDtJQUE5Qix3TEFBbUI7SUFBVyw0Q0FBNEI7SUFBQSxpQkFBUzs7QUREdks7SUFhRSxnQ0FBc0IsR0FBd0MsRUFBUyxTQUEyQjtRQUE1RSxRQUFHLEdBQUgsR0FBRyxDQUFxQztRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUksQ0FBQztJQUV2Ryx5Q0FBUSxHQUFSO1FBQ0UsNERBQTREO1FBQzVELGdFQUFnRTtJQUNsRSxDQUFDO0lBRUQsdUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCx3Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQzttSEFyQlUsc0JBQXNCO2tGQUF0QixzQkFBc0I7WUNUbkMsK0JBQ0U7WUFBQSx5Q0FBMEI7WUFBQSxZQUFTO1lBQUEsaUJBQWlCO1lBQ3BELHVDQUF3QjtZQUFBLFlBQVc7WUFBQSxpQkFBZTtZQUNsRCx5Q0FDRTtZQUFBLGlDQUFpRjtZQUE3QixtR0FBUyxZQUFRLElBQUM7WUFBVywwQ0FBMEI7WUFBQSxpQkFBUztZQUNwSCw2RUFBOEg7WUFDaEksaUJBQWlCO1lBQ25CLGlCQUFVOztZQU5rQixlQUFTO1lBQVQsK0JBQVM7WUFDWCxlQUFXO1lBQVgsaUNBQVc7WUFHekIsZUFBMEI7WUFBMUIsNkNBQTBCOztpQ0RMdEM7Q0FpQ0MsQUE3QkQsSUE2QkM7U0F4Qlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYkRpYWxvZ1JlZn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NoYXJlZC1kaWFsb2ctbWVzc2FnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICAvL3B1YmxpYyB0aXRsZVRyYW5zbGF0ZWQ6IHN0cmluZztcclxuICAvL3B1YmxpYyBtZXNzYWdlVHJhbnNsYXRlZDogc3RyaW5nO1xyXG4gIHB1YmxpYyBpc0NvbmZpcm1hdGlvbk1vZGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWY6IE5iRGlhbG9nUmVmPERpYWxvZ01lc3NhZ2VDb21wb25lbnQ+LCBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvL3RoaXMudGl0bGVUcmFuc2xhdGVkID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudCh0aGlzLnRpdGxlKTtcclxuICAgIC8vdGhpcy5tZXNzYWdlVHJhbnNsYXRlZCA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQodGhpcy5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGNhbmNlbCgpIHtcclxuICAgIHRoaXMucmVmLmNsb3NlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbmZpcm0oKSB7XHJcbiAgICB0aGlzLnJlZi5jbG9zZSh0cnVlKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCI8bmItY2FyZD5cclxuICA8bmItY2FyZC1oZWFkZXIgdHJhbnNsYXRlPnt7dGl0bGV9fTwvbmItY2FyZC1oZWFkZXI+XHJcbiAgPG5iLWNhcmQtYm9keSB0cmFuc2xhdGU+e3ttZXNzYWdlfX08L25iLWNhcmQtYm9keT5cclxuICA8bmItY2FyZC1mb290ZXIgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgPGJ1dHRvbiBuYkJ1dHRvbiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgb3V0bGluZSAoY2xpY2spPVwiY2FuY2VsKClcIiB0cmFuc2xhdGU+Y29uZmlybWF0aW9uLW1lc3NhZ2UuY2xvc2U8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJpc0NvbmZpcm1hdGlvbk1vZGVcIiBuYkJ1dHRvbiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgb3V0bGluZSBzdGF0dXM9XCJzdWNjZXNzXCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiIHRyYW5zbGF0ZT5jb25maXJtYXRpb24tbWVzc2FnZS5jb25maXJtPC9idXR0b24+XHJcbiAgPC9uYi1jYXJkLWZvb3Rlcj5cclxuPC9uYi1jYXJkPlxyXG4gIl19