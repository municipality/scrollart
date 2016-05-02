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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNxdWFyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFNSTtvQkFMQSxpQkFBWSxHQUFVLGlCQUFpQixDQUFDO2dCQU94QyxDQUFDO2dCQU5EO29CQUFDLFlBQUssRUFBRTs7cURBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzsyREFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O21EQUFBO2dCQWZaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFFBQVE7d0JBQ25CLFFBQVEsRUFBRyxzUEFNVjtxQkFDSixDQUFDOzswQkFBQTtnQkFXRixhQUFDO1lBQUQsQ0FBQyxBQVRELElBU0M7WUFURCwyQkFTQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnc3F1YXJlJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNxdWFyZVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzcXVhcmUtdGl0bGVcIj57e3RpdGxlfX08L3A+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwic3F1YXJlLWltYWdlXCIgc3JjPSd7e3BhdGhUb0ltYWdlc319e3tzcmN9fSc+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInNxdWFyZS1kZXNjcmlwdGlvblwiPnt7ZGVzY3JpcHRpb259fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNxdWFyZSB7XG4gICAgcGF0aFRvSW1hZ2VzOnN0cmluZyA9IFwiaW1hZ2VzL3NxdWFyZXMvXCI7XG4gICAgQElucHV0KCkgdGl0bGU6c3RyaW5nO1xuICAgIEBJbnB1dCgpIGRlc2NyaXB0aW9uOnN0cmluZztcbiAgICBASW5wdXQoKSBzcmM6c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuIl19