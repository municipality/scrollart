System.register(['angular2/platform/browser', 'angular2/core', './background.component', './wall.component'], function(exports_1, context_1) {
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
    var browser_1, core_1, background_component_1, wall_component_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (background_component_1_1) {
                background_component_1 = background_component_1_1;
            },
            function (wall_component_1_1) {
                wall_component_1 = wall_component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.isWallVisible = true;
                    this.showWall = true;
                }
                App.prototype.toggleWall = function () {
                    this.showWall = !this.showWall;
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [background_component_1.Background, wall_component_1.Wall],
                        template: "\n            <button id=\"toggle-wall-button\" type=\"button\" (click)=\"toggleWall()\">Hide the Wall</button>\n            <background></background>\n            <div *ngIf=\"showWall\">\n                <wall></wall>\n            </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBSUk7b0JBSEEsa0JBQWEsR0FBYSxJQUFJLENBQUM7b0JBQy9CLGFBQVEsR0FBYSxJQUFJLENBQUM7Z0JBRzFCLENBQUM7Z0JBRUQsd0JBQVUsR0FBVjtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkMsQ0FBQztnQkF0Qkw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsS0FBSzt3QkFDaEIsVUFBVSxFQUFHLENBQUMsaUNBQVUsRUFBRSxxQkFBSSxDQUFDO3dCQUMvQixRQUFRLEVBQUcseVBBT1Y7cUJBQ0osQ0FBQzs7dUJBQUE7Z0JBY0YsVUFBQztZQUFELENBQUMsQUFaRCxJQVlDO1lBSUQsbUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QmFja2dyb3VuZH0gZnJvbSAnLi9iYWNrZ3JvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQge0JhY2tncm91bmRTZXJ2aWNlfSBmcm9tICcuL2JhY2tncm91bmQuc2VydmljZSc7XG5pbXBvcnQge1dhbGx9IGZyb20gJy4vd2FsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtXYWxsU2VydmljZX0gZnJvbSAnLi93YWxsLnNlcnZpY2UnO1xuaW1wb3J0IHtCYW5uZXJTZXJ2aWNlfSBmcm9tICcuL2Jhbm5lci5zZXJ2aWNlJztcblxuXG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdhcHAnLFxuICAgIGRpcmVjdGl2ZXMgOiBbQmFja2dyb3VuZCwgV2FsbF0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlLXdhbGwtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVXYWxsKClcIj5IaWRlIHRoZSBXYWxsPC9idXR0b24+XG4gICAgICAgICAgICA8YmFja2dyb3VuZD48L2JhY2tncm91bmQ+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd1dhbGxcIj5cbiAgICAgICAgICAgICAgICA8d2FsbD48L3dhbGw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgIGBcbn0pXG5cbmNsYXNzIEFwcCB7XG4gICAgaXNXYWxsVmlzaWJsZSA6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHNob3dXYWxsIDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgfVxuXG4gICAgdG9nZ2xlV2FsbCgpIHtcbiAgICAgICAgdGhpcy5zaG93V2FsbCA9ICF0aGlzLnNob3dXYWxsO1xuICAgIH1cblxuXG59XG5cblxuXG5ib290c3RyYXAoQXBwKTtcbiJdfQ==