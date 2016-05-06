System.register(['angular2/platform/browser', 'angular2/core', './background.component', './background.service', './wall.component', './wall.service', './banner.service'], function(exports_1, context_1) {
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
    var browser_1, core_1, background_component_1, background_service_1, wall_component_1, wall_service_1, banner_service_1;
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
            function (background_service_1_1) {
                background_service_1 = background_service_1_1;
            },
            function (wall_component_1_1) {
                wall_component_1 = wall_component_1_1;
            },
            function (wall_service_1_1) {
                wall_service_1 = wall_service_1_1;
            },
            function (banner_service_1_1) {
                banner_service_1 = banner_service_1_1;
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
            browser_1.bootstrap(App, [background_service_1.BackgroundService, wall_service_1.WallService, banner_service_1.BannerService]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBRUk7b0JBREEsa0JBQWEsR0FBYSxJQUFJLENBQUM7b0JBSS9CLGFBQVEsR0FBYSxJQUFJLENBQUM7Z0JBRjFCLENBQUM7Z0JBR0Qsd0JBQVUsR0FBVjtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkMsQ0FBQztnQkFyQkw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsS0FBSzt3QkFDaEIsVUFBVSxFQUFHLENBQUMsaUNBQVUsRUFBRSxxQkFBSSxDQUFDO3dCQUMvQixRQUFRLEVBQUcseVBBT1Y7cUJBQ0osQ0FBQzs7dUJBQUE7Z0JBYUYsVUFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBSUQsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSwwQkFBVyxFQUFFLDhCQUFhLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtCYWNrZ3JvdW5kfSBmcm9tICcuL2JhY2tncm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7QmFja2dyb3VuZFNlcnZpY2V9IGZyb20gJy4vYmFja2dyb3VuZC5zZXJ2aWNlJztcbmltcG9ydCB7V2FsbH0gZnJvbSAnLi93YWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge1dhbGxTZXJ2aWNlfSBmcm9tICcuL3dhbGwuc2VydmljZSc7XG5pbXBvcnQge0Jhbm5lclNlcnZpY2V9IGZyb20gJy4vYmFubmVyLnNlcnZpY2UnO1xuXG5cblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2FwcCcsXG4gICAgZGlyZWN0aXZlcyA6IFtCYWNrZ3JvdW5kLCBXYWxsXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGUtd2FsbC1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZVdhbGwoKVwiPkhpZGUgdGhlIFdhbGw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxiYWNrZ3JvdW5kPjwvYmFja2dyb3VuZD5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzaG93V2FsbFwiPlxuICAgICAgICAgICAgICAgIDx3YWxsPjwvd2FsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgYFxufSlcblxuY2xhc3MgQXBwIHtcbiAgICBpc1dhbGxWaXNpYmxlIDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgIH1cblxuICAgIHNob3dXYWxsIDogYm9vbGVhbiA9IHRydWU7XG4gICAgdG9nZ2xlV2FsbCgpIHtcbiAgICAgICAgdGhpcy5zaG93V2FsbCA9ICF0aGlzLnNob3dXYWxsO1xuICAgIH1cblxuXG59XG5cblxuXG5ib290c3RyYXAoQXBwLCBbQmFja2dyb3VuZFNlcnZpY2UsIFdhbGxTZXJ2aWNlLCBCYW5uZXJTZXJ2aWNlXSk7XG4iXX0=