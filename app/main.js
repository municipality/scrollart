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
                    this.isWallVisible = true;
                }
                App.prototype.toggleWall = function () {
                    //Hide/show wall
                    var wall = document.getElementById("wall");
                    var toggleButton = document.getElementById("toggle-wall-button");
                    if (this.isWallVisible) {
                        wall.style.visibility = "hidden";
                        //Prevent scrolling when hidden
                        wall.style.position = "fixed";
                        toggleButton.innerHTML = "Show the Wall";
                        this.isWallVisible = false;
                    }
                    else {
                        wall.style.visibility = "visible";
                        //Fix the position of wall
                        wall.style.position = "relative";
                        toggleButton.innerHTML = "Hide the Wall";
                        this.isWallVisible = true;
                    }
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [background_component_1.Background, page_component_1.Page],
                        template: "\n            <button id=\"toggle-wall-button\" type=\"button\" (click)=\"toggleWall()\">Hide the Wall</button>\n            <background></background>\n            <page></page>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFFSTtvQkFEQSxrQkFBYSxHQUFhLElBQUksQ0FBQztnQkFHL0IsQ0FBQztnQkFFRCx3QkFBVSxHQUFWO29CQUNJLGdCQUFnQjtvQkFDaEIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNqRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO3dCQUNqQywrQkFBK0I7d0JBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzt3QkFFOUIsWUFBWSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7d0JBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUMvQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzt3QkFDbEMsMEJBQTBCO3dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7d0JBRWpDLFlBQVksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO3dCQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDOUIsQ0FBQztnQkFFTCxDQUFDO2dCQXBDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxLQUFLO3dCQUNoQixVQUFVLEVBQUcsQ0FBQyxpQ0FBVSxFQUFFLHFCQUFJLENBQUM7d0JBQy9CLFFBQVEsRUFBRyx5TEFJVjtxQkFDSixDQUFDOzt1QkFBQTtnQkE2QkYsVUFBQztZQUFELENBQUMsQUEzQkQsSUEyQkM7WUFFRCxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtCYWNrZ3JvdW5kfSBmcm9tICcuL2JhY2tncm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7UGFnZX0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdhcHAnLFxuICAgIGRpcmVjdGl2ZXMgOiBbQmFja2dyb3VuZCwgUGFnZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlLXdhbGwtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVXYWxsKClcIj5IaWRlIHRoZSBXYWxsPC9idXR0b24+XG4gICAgICAgICAgICA8YmFja2dyb3VuZD48L2JhY2tncm91bmQ+XG4gICAgICAgICAgICA8cGFnZT48L3BhZ2U+XG4gICAgYFxufSlcblxuY2xhc3MgQXBwIHtcbiAgICBpc1dhbGxWaXNpYmxlIDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG4gICAgdG9nZ2xlV2FsbCAoKSB7XG4gICAgICAgIC8vSGlkZS9zaG93IHdhbGxcbiAgICAgICAgbGV0IHdhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhbGxcIik7XG4gICAgICAgIGxldCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS13YWxsLWJ1dHRvblwiKTtcbiAgICAgICAgaWYgKHRoaXMuaXNXYWxsVmlzaWJsZSkge1xuICAgICAgICAgICAgd2FsbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIC8vUHJldmVudCBzY3JvbGxpbmcgd2hlbiBoaWRkZW5cbiAgICAgICAgICAgIHdhbGwuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG5cbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5pbm5lckhUTUwgPSBcIlNob3cgdGhlIFdhbGxcIjtcbiAgICAgICAgICAgIHRoaXMuaXNXYWxsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FsbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAvL0ZpeCB0aGUgcG9zaXRpb24gb2Ygd2FsbFxuICAgICAgICAgICAgd2FsbC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmlubmVySFRNTCA9IFwiSGlkZSB0aGUgV2FsbFwiO1xuICAgICAgICAgICAgdGhpcy5pc1dhbGxWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5ib290c3RyYXAoQXBwKTtcbiJdfQ==