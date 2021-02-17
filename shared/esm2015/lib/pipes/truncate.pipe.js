import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TruncatePipe {
    transform(text, limit = 20, suffix = '...') {
        if (text !== undefined) {
            return text.length > limit ? text.substring(0, limit) + suffix : text;
        }
    }
}
/** @nocollapse */ TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
/** @nocollapse */ TruncatePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TruncatePipe, [{
        type: Pipe,
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy90cnVuY2F0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sWUFBWTtJQUV2QixTQUFTLENBQUMsSUFBUyxFQUFFLFFBQWdCLEVBQUUsRUFBRSxTQUFpQixLQUFLO1FBQzdELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUN2RTtJQUNILENBQUM7OzJGQU5VLFlBQVk7a0ZBQVosWUFBWTtrREFBWixZQUFZO2NBSHhCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsVUFBVTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndHJ1bmNhdGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcnVuY2F0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHRleHQ6IGFueSwgbGltaXQ6IG51bWJlciA9IDIwLCBzdWZmaXg6IHN0cmluZyA9ICcuLi4nKTogYW55IHtcclxuICAgIGlmICh0ZXh0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRleHQubGVuZ3RoID4gbGltaXQgPyB0ZXh0LnN1YnN0cmluZygwLCBsaW1pdCkgKyBzdWZmaXggOiB0ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=