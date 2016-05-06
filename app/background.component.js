System.register(['angular2/core', './background.service'], function(exports_1, context_1) {
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
    var core_1, background_service_1;
    var Background;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (background_service_1_1) {
                background_service_1 = background_service_1_1;
            }],
        execute: function() {
            Background = (function () {
                function Background(backgroundService) {
                    this.backgroundService = backgroundService;
                    this.photos = [];
                    this.photos = backgroundService.getPhotos();
                }
                Background.prototype.imageClick = function (image) {
                    return false;
                };
                Background = __decorate([
                    core_1.Component({
                        selector: 'background',
                        //template for row by column image generation
                        //#image lets you access "this" in the "loaded" function
                        template: "\n        <div id='background'>\n            <tr *ngFor=\"#row of photos\">\n                <td *ngFor=\"#item of row\">\n                    <a href=\"#\" (click)=\"imageClick(image)\">\n                        <img #image id='background-{{item.id}}' class=\"background-images\" src='{{item.src}}'>\n                    </a>\n                </td>\n            </tr>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [background_service_1.BackgroundService])
                ], Background);
                return Background;
            }());
            exports_1("Background", Background);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZ3JvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFPSSxvQkFBcUIsaUJBQXFDO29CQUFyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO29CQU4xRCxXQUFNLEdBQWEsRUFBRSxDQUFDO29CQU9sQixJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoRCxDQUFDO2dCQU5ELCtCQUFVLEdBQVYsVUFBWSxLQUFLO29CQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBdEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFlBQVk7d0JBQ3ZCLDZDQUE2Qzt3QkFDN0Msd0RBQXdEO3dCQUN4RCxRQUFRLEVBQUcsd1lBVVY7cUJBQ0osQ0FBQzs7OEJBQUE7Z0JBYUYsaUJBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELG1DQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0JhY2tncm91bmRTZXJ2aWNlfSBmcm9tICcuL2JhY2tncm91bmQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JhY2tncm91bmQnLFxuICAgIC8vdGVtcGxhdGUgZm9yIHJvdyBieSBjb2x1bW4gaW1hZ2UgZ2VuZXJhdGlvblxuICAgIC8vI2ltYWdlIGxldHMgeW91IGFjY2VzcyBcInRoaXNcIiBpbiB0aGUgXCJsb2FkZWRcIiBmdW5jdGlvblxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGlkPSdiYWNrZ3JvdW5kJz5cbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjcm93IG9mIHBob3Rvc1wiPlxuICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCIjaXRlbSBvZiByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwiaW1hZ2VDbGljayhpbWFnZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgI2ltYWdlIGlkPSdiYWNrZ3JvdW5kLXt7aXRlbS5pZH19JyBjbGFzcz1cImJhY2tncm91bmQtaW1hZ2VzXCIgc3JjPSd7e2l0ZW0uc3JjfX0nPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcbiAgICBwaG90b3MgOiBhbnlbXVtdID0gW107XG5cbiAgICBpbWFnZUNsaWNrIChpbWFnZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYmFja2dyb3VuZFNlcnZpY2UgOiBCYWNrZ3JvdW5kU2VydmljZSkge1xuICAgICAgICB0aGlzLnBob3RvcyA9IGJhY2tncm91bmRTZXJ2aWNlLmdldFBob3RvcygpO1xuICAgIH1cblxufVxuIl19