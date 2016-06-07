System.register(['angular2/platform/browser', 'angular2/core', './tetris.component'], function(exports_1, context_1) {
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
    var browser_1, core_1, tetris_component_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tetris_component_1_1) {
                tetris_component_1 = tetris_component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [tetris_component_1.Tetris],
                        template: "\n        <img id=\"banner\" class=\"app-width\" src=\"images/banner.png\">\n        <tetris></tetris>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFFSTtnQkFFQSxDQUFDO2dCQWJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRyxDQUFDLHlCQUFNLENBQUM7d0JBQ3JCLFFBQVEsRUFBRyw4R0FHVjtxQkFDSixDQUFDOzt1QkFBQTtnQkFRRixVQUFDO1lBQUQsQ0FBQyxBQU5ELElBTUM7WUFJRCxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge1RldHJpc30gZnJvbSAnLi90ZXRyaXMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yIDogJ2FwcCcsXHJcbiAgICBkaXJlY3RpdmVzIDogW1RldHJpc10sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8aW1nIGlkPVwiYmFubmVyXCIgY2xhc3M9XCJhcHAtd2lkdGhcIiBzcmM9XCJpbWFnZXMvYmFubmVyLnBuZ1wiPlxyXG4gICAgICAgIDx0ZXRyaXM+PC90ZXRyaXM+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5jbGFzcyBBcHAge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmJvb3RzdHJhcChBcHApO1xyXG4iXX0=