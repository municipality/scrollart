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
                }
                App.prototype.toggleWall = function () {
                    //Hide/show wall
                    var wall = document.getElementById("wall");
                    var background = document.getElementById("background");
                    var toggleButton = document.getElementById("toggle-wall-button");
                    if (this.isWallVisible) {
                        //Work-around for banner delay
                        wall.style.opacity = "0";
                        wall.style["z-index"] = "-1";
                        //Prevent scrolling when hidden
                        wall.style.position = "fixed";
                        //background.style.position = "relative";
                        toggleButton.innerHTML = "Show the Wall";
                        toggleButton.style.opacity = ".5";
                        this.isWallVisible = false;
                    }
                    else {
                        //Work-around for banner delay
                        wall.style.opacity = "1";
                        wall.style["z-index"] = "1";
                        //Fix the position of wall
                        wall.style.position = "relative";
                        //background.style.position = "fixed";
                        toggleButton.innerHTML = "Hide the Wall";
                        toggleButton.style.opacity = "1";
                        this.isWallVisible = true;
                    }
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [background_component_1.Background, wall_component_1.Wall],
                        template: "\n            <button id=\"toggle-wall-button\" type=\"button\" (click)=\"toggleWall()\">Hide the Wall</button>\n            <background></background>\n            <wall></wall>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFFSTtvQkFEQSxrQkFBYSxHQUFhLElBQUksQ0FBQztnQkFHL0IsQ0FBQztnQkFFRCx3QkFBVSxHQUFWO29CQUNJLGdCQUFnQjtvQkFDaEIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNqRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDckIsOEJBQThCO3dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUU3QiwrQkFBK0I7d0JBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzt3QkFDOUIseUNBQXlDO3dCQUV6QyxZQUFZLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQzt3QkFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDL0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSiw4QkFBOEI7d0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBRTVCLDBCQUEwQjt3QkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO3dCQUNqQyxzQ0FBc0M7d0JBRXRDLFlBQVksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO3dCQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUM5QixDQUFDO2dCQUVMLENBQUM7Z0JBL0NMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRyxDQUFDLGlDQUFVLEVBQUUscUJBQUksQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLHlMQUlWO3FCQUNKLENBQUM7O3VCQUFBO2dCQXdDRixVQUFDO1lBQUQsQ0FBQyxBQXRDRCxJQXNDQztZQUVELG1CQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0JhY2tncm91bmR9IGZyb20gJy4vYmFja2dyb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHtXYWxsfSBmcm9tICcuL3dhbGwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2FwcCcsXG4gICAgZGlyZWN0aXZlcyA6IFtCYWNrZ3JvdW5kLCBXYWxsXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGUtd2FsbC1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZVdhbGwoKVwiPkhpZGUgdGhlIFdhbGw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxiYWNrZ3JvdW5kPjwvYmFja2dyb3VuZD5cbiAgICAgICAgICAgIDx3YWxsPjwvd2FsbD5cbiAgICBgXG59KVxuXG5jbGFzcyBBcHAge1xuICAgIGlzV2FsbFZpc2libGUgOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsICgpIHtcbiAgICAgICAgLy9IaWRlL3Nob3cgd2FsbFxuICAgICAgICBsZXQgd2FsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FsbFwiKTtcbiAgICAgICAgbGV0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgICAgIGxldCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS13YWxsLWJ1dHRvblwiKTtcbiAgICAgICAgaWYgKHRoaXMuaXNXYWxsVmlzaWJsZSkge1xuICAgICAgICAgICAgLy9Xb3JrLWFyb3VuZCBmb3IgYmFubmVyIGRlbGF5XG4gICAgICAgICAgICB3YWxsLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgIHdhbGwuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCItMVwiO1xuXG4gICAgICAgICAgICAvL1ByZXZlbnQgc2Nyb2xsaW5nIHdoZW4gaGlkZGVuXG4gICAgICAgICAgICB3YWxsLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uaW5uZXJIVE1MID0gXCJTaG93IHRoZSBXYWxsXCI7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uc3R5bGUub3BhY2l0eSA9IFwiLjVcIjtcbiAgICAgICAgICAgIHRoaXMuaXNXYWxsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9Xb3JrLWFyb3VuZCBmb3IgYmFubmVyIGRlbGF5XG4gICAgICAgICAgICB3YWxsLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgIHdhbGwuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCIxXCI7XG5cbiAgICAgICAgICAgIC8vRml4IHRoZSBwb3NpdGlvbiBvZiB3YWxsXG4gICAgICAgICAgICB3YWxsLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuXG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uaW5uZXJIVE1MID0gXCJIaWRlIHRoZSBXYWxsXCI7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICAgICAgdGhpcy5pc1dhbGxWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5ib290c3RyYXAoQXBwKTtcbiJdfQ==