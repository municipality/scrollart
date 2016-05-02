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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFFSTtvQkFEQSxrQkFBYSxHQUFhLElBQUksQ0FBQztnQkFHL0IsQ0FBQztnQkFFRCx3QkFBVSxHQUFWO29CQUNJLGdCQUFnQjtvQkFDaEIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNqRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDckIsOEJBQThCO3dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUU3QiwrQkFBK0I7d0JBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzt3QkFDOUIseUNBQXlDO3dCQUV6QyxZQUFZLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQzt3QkFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osOEJBQThCO3dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUU1QiwwQkFBMEI7d0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzt3QkFDakMsc0NBQXNDO3dCQUV0QyxZQUFZLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQzt3QkFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQzlCLENBQUM7Z0JBRUwsQ0FBQztnQkE3Q0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsS0FBSzt3QkFDaEIsVUFBVSxFQUFHLENBQUMsaUNBQVUsRUFBRSxxQkFBSSxDQUFDO3dCQUMvQixRQUFRLEVBQUcseUxBSVY7cUJBQ0osQ0FBQzs7dUJBQUE7Z0JBc0NGLFVBQUM7WUFBRCxDQUFDLEFBcENELElBb0NDO1lBRUQsbUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QmFja2dyb3VuZH0gZnJvbSAnLi9iYWNrZ3JvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQge1dhbGx9IGZyb20gJy4vd2FsbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnYXBwJyxcbiAgICBkaXJlY3RpdmVzIDogW0JhY2tncm91bmQsIFdhbGxdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRvZ2dsZS13YWxsLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlV2FsbCgpXCI+SGlkZSB0aGUgV2FsbDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJhY2tncm91bmQ+PC9iYWNrZ3JvdW5kPlxuICAgICAgICAgICAgPHdhbGw+PC93YWxsPlxuICAgIGBcbn0pXG5cbmNsYXNzIEFwcCB7XG4gICAgaXNXYWxsVmlzaWJsZSA6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cblxuICAgIHRvZ2dsZVdhbGwgKCkge1xuICAgICAgICAvL0hpZGUvc2hvdyB3YWxsXG4gICAgICAgIGxldCB3YWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWxsXCIpO1xuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICAgICAgbGV0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLXdhbGwtYnV0dG9uXCIpO1xuICAgICAgICBpZiAodGhpcy5pc1dhbGxWaXNpYmxlKSB7XG4gICAgICAgICAgICAvL1dvcmstYXJvdW5kIGZvciBiYW5uZXIgZGVsYXlcbiAgICAgICAgICAgIHdhbGwuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgd2FsbC5zdHlsZVtcInotaW5kZXhcIl0gPSBcIi0xXCI7XG5cbiAgICAgICAgICAgIC8vUHJldmVudCBzY3JvbGxpbmcgd2hlbiBoaWRkZW5cbiAgICAgICAgICAgIHdhbGwuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICAvL2JhY2tncm91bmQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5pbm5lckhUTUwgPSBcIlNob3cgdGhlIFdhbGxcIjtcbiAgICAgICAgICAgIHRoaXMuaXNXYWxsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9Xb3JrLWFyb3VuZCBmb3IgYmFubmVyIGRlbGF5XG4gICAgICAgICAgICB3YWxsLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgIHdhbGwuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCIxXCI7XG5cbiAgICAgICAgICAgIC8vRml4IHRoZSBwb3NpdGlvbiBvZiB3YWxsXG4gICAgICAgICAgICB3YWxsLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuXG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uaW5uZXJIVE1MID0gXCJIaWRlIHRoZSBXYWxsXCI7XG4gICAgICAgICAgICB0aGlzLmlzV2FsbFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmJvb3RzdHJhcChBcHApO1xuIl19