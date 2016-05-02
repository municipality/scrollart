System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Square;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Square = (function () {
                function Square() {
                    this.pathToImages = "images/squares/";
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Square.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Square.prototype, "description", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Square.prototype, "src", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Square.prototype, "descriptionLinkURL", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Square.prototype, "descriptionLink", void 0);
                Square = __decorate([
                    core_1.Component({
                        selector: 'square',
                        template: "\n        <div class=\"square\">\n            <p class=\"square-title\">{{title}}</p>\n            <img class=\"square-image\" src='{{pathToImages}}{{src}}'>\n            <p class=\"square-description\">{{description}} <a target=\"_blank\" href=\"{{descriptionLinkURL}}\">{{descriptionLink}}</a></p>\n\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Square);
                return Square;
            }());
            exports_1("Square", Square);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNxdWFyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFRSTtvQkFQQSxpQkFBWSxHQUFVLGlCQUFpQixDQUFDO2dCQVN4QyxDQUFDO2dCQVJEO29CQUFDLFlBQUssRUFBRTs7cURBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzsyREFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O21EQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7a0VBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzsrREFBQTtnQkFsQlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFHLHFVQU9WO3FCQUNKLENBQUM7OzBCQUFBO2dCQWFGLGFBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELDJCQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdzcXVhcmUnLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic3F1YXJlXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInNxdWFyZS10aXRsZVwiPnt7dGl0bGV9fTwvcD5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJzcXVhcmUtaW1hZ2VcIiBzcmM9J3t7cGF0aFRvSW1hZ2VzfX17e3NyY319Jz5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic3F1YXJlLWRlc2NyaXB0aW9uXCI+e3tkZXNjcmlwdGlvbn19IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJ7e2Rlc2NyaXB0aW9uTGlua1VSTH19XCI+e3tkZXNjcmlwdGlvbkxpbmt9fTwvYT48L3A+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNxdWFyZSB7XG4gICAgcGF0aFRvSW1hZ2VzOnN0cmluZyA9IFwiaW1hZ2VzL3NxdWFyZXMvXCI7XG4gICAgQElucHV0KCkgdGl0bGU6c3RyaW5nO1xuICAgIEBJbnB1dCgpIGRlc2NyaXB0aW9uOnN0cmluZztcbiAgICBASW5wdXQoKSBzcmM6c3RyaW5nO1xuICAgIEBJbnB1dCgpIGRlc2NyaXB0aW9uTGlua1VSTDpzdHJpbmc7XG4gICAgQElucHV0KCkgZGVzY3JpcHRpb25MaW5rOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbn1cbiJdfQ==