import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (text, limit, suffix) {
        if (limit === void 0) { limit = 20; }
        if (suffix === void 0) { suffix = '...'; }
        if (text !== undefined) {
            return text.length > limit ? text.substring(0, limit) + suffix : text;
        }
    };
    /** @nocollapse */ TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
    /** @nocollapse */ TruncatePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "truncate", type: TruncatePipe, pure: true });
    return TruncatePipe;
}());
export { TruncatePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TruncatePipe, [{
        type: Pipe,
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy90cnVuY2F0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRDtJQUFBO0tBVUM7SUFMQyxnQ0FBUyxHQUFULFVBQVUsSUFBUyxFQUFFLEtBQWtCLEVBQUUsTUFBc0I7UUFBMUMsc0JBQUEsRUFBQSxVQUFrQjtRQUFFLHVCQUFBLEVBQUEsY0FBc0I7UUFDN0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQzsrRkFOVSxZQUFZO3NGQUFaLFlBQVk7dUJBTHpCO0NBWUMsQUFWRCxJQVVDO1NBUFksWUFBWTtrREFBWixZQUFZO2NBSHhCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsVUFBVTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndHJ1bmNhdGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcnVuY2F0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHRleHQ6IGFueSwgbGltaXQ6IG51bWJlciA9IDIwLCBzdWZmaXg6IHN0cmluZyA9ICcuLi4nKTogYW55IHtcclxuICAgIGlmICh0ZXh0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRleHQubGVuZ3RoID4gbGltaXQgPyB0ZXh0LnN1YnN0cmluZygwLCBsaW1pdCkgKyBzdWZmaXggOiB0ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=