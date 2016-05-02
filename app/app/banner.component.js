System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Banner;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Banner = (function () {
                function Banner() {
                    this.pathToImages = "images/banners/";
                    this.bannerList = [];
                    //used to see when all images loaded
                    this.counter = 0;
                    this.images = [];
                    this.numBannerImages = 8;
                    //Set up bannerList (hard-coded bannerX.jpg, X = number)
                    for (var index = 1; index <= this.numBannerImages; index++) {
                        this.bannerList.push("banner" + index + ".jpg");
                    }
                }
                Banner.prototype.loaded = function (image) {
                    var _this = this;
                    this.images.push(image);
                    this.counter++;
                    //if all banner images are loaded!!
                    if (this.counter == this.bannerList.length) {
                        console.warn("ALL BANNER IMAGES LOADED");
                        var repeat = function () {
                            var rand = Math.floor(Math.random() * _this.images.length);
                            //Make the random image show
                            _this.images[rand].style.opacity = 1;
                            var innerRep = function () {
                                //Hide previous image
                                _this.images[rand].style.opacity = 0;
                                var temp = rand;
                                //get new random number that isn't a repeat
                                while (rand == temp) {
                                    //rand = Math.floor(Math.random()*this.images.length);
                                    rand = (rand + 1) % _this.bannerList.length;
                                }
                                //Show new image
                                _this.images[rand].style.opacity = 1;
                            };
                            setInterval(innerRep, 5000);
                        };
                        repeat();
                    }
                };
                Banner = __decorate([
                    core_1.Component({
                        selector: 'banner',
                        template: "\n        <div id='banner-container'>\n            <div *ngFor=\"#imageSrc of bannerList\">\n                <img #image (load)=\"loaded(image)\" class=\"banner-image\" src={{pathToImages}}{{imageSrc}}>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Banner);
                return Banner;
            }());
            exports_1("Banner", Banner);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Jhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFRSTtvQkFQQSxpQkFBWSxHQUFVLGlCQUFpQixDQUFDO29CQUN4QyxlQUFVLEdBQWMsRUFBRSxDQUFDO29CQUMzQixvQ0FBb0M7b0JBQ3BDLFlBQU8sR0FBWSxDQUFDLENBQUM7b0JBQ3JCLFdBQU0sR0FBVyxFQUFFLENBQUM7b0JBQ3BCLG9CQUFlLEdBQVksQ0FBQyxDQUFDO29CQUd6Qix3REFBd0Q7b0JBQ3hELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO3dCQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFTLEtBQUssU0FBTSxDQUFDLENBQUM7b0JBQy9DLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCx1QkFBTSxHQUFOLFVBQVEsS0FBSztvQkFBYixpQkEwQkM7b0JBekJHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2YsbUNBQW1DO29CQUNuQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLE1BQU0sR0FBRzs0QkFDVCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUN4RCw0QkFBNEI7NEJBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7NEJBQ3BDLElBQUksUUFBUSxHQUFHO2dDQUNYLHFCQUFxQjtnQ0FDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQ0FDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO2dDQUNoQiwyQ0FBMkM7Z0NBQzNDLE9BQU0sSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO29DQUNqQixzREFBc0Q7b0NBQ3RELElBQUksR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsR0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQ0FDM0MsQ0FBQztnQ0FDRCxnQkFBZ0I7Z0NBQ2hCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQzs0QkFDRixXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNoQyxDQUFDLENBQUM7d0JBQ0YsTUFBTSxFQUFFLENBQUM7b0JBQ2IsQ0FBQztnQkFDTCxDQUFDO2dCQW5ETDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxRQUFRO3dCQUNuQixRQUFRLEVBQUcsc1BBTVY7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBMkNGLGFBQUM7WUFBRCxDQUFDLEFBekNELElBeUNDO1lBekNELDJCQXlDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnYmFubmVyJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD0nYmFubmVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cIiNpbWFnZVNyYyBvZiBiYW5uZXJMaXN0XCI+XG4gICAgICAgICAgICAgICAgPGltZyAjaW1hZ2UgKGxvYWQpPVwibG9hZGVkKGltYWdlKVwiIGNsYXNzPVwiYmFubmVyLWltYWdlXCIgc3JjPXt7cGF0aFRvSW1hZ2VzfX17e2ltYWdlU3JjfX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEJhbm5lciB7XG4gICAgcGF0aFRvSW1hZ2VzOnN0cmluZyA9IFwiaW1hZ2VzL2Jhbm5lcnMvXCI7XG4gICAgYmFubmVyTGlzdCA6IHN0cmluZ1tdID0gW107XG4gICAgLy91c2VkIHRvIHNlZSB3aGVuIGFsbCBpbWFnZXMgbG9hZGVkXG4gICAgY291bnRlciA6IG51bWJlciA9IDA7XG4gICAgaW1hZ2VzIDogYW55W10gPSBbXTtcbiAgICBudW1CYW5uZXJJbWFnZXMgOiBudW1iZXIgPSA4O1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvL1NldCB1cCBiYW5uZXJMaXN0IChoYXJkLWNvZGVkIGJhbm5lclguanBnLCBYID0gbnVtYmVyKVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IHRoaXMubnVtQmFubmVySW1hZ2VzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLmJhbm5lckxpc3QucHVzaChgYmFubmVyJHtpbmRleH0uanBnYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGVkIChpbWFnZSkge1xuICAgICAgICB0aGlzLmltYWdlcy5wdXNoKGltYWdlKTtcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG4gICAgICAgIC8vaWYgYWxsIGJhbm5lciBpbWFnZXMgYXJlIGxvYWRlZCEhXG4gICAgICAgIGlmKHRoaXMuY291bnRlciA9PSB0aGlzLmJhbm5lckxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBTEwgQkFOTkVSIElNQUdFUyBMT0FERURcIik7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gKCk9PntcbiAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLmltYWdlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vTWFrZSB0aGUgcmFuZG9tIGltYWdlIHNob3dcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlc1tyYW5kXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB2YXIgaW5uZXJSZXAgPSAoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvL0hpZGUgcHJldmlvdXMgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNbcmFuZF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gcmFuZDtcbiAgICAgICAgICAgICAgICAgICAgLy9nZXQgbmV3IHJhbmRvbSBudW1iZXIgdGhhdCBpc24ndCBhIHJlcGVhdFxuICAgICAgICAgICAgICAgICAgICB3aGlsZShyYW5kID09IHRlbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLmltYWdlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZCA9IChyYW5kKzEpJXRoaXMuYmFubmVyTGlzdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9TaG93IG5ldyBpbWFnZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlc1tyYW5kXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNldEludGVydmFsKGlubmVyUmVwLCA1MDAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXBlYXQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==