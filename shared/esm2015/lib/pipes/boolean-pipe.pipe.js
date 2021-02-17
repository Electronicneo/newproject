import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class BooleanPipePipe {
    constructor(translateSrv) {
        this.translateSrv = translateSrv;
    }
    transform(value, ...args) {
        let yesTransaltion;
        let noTransaltion;
        this.translateSrv.get('booleanPipe.yes').subscribe((translation) => yesTransaltion = translation).unsubscribe();
        this.translateSrv.get('booleanPipe.no').subscribe((translation) => noTransaltion = translation).unsubscribe();
        return value ? yesTransaltion : noTransaltion;
    }
}
/** @nocollapse */ BooleanPipePipe.ɵfac = function BooleanPipePipe_Factory(t) { return new (t || BooleanPipePipe)(i0.ɵɵdirectiveInject(i1.TranslateService)); };
/** @nocollapse */ BooleanPipePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "booleanPipe", type: BooleanPipePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BooleanPipePipe, [{
        type: Pipe,
        args: [{
                name: 'booleanPipe'
            }]
    }], function () { return [{ type: i1.TranslateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1waXBlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYm9vbGVhbi1waXBlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQU1wRCxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFtQixZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFDakQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFVLEVBQUUsR0FBRyxJQUFXO1FBQ2xDLElBQUksY0FBYyxDQUFDO1FBQ25CLElBQUksYUFBYSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEgsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5RyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDaEQsQ0FBQzs7aUdBVlUsZUFBZTt3RkFBZixlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdib29sZWFuUGlwZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5QaXBlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmFuc2xhdGVTcnY6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBsZXQgeWVzVHJhbnNhbHRpb247XHJcbiAgICBsZXQgbm9UcmFuc2FsdGlvbjtcclxuICAgIHRoaXMudHJhbnNsYXRlU3J2LmdldCgnYm9vbGVhblBpcGUueWVzJykuc3Vic2NyaWJlKCh0cmFuc2xhdGlvbikgPT4geWVzVHJhbnNhbHRpb24gPSB0cmFuc2xhdGlvbikudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMudHJhbnNsYXRlU3J2LmdldCgnYm9vbGVhblBpcGUubm8nKS5zdWJzY3JpYmUoKHRyYW5zbGF0aW9uKSA9PiBub1RyYW5zYWx0aW9uID0gdHJhbnNsYXRpb24pLnVuc3Vic2NyaWJlKCk7XHJcbiAgICByZXR1cm4gdmFsdWUgPyB5ZXNUcmFuc2FsdGlvbiA6IG5vVHJhbnNhbHRpb247XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=