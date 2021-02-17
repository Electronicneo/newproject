import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@angular/common";
function DefaultFormActionsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function DefaultFormActionsComponent_div_4_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.enableEditForm($event); });
    i0.ɵɵelement(2, "nb-icon", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r0.form.invalid)("nbTooltip", ctx_r0.tooltipEnableEditForm);
} }
function DefaultFormActionsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function DefaultFormActionsComponent_div_5_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.update($event); });
    i0.ɵɵelement(2, "nb-icon", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r1.form.invalid || !ctx_r1.form.dirty)("nbTooltip", ctx_r1.tooltipUpdate);
} }
function DefaultFormActionsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵelement(2, "nb-icon", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r2.form.invalid)("nbTooltip", ctx_r2.tooltipSave);
} }
export class DefaultFormActionsComponent {
    constructor() {
        //REMOVE
        this.removeEmitter = new EventEmitter();
        //enableEditForm
        this.enableEditFormEmitter = new EventEmitter();
        //UPDATE
        this.updateEmitter = new EventEmitter();
    }
    remove(event) {
        this.removeEmitter.emit(event);
    }
    enableEditForm(event) {
        this.enableEditFormEmitter.emit(event);
    }
    update(event) {
        this.updateEmitter.emit(event);
    }
    ngOnInit() {
    }
}
/** @nocollapse */ DefaultFormActionsComponent.ɵfac = function DefaultFormActionsComponent_Factory(t) { return new (t || DefaultFormActionsComponent)(); };
/** @nocollapse */ DefaultFormActionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultFormActionsComponent, selectors: [["shared-default-form-actions"]], inputs: { isEditMode: "isEditMode", form: "form", tooltipRemove: "tooltipRemove", tooltipEnableEditForm: "tooltipEnableEditForm", tooltipUpdate: "tooltipUpdate", tooltipSave: "tooltipSave" }, outputs: { removeEmitter: "remove", enableEditFormEmitter: "enableEditForm", updateEmitter: "update" }, decls: 7, vars: 5, consts: [[1, "d-flex", "flex-row"], [1, "ml-2"], ["type", "button", "size", "medium", "outline", "", "nbButton", "", "status", "danger", 3, "disabled", "nbTooltip", "click"], ["icon", "trash-2-outline"], ["class", "ml-2", 4, "ngIf"], ["type", "button", "size", "medium", "outline", "", "nbButton", "", "status", "primary", 3, "disabled", "nbTooltip", "click"], ["icon", "edit-outline"], ["icon", "save-outline"], ["type", "submit", "size", "medium", "outline", "", "nbButton", "", "status", "primary", 3, "disabled", "nbTooltip"]], template: function DefaultFormActionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵlistener("click", function DefaultFormActionsComponent_Template_button_click_2_listener($event) { return ctx.remove($event); });
        i0.ɵɵelement(3, "nb-icon", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, DefaultFormActionsComponent_div_4_Template, 3, 2, "div", 4);
        i0.ɵɵtemplate(5, DefaultFormActionsComponent_div_5_Template, 3, 2, "div", 4);
        i0.ɵɵtemplate(6, DefaultFormActionsComponent_div_6_Template, 3, 2, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.isEditMode)("nbTooltip", ctx.tooltipRemove);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isEditMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isEditMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isEditMode);
    } }, directives: [i1.NbButtonComponent, i1.NbTooltipDirective, i1.NbIconComponent, i2.NgIf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultFormActionsComponent, [{
        type: Component,
        args: [{
                selector: 'shared-default-form-actions',
                templateUrl: './default-form-actions.component.html',
                styleUrls: ['./default-form-actions.component.css']
            }]
    }], function () { return []; }, { isEditMode: [{
            type: Input
        }], form: [{
            type: Input
        }], removeEmitter: [{
            type: Output,
            args: ['remove']
        }], tooltipRemove: [{
            type: Input
        }], enableEditFormEmitter: [{
            type: Output,
            args: ['enableEditForm']
        }], tooltipEnableEditForm: [{
            type: Input
        }], updateEmitter: [{
            type: Output,
            args: ['update']
        }], tooltipUpdate: [{
            type: Input
        }], tooltipSave: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mb3JtLWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMtZm9ybS1jcnVkL2RlZmF1bHQtZm9ybS1hY3Rpb25zL2RlZmF1bHQtZm9ybS1hY3Rpb25zLmNvbXBvbmVudC50cyIsImxpYi9hY3Rpb25zLWZvcm0tY3J1ZC9kZWZhdWx0LWZvcm0tYWN0aW9ucy9kZWZhdWx0LWZvcm0tYWN0aW9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNVM0UsOEJBQ0U7SUFBQSxpQ0FFRTtJQURNLCtNQUFnQztJQUN0Qyw2QkFBdUM7SUFDekMsaUJBQVM7SUFDWCxpQkFBTTs7O0lBSkksZUFBeUI7SUFBekIsOENBQXlCLDJDQUFBOzs7O0lBT25DLDhCQUNFO0lBQUEsaUNBRUU7SUFETSx1TUFBd0I7SUFDOUIsNkJBQXVDO0lBQ3pDLGlCQUFTO0lBQ1gsaUJBQU07OztJQUpJLGVBQTBDO0lBQTFDLG9FQUEwQyxtQ0FBQTs7O0lBT3BELDhCQUNFO0lBQUEsaUNBRUU7SUFBQSw2QkFBdUM7SUFDekMsaUJBQVM7SUFDWCxpQkFBTTs7O0lBSkksZUFBeUI7SUFBekIsOENBQXlCLGlDQUFBOztBRHBCckMsTUFBTSxPQUFPLDJCQUEyQjtJQWtDdEM7UUE3QkEsUUFBUTtRQUNVLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUc1RCxnQkFBZ0I7UUFDVSwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBRzVFLFFBQVE7UUFDVSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFvQjVDLENBQUM7SUFkVixNQUFNLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQUs7UUFDekIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQU1ELFFBQVE7SUFDUixDQUFDOzt5SEFyQ1UsMkJBQTJCO21GQUEzQiwyQkFBMkI7UUNQeEMsOEJBQ0U7UUFDQSw4QkFDRTtRQUFBLGlDQUVFO1FBRm1FLDhHQUFTLGtCQUFjLElBQUM7UUFFM0YsNkJBQTBDO1FBQzVDLGlCQUFTO1FBQ1gsaUJBQU07UUFHTiw0RUFDRTtRQU9GLDRFQUNFO1FBT0YsNEVBQ0U7UUFLSixpQkFBTTs7UUE1Qk0sZUFBd0I7UUFBeEIsMENBQXdCLGdDQUFBO1FBTWhCLGVBQWtCO1FBQWxCLHFDQUFrQjtRQVFsQixlQUFrQjtRQUFsQixxQ0FBa0I7UUFRbEIsZUFBbUI7UUFBbkIsc0NBQW1COztrRERuQjFCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQ7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUdMLE1BQU07bUJBQUMsUUFBUTs7a0JBQ2YsS0FBSzs7a0JBR0wsTUFBTTttQkFBQyxnQkFBZ0I7O2tCQUN2QixLQUFLOztrQkFHTCxNQUFNO21CQUFDLFFBQVE7O2tCQUNmLEtBQUs7O2tCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzaGFyZWQtZGVmYXVsdC1mb3JtLWFjdGlvbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWZhdWx0LWZvcm0tYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGVmYXVsdC1mb3JtLWFjdGlvbnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Rm9ybUFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBpc0VkaXRNb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvcm06IGFueTtcclxuXHJcbiAgLy9SRU1PVkVcclxuICBAT3V0cHV0KCdyZW1vdmUnKSByZW1vdmVFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBASW5wdXQoKSB0b29sdGlwUmVtb3ZlOiBzdHJpbmc7XHJcblxyXG4gIC8vZW5hYmxlRWRpdEZvcm1cclxuICBAT3V0cHV0KCdlbmFibGVFZGl0Rm9ybScpIGVuYWJsZUVkaXRGb3JtRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQElucHV0KCkgdG9vbHRpcEVuYWJsZUVkaXRGb3JtOiBzdHJpbmc7XHJcblxyXG4gIC8vVVBEQVRFXHJcbiAgQE91dHB1dCgndXBkYXRlJykgdXBkYXRlRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQElucHV0KCkgdG9vbHRpcFVwZGF0ZTogc3RyaW5nO1xyXG5cclxuICAvL1NBVkVcclxuICBASW5wdXQoKSB0b29sdGlwU2F2ZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGV2ZW50KXtcclxuICAgIHRoaXMucmVtb3ZlRW1pdHRlci5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbmFibGVFZGl0Rm9ybShldmVudCl7XHJcbiAgICB0aGlzLmVuYWJsZUVkaXRGb3JtRW1pdHRlci5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoZXZlbnQpe1xyXG4gICAgdGhpcy51cGRhdGVFbWl0dGVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1yb3dcIj5cclxuICA8IS0tcmVtb3ZlLS0+XHJcbiAgPGRpdiBjbGFzcz1cIm1sLTJcIj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHNpemU9XCJtZWRpdW1cIiBvdXRsaW5lIG5iQnV0dG9uIHN0YXR1cz1cImRhbmdlclwiIChjbGljayk9XCJyZW1vdmUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNFZGl0TW9kZVwiIFtuYlRvb2x0aXBdPVwidG9vbHRpcFJlbW92ZVwiPlxyXG4gICAgICA8bmItaWNvbiBpY29uPVwidHJhc2gtMi1vdXRsaW5lXCI+PC9uYi1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS1FbmFibGUgZnJvbSAoZWRpdCktLT5cclxuICA8ZGl2IGNsYXNzPVwibWwtMlwiICpuZ0lmPVwiaXNFZGl0TW9kZVwiPlxyXG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZm9ybS5pbnZhbGlkXCIgdHlwZT1cImJ1dHRvblwiIHNpemU9XCJtZWRpdW1cIiBvdXRsaW5lIG5iQnV0dG9uIHN0YXR1cz1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiZW5hYmxlRWRpdEZvcm0oJGV2ZW50KVwiIFtuYlRvb2x0aXBdPVwidG9vbHRpcEVuYWJsZUVkaXRGb3JtXCI+XHJcbiAgICAgIDxuYi1pY29uIGljb249XCJlZGl0LW91dGxpbmVcIj48L25iLWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLXVwZGF0ZS0tPlxyXG4gIDxkaXYgY2xhc3M9XCJtbC0yXCIgKm5nSWY9XCJpc0VkaXRNb2RlXCI+XHJcbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIoZm9ybS5pbnZhbGlkIHx8ICFmb3JtLmRpcnR5KVwiIHR5cGU9XCJidXR0b25cIiBzaXplPVwibWVkaXVtXCIgb3V0bGluZSBuYkJ1dHRvbiBzdGF0dXM9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInVwZGF0ZSgkZXZlbnQpXCIgW25iVG9vbHRpcF09XCJ0b29sdGlwVXBkYXRlXCI+XHJcbiAgICAgIDxuYi1pY29uIGljb249XCJzYXZlLW91dGxpbmVcIj48L25iLWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLXNhdmUtLT5cclxuICA8ZGl2IGNsYXNzPVwibWwtMlwiICpuZ0lmPVwiIWlzRWRpdE1vZGVcIj5cclxuICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImZvcm0uaW52YWxpZFwiIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwibWVkaXVtXCIgb3V0bGluZSBuYkJ1dHRvbiBzdGF0dXM9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgW25iVG9vbHRpcF09XCJ0b29sdGlwU2F2ZVwiPlxyXG4gICAgICA8bmItaWNvbiBpY29uPVwic2F2ZS1vdXRsaW5lXCI+PC9uYi1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIl19