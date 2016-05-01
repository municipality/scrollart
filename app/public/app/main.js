System.register(['angular2/platform/browser', 'angular2/core', './background.component', './page.component'], function(exports_1, context_1) {
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
    var browser_1, core_1, background_component_1, page_component_1;
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
            function (page_component_1_1) {
                page_component_1 = page_component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [background_component_1.Background, page_component_1.Page],
                        template: "\n            <background></background>\n            <page></page>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9hcHAvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUNJO2dCQUNBLENBQUM7Z0JBWEw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsS0FBSzt3QkFDaEIsVUFBVSxFQUFHLENBQUMsaUNBQVUsRUFBRSxxQkFBSSxDQUFDO3dCQUMvQixRQUFRLEVBQUcsMEVBR1Y7cUJBQ0osQ0FBQzs7dUJBQUE7Z0JBS0YsVUFBQztZQUFELENBQUMsQUFIRCxJQUdDO1lBRUQsbUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QmFja2dyb3VuZH0gZnJvbSAnLi9iYWNrZ3JvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQge1BhZ2V9IGZyb20gJy4vcGFnZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnYXBwJyxcbiAgICBkaXJlY3RpdmVzIDogW0JhY2tncm91bmQsIFBhZ2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICAgICAgPGJhY2tncm91bmQ+PC9iYWNrZ3JvdW5kPlxuICAgICAgICAgICAgPHBhZ2U+PC9wYWdlPlxuICAgIGBcbn0pXG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgIH1cbn1cblxuYm9vdHN0cmFwKEFwcCk7XG4iXX0=