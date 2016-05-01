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
                Square = __decorate([
                    core_1.Component({
                        selector: 'square',
                        template: "\n        <div class=\"square\">\n            <p class=\"square-title\">{{title}}</p>\n            <img class=\"square-image\" src='{{pathToImages}}{{src}}'>\n            <p class=\"square-description\">{{description}}</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Square);
                return Square;
            }());
            exports_1("Square", Square);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9hcHAvc3F1YXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQU1JO29CQUxBLGlCQUFZLEdBQVUsaUJBQWlCLENBQUM7Z0JBT3hDLENBQUM7Z0JBTkQ7b0JBQUMsWUFBSyxFQUFFOztxREFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzJEQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7bURBQUE7Z0JBZlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFHLHNQQU1WO3FCQUNKLENBQUM7OzBCQUFBO2dCQVdGLGFBQUM7WUFBRCxDQUFDLEFBVEQsSUFTQztZQVRELDJCQVNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdzcXVhcmUnLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic3F1YXJlXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInNxdWFyZS10aXRsZVwiPnt7dGl0bGV9fTwvcD5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJzcXVhcmUtaW1hZ2VcIiBzcmM9J3t7cGF0aFRvSW1hZ2VzfX17e3NyY319Jz5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic3F1YXJlLWRlc2NyaXB0aW9uXCI+e3tkZXNjcmlwdGlvbn19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgU3F1YXJlIHtcbiAgICBwYXRoVG9JbWFnZXM6c3RyaW5nID0gXCJpbWFnZXMvc3F1YXJlcy9cIjtcbiAgICBASW5wdXQoKSB0aXRsZTpzdHJpbmc7XG4gICAgQElucHV0KCkgZGVzY3JpcHRpb246c3RyaW5nO1xuICAgIEBJbnB1dCgpIHNyYzpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==