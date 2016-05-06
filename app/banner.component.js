System.register(['angular2/core', './banner.service'], function(exports_1, context_1) {
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
    var core_1, banner_service_1;
    var Banner;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (banner_service_1_1) {
                banner_service_1 = banner_service_1_1;
            }],
        execute: function() {
            Banner = (function () {
                function Banner(bannerService) {
                    this.bannerService = bannerService;
                    this.bannerList = [];
                    //used to see when all images loaded
                    this.counter = 0;
                    this.images = [];
                    //How often the banner changes (ms)
                    this.changeInterval = 5000;
                    this.bannerList = bannerService.getBannerImages();
                }
                Banner.prototype.loaded = function (image) {
                    this.images.push(image);
                    this.counter++;
                    //if all banner images are loaded!!
                    if (this.counter == this.bannerList.length) {
                        console.warn("ALL BANNER IMAGES LOADED");
                        this.animateBanner();
                    }
                };
                Banner.prototype.animateBanner = function () {
                    var _this = this;
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
                        setInterval(innerRep, _this.changeInterval);
                    };
                    repeat();
                };
                Banner = __decorate([
                    core_1.Component({
                        selector: 'banner',
                        template: "\n        <div id='banner-container'>\n            <div *ngFor=\"#imageSrc of bannerList\">\n                <img #image (load)=\"loaded(image)\" class=\"banner-image\" src={{imageSrc}}>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [banner_service_1.BannerService])
                ], Banner);
                return Banner;
            }());
            exports_1("Banner", Banner);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFTSSxnQkFBcUIsYUFBNkI7b0JBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtvQkFSbEQsZUFBVSxHQUFjLEVBQUUsQ0FBQztvQkFDM0Isb0NBQW9DO29CQUNwQyxZQUFPLEdBQVksQ0FBQyxDQUFDO29CQUNyQixXQUFNLEdBQVcsRUFBRSxDQUFDO29CQUVwQixtQ0FBbUM7b0JBQ25DLG1CQUFjLEdBQVksSUFBSSxDQUFDO29CQUczQixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdEQsQ0FBQztnQkFFRCx1QkFBTSxHQUFOLFVBQVEsS0FBSztvQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUVmLG1DQUFtQztvQkFDbkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQzt3QkFDekMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsOEJBQWEsR0FBYjtvQkFBQSxpQkFvQkM7b0JBbkJHLElBQUksTUFBTSxHQUFHO3dCQUNULElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3hELDRCQUE0Qjt3QkFDNUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxRQUFRLEdBQUc7NEJBQ1gscUJBQXFCOzRCQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOzRCQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7NEJBQ2hCLDJDQUEyQzs0QkFDM0MsT0FBTSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7Z0NBQ2pCLHNEQUFzRDtnQ0FDdEQsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxHQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDOzRCQUMzQyxDQUFDOzRCQUNELGdCQUFnQjs0QkFDaEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQyxDQUFDO3dCQUNGLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUMvQyxDQUFDLENBQUM7b0JBQ0YsTUFBTSxFQUFFLENBQUM7Z0JBQ2IsQ0FBQztnQkF2REw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFHLHNPQU1WO3FCQUNKLENBQUM7OzBCQUFBO2dCQStDRixhQUFDO1lBQUQsQ0FBQyxBQTdDRCxJQTZDQztZQTdDRCwyQkE2Q0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QmFubmVyU2VydmljZX0gZnJvbSAnLi9iYW5uZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdiYW5uZXInLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGlkPSdiYW5uZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwiI2ltYWdlU3JjIG9mIGJhbm5lckxpc3RcIj5cbiAgICAgICAgICAgICAgICA8aW1nICNpbWFnZSAobG9hZCk9XCJsb2FkZWQoaW1hZ2UpXCIgY2xhc3M9XCJiYW5uZXItaW1hZ2VcIiBzcmM9e3tpbWFnZVNyY319PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYW5uZXIge1xuICAgIGJhbm5lckxpc3QgOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vdXNlZCB0byBzZWUgd2hlbiBhbGwgaW1hZ2VzIGxvYWRlZFxuICAgIGNvdW50ZXIgOiBudW1iZXIgPSAwO1xuICAgIGltYWdlcyA6IGFueVtdID0gW107XG5cbiAgICAvL0hvdyBvZnRlbiB0aGUgYmFubmVyIGNoYW5nZXMgKG1zKVxuICAgIGNoYW5nZUludGVydmFsIDogbnVtYmVyID0gNTAwMDtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGJhbm5lclNlcnZpY2UgOiBCYW5uZXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYmFubmVyTGlzdCA9IGJhbm5lclNlcnZpY2UuZ2V0QmFubmVySW1hZ2VzKCk7XG4gICAgfVxuXG4gICAgbG9hZGVkIChpbWFnZSkge1xuICAgICAgICB0aGlzLmltYWdlcy5wdXNoKGltYWdlKTtcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XG5cbiAgICAgICAgLy9pZiBhbGwgYmFubmVyIGltYWdlcyBhcmUgbG9hZGVkISFcbiAgICAgICAgaWYodGhpcy5jb3VudGVyID09IHRoaXMuYmFubmVyTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkFMTCBCQU5ORVIgSU1BR0VTIExPQURFRFwiKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUJhbm5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZUJhbm5lciAoKSB7XG4gICAgICAgIHZhciByZXBlYXQgPSAoKT0+e1xuICAgICAgICAgICAgdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5pbWFnZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIC8vTWFrZSB0aGUgcmFuZG9tIGltYWdlIHNob3dcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzW3JhbmRdLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgdmFyIGlubmVyUmVwID0gKCk9PntcbiAgICAgICAgICAgICAgICAvL0hpZGUgcHJldmlvdXMgaW1hZ2VcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlc1tyYW5kXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHJhbmQ7XG4gICAgICAgICAgICAgICAgLy9nZXQgbmV3IHJhbmRvbSBudW1iZXIgdGhhdCBpc24ndCBhIHJlcGVhdFxuICAgICAgICAgICAgICAgIHdoaWxlKHJhbmQgPT0gdGVtcCkge1xuICAgICAgICAgICAgICAgICAgICAvL3JhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5pbWFnZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFuZCA9IChyYW5kKzEpJXRoaXMuYmFubmVyTGlzdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vU2hvdyBuZXcgaW1hZ2VcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlc1tyYW5kXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRJbnRlcnZhbChpbm5lclJlcCwgdGhpcy5jaGFuZ2VJbnRlcnZhbCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcGVhdCgpO1xuICAgIH1cbn1cbiJdfQ==