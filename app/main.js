System.register(['angular2/platform/browser', 'angular2/core', './tetris.component', './intro.component', './mobile.service', './scrolling.service'], function(exports_1, context_1) {
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
    var browser_1, core_1, tetris_component_1, intro_component_1, mobile_service_1, scrolling_service_1;
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
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [tetris_component_1.Tetris, intro_component_1.Intro],
                        template: "\n        <img id=\"banner\" class=\"app-width\" src=\"images/banner.png\">\n        <tetris></tetris>\n        <intro></intro>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App, [mobile_service_1.MobileService, scrolling_service_1.ScrollingService]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBRUk7Z0JBRUEsQ0FBQztnQkFkTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxLQUFLO3dCQUNoQixVQUFVLEVBQUcsQ0FBQyx5QkFBTSxFQUFFLHVCQUFLLENBQUM7d0JBQzVCLFFBQVEsRUFBRyx1SUFJVjtxQkFDSixDQUFDOzt1QkFBQTtnQkFRRixVQUFDO1lBQUQsQ0FBQyxBQU5ELElBTUM7WUFJRCxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLDhCQUFhLEVBQUUsb0NBQWdCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge1RldHJpc30gZnJvbSAnLi90ZXRyaXMuY29tcG9uZW50JztcbmltcG9ydCB7SW50cm99IGZyb20gJy4vaW50cm8uY29tcG9uZW50JztcbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi9tb2JpbGUuc2VydmljZSc7XG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnYXBwJyxcbiAgICBkaXJlY3RpdmVzIDogW1RldHJpcywgSW50cm9dLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8aW1nIGlkPVwiYmFubmVyXCIgY2xhc3M9XCJhcHAtd2lkdGhcIiBzcmM9XCJpbWFnZXMvYmFubmVyLnBuZ1wiPlxuICAgICAgICA8dGV0cmlzPjwvdGV0cmlzPlxuICAgICAgICA8aW50cm8+PC9pbnRybz5cbiAgICBgXG59KVxuXG5jbGFzcyBBcHAge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG59XG5cblxuXG5ib290c3RyYXAoQXBwLCBbTW9iaWxlU2VydmljZSwgU2Nyb2xsaW5nU2VydmljZV0pO1xuIl19