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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFDSTtnQkFDQSxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRyxDQUFDLGlDQUFVLEVBQUUscUJBQUksQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLDBFQUdWO3FCQUNKLENBQUM7O3VCQUFBO2dCQUtGLFVBQUM7WUFBRCxDQUFDLEFBSEQsSUFHQztZQUVELG1CQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0JhY2tncm91bmR9IGZyb20gJy4vYmFja2dyb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHtQYWdlfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2FwcCcsXG4gICAgZGlyZWN0aXZlcyA6IFtCYWNrZ3JvdW5kLCBQYWdlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgICAgIDxiYWNrZ3JvdW5kPjwvYmFja2dyb3VuZD5cbiAgICAgICAgICAgIDxwYWdlPjwvcGFnZT5cbiAgICBgXG59KVxuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICB9XG59XG5cbmJvb3RzdHJhcChBcHApO1xuIl19