import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@ngx-translate/core";
export class HeaderCrudComponent {
    constructor() {
        this.helpPageEmitter = new EventEmitter();
        this.addEmitter = new EventEmitter();
    }
    ngOnInit() {
    }
    helpPage(event) {
        this.helpPageEmitter.emit(event);
    }
    add(event) {
        this.addEmitter.emit(event);
    }
}
/** @nocollapse */ HeaderCrudComponent.ɵfac = function HeaderCrudComponent_Factory(t) { return new (t || HeaderCrudComponent)(); };
/** @nocollapse */ HeaderCrudComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderCrudComponent, selectors: [["shared-header-crud"]], inputs: { tooltipText: "tooltipText", title: "title", addButtonText: "addButtonText" }, outputs: { helpPageEmitter: "helpPage", addEmitter: "add" }, decls: 17, vars: 9, consts: [[1, "d-flex", "justify-content-between", "pb-3", "crud-card-header"], [1, "p-2"], [1, "d-flex", "align-items-center", "flex-row"], [1, "crud-title"], [1, "p-2", "ml-2"], ["status", "primary", "icon", "question-mark-circle-outline", 3, "click"], ["nbButton", "", "shape", "round", "size", "small", "outline", "", "status", "primary", 3, "nbTooltip", "click"], ["icon", "plus-circle-outline"]], template: function HeaderCrudComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 4);
        i0.ɵɵelementStart(8, "nb-icon", 5);
        i0.ɵɵlistener("click", function HeaderCrudComponent_Template_nb_icon_click_8_listener($event) { return ctx.helpPage($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 1);
        i0.ɵɵelement(10, "span");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 1);
        i0.ɵɵelementStart(12, "button", 6);
        i0.ɵɵlistener("click", function HeaderCrudComponent_Template_button_click_12_listener($event) { return ctx.add($event); });
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelement(14, "nb-icon", 7);
        i0.ɵɵtext(15);
        i0.ɵɵpipe(16, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 3, ctx.title));
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("nbTooltip", i0.ɵɵpipeBind1(13, 5, ctx.tooltipText));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 7, ctx.addButtonText), " ");
    } }, directives: [i1.NbIconComponent, i1.NbButtonComponent, i1.NbTooltipDirective], pipes: [i2.TranslatePipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderCrudComponent, [{
        type: Component,
        args: [{
                selector: 'shared-header-crud',
                templateUrl: './header-crud.component.html',
                styleUrls: ['./header-crud.component.css']
            }]
    }], function () { return []; }, { helpPageEmitter: [{
            type: Output,
            args: ['helpPage']
        }], addEmitter: [{
            type: Output,
            args: ['add']
        }], tooltipText: [{
            type: Input
        }], title: [{
            type: Input
        }], addButtonText: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNydWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2hlYWRlci1jcnVkL2hlYWRlci1jcnVkLmNvbXBvbmVudC50cyIsImxpYi9oZWFkZXItY3J1ZC9oZWFkZXItY3J1ZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBTzdFLE1BQU0sT0FBTyxtQkFBbUI7SUFROUI7UUFOb0Isb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ2pELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBS3RDLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sR0FBRyxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzt5R0FuQlUsbUJBQW1COzJFQUFuQixtQkFBbUI7UUNQaEMsOEJBRUU7UUFBQSw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSwrQkFBeUI7UUFBQSxZQUFxQjs7UUFBQSxpQkFBTztRQUN2RCxpQkFBTTtRQUNOLDhCQUNFO1FBQUEsa0NBQW9HO1FBQXJDLHVHQUFTLG9CQUFnQixJQUFDO1FBQUMsaUJBQVU7UUFDdEcsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBRU4sOEJBQ0U7UUFBQSx3QkFBYztRQUNoQixpQkFBTTtRQUVOLCtCQUNFO1FBQUEsa0NBRUU7UUFENEMsdUdBQVMsZUFBVyxJQUFDOztRQUNqRSw4QkFBOEM7UUFDOUMsYUFDRjs7UUFBQSxpQkFBUztRQUVYLGlCQUFNO1FBRVIsaUJBQU07O1FBckIyQixlQUFxQjtRQUFyQixxREFBcUI7UUFjMUMsZUFBcUM7UUFBckMsa0VBQXFDO1FBRTNDLGVBQ0Y7UUFERSx5RUFDRjs7a0REZlMsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7a0JBR0UsTUFBTTttQkFBQyxVQUFVOztrQkFDakIsTUFBTTttQkFBQyxLQUFLOztrQkFDWixLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2hhcmVkLWhlYWRlci1jcnVkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLWNydWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci1jcnVkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ3J1ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoJ2hlbHBQYWdlJykgaGVscFBhZ2VFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBAT3V0cHV0KCdhZGQnKSBhZGRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBASW5wdXQoKSB0b29sdGlwVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWRkQnV0dG9uVGV4dDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoZWxwUGFnZShldmVudCl7XHJcbiAgICB0aGlzLmhlbHBQYWdlRW1pdHRlci5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQoZXZlbnQpe1xyXG4gICAgdGhpcy5hZGRFbWl0dGVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwYi0zIGNydWQtY2FyZC1oZWFkZXJcIj5cclxuXHJcbiAgPGRpdiAgY2xhc3M9XCJwLTJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwLTJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNydWQtdGl0bGVcIj57e3RpdGxlIHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICBjbGFzcz1cInAtMiBtbC0yXCI+XHJcbiAgICAgICAgPG5iLWljb24gc3RhdHVzPVwicHJpbWFyeVwiICBpY29uPVwicXVlc3Rpb24tbWFyay1jaXJjbGUtb3V0bGluZVwiIChjbGljayk9XCJoZWxwUGFnZSgkZXZlbnQpXCI+PC9uYi1pY29uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICBjbGFzcz1cInAtMlwiPlxyXG4gICAgPHNwYW4+IDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAgY2xhc3M9XCJwLTJcIj5cclxuICAgIDxidXR0b24gbmJCdXR0b24gc2hhcGU9XCJyb3VuZFwiIHNpemU9XCJzbWFsbFwiIG91dGxpbmUgIHN0YXR1cz1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBbbmJUb29sdGlwXT1cInRvb2x0aXBUZXh0IHwgdHJhbnNsYXRlXCIgKGNsaWNrKT1cImFkZCgkZXZlbnQpXCI+XHJcbiAgICAgIDxuYi1pY29uIGljb249XCJwbHVzLWNpcmNsZS1vdXRsaW5lXCI+PC9uYi1pY29uPlxyXG4gICAgICB7e2FkZEJ1dHRvblRleHQgfCB0cmFuc2xhdGV9fVxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbiJdfQ==