import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
var BooleanPipePipe = /** @class */ (function () {
    function BooleanPipePipe(translateSrv) {
        this.translateSrv = translateSrv;
    }
    BooleanPipePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var yesTransaltion;
        var noTransaltion;
        this.translateSrv.get('booleanPipe.yes').subscribe(function (translation) { return yesTransaltion = translation; }).unsubscribe();
        this.translateSrv.get('booleanPipe.no').subscribe(function (translation) { return noTransaltion = translation; }).unsubscribe();
        return value ? yesTransaltion : noTransaltion;
    };
    /** @nocollapse */ BooleanPipePipe.ɵfac = function BooleanPipePipe_Factory(t) { return new (t || BooleanPipePipe)(i0.ɵɵdirectiveInject(i1.TranslateService)); };
    /** @nocollapse */ BooleanPipePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "booleanPipe", type: BooleanPipePipe, pure: true });
    return BooleanPipePipe;
}());
export { BooleanPipePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BooleanPipePipe, [{
        type: Pipe,
        args: [{
                name: 'booleanPipe'
            }]
    }], function () { return [{ type: i1.TranslateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1waXBlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYm9vbGVhbi1waXBlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQUdwRDtJQUlFLHlCQUFtQixZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFDakQsQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxLQUFVO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDbEMsSUFBSSxjQUFjLENBQUM7UUFDbkIsSUFBSSxhQUFhLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUFXLElBQUssT0FBQSxjQUFjLEdBQUcsV0FBVyxFQUE1QixDQUE0QixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEgsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUFXLElBQUssT0FBQSxhQUFhLEdBQUcsV0FBVyxFQUEzQixDQUEyQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUcsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQ2hELENBQUM7cUdBVlUsZUFBZTs0RkFBZixlQUFlOzBCQU41QjtDQWtCQyxBQWZELElBZUM7U0FaWSxlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdib29sZWFuUGlwZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5QaXBlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmFuc2xhdGVTcnY6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBsZXQgeWVzVHJhbnNhbHRpb247XHJcbiAgICBsZXQgbm9UcmFuc2FsdGlvbjtcclxuICAgIHRoaXMudHJhbnNsYXRlU3J2LmdldCgnYm9vbGVhblBpcGUueWVzJykuc3Vic2NyaWJlKCh0cmFuc2xhdGlvbikgPT4geWVzVHJhbnNhbHRpb24gPSB0cmFuc2xhdGlvbikudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMudHJhbnNsYXRlU3J2LmdldCgnYm9vbGVhblBpcGUubm8nKS5zdWJzY3JpYmUoKHRyYW5zbGF0aW9uKSA9PiBub1RyYW5zYWx0aW9uID0gdHJhbnNsYXRpb24pLnVuc3Vic2NyaWJlKCk7XHJcbiAgICByZXR1cm4gdmFsdWUgPyB5ZXNUcmFuc2FsdGlvbiA6IG5vVHJhbnNhbHRpb247XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=