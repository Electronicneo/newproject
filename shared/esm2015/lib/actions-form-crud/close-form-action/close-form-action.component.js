import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
export class CloseFormActionComponent {
    constructor() {
        this.closeEditFormEmitter = new EventEmitter();
    }
    ngOnInit() {
    }
    close(event) {
        this.closeEditFormEmitter.emit(event);
    }
}
/** @nocollapse */ CloseFormActionComponent.ɵfac = function CloseFormActionComponent_Factory(t) { return new (t || CloseFormActionComponent)(); };
/** @nocollapse */ CloseFormActionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CloseFormActionComponent, selectors: [["shared-close-form-action"]], inputs: { tooltip: "tooltip" }, outputs: { closeEditFormEmitter: "closeEditForm" }, decls: 2, vars: 1, consts: [["type", "button", "size", "medium", "outline", "", "nbButton", "", "status", "primary", 3, "nbTooltip", "click"], ["icon", "close-outline"]], template: function CloseFormActionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function CloseFormActionComponent_Template_button_click_0_listener($event) { return ctx.close($event); });
        i0.ɵɵelement(1, "nb-icon", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nbTooltip", ctx.tooltip);
    } }, directives: [i1.NbButtonComponent, i1.NbTooltipDirective, i1.NbIconComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CloseFormActionComponent, [{
        type: Component,
        args: [{
                selector: 'shared-close-form-action',
                templateUrl: './close-form-action.component.html',
                styleUrls: ['./close-form-action.component.css']
            }]
    }], function () { return []; }, { closeEditFormEmitter: [{
            type: Output,
            args: ['closeEditForm']
        }], tooltip: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtZm9ybS1hY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMtZm9ybS1jcnVkL2Nsb3NlLWZvcm0tYWN0aW9uL2Nsb3NlLWZvcm0tYWN0aW9uLmNvbXBvbmVudC50cyIsImxpYi9hY3Rpb25zLWZvcm0tY3J1ZC9jbG9zZS1mb3JtLWFjdGlvbi9jbG9zZS1mb3JtLWFjdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFPN0UsTUFBTSxPQUFPLHdCQUF3QjtJQUtuQztRQUh5Qix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBRzFELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O21IQVpVLHdCQUF3QjtnRkFBeEIsd0JBQXdCO1FDTm5DLGlDQUdFO1FBRk0sMkdBQVMsaUJBQWEsSUFBQztRQUU3Qiw2QkFBd0M7UUFDMUMsaUJBQVM7O1FBRkQsdUNBQXFCOztrRERJbEIsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDs7a0JBR0UsTUFBTTttQkFBQyxlQUFlOztrQkFDdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NoYXJlZC1jbG9zZS1mb3JtLWFjdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb3NlLWZvcm0tYWN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbG9zZS1mb3JtLWFjdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENsb3NlRm9ybUFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoJ2Nsb3NlRWRpdEZvcm0nKSBjbG9zZUVkaXRGb3JtRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZShldmVudCl7XHJcbiAgICB0aGlzLmNsb3NlRWRpdEZvcm1FbWl0dGVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc2l6ZT1cIm1lZGl1bVwiIG91dGxpbmUgbmJCdXR0b24gc3RhdHVzPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICBbbmJUb29sdGlwXT1cInRvb2x0aXBcIj5cclxuICAgIDxuYi1pY29uIGljb249XCJjbG9zZS1vdXRsaW5lXCI+PC9uYi1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG5cclxuIl19