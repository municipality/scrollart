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
                    //Set up bannerList (hard-coded bannerX.jpg, X = number)
                    for (var index = 1; index <= 2; index++) {
                        this.bannerList.push("banner" + index + ".jpg");
                    }
                }
                Banner.prototype.loaded = function (image) {
                    var _this = this;
                    this.images.push(image);
                    this.counter++;
                    //if all loaded
                    if (this.counter == this.bannerList.length) {
                        console.log("LOADED");
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
                                    rand = Math.floor(Math.random() * _this.images.length);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFPSTtvQkFOQSxpQkFBWSxHQUFVLGlCQUFpQixDQUFDO29CQUN4QyxlQUFVLEdBQWMsRUFBRSxDQUFDO29CQUMzQixvQ0FBb0M7b0JBQ3BDLFlBQU8sR0FBWSxDQUFDLENBQUM7b0JBQ3JCLFdBQU0sR0FBVyxFQUFFLENBQUM7b0JBR2hCLHdEQUF3RDtvQkFDeEQsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBUyxLQUFLLFNBQU0sQ0FBQyxDQUFDO29CQUMvQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsdUJBQU0sR0FBTixVQUFRLEtBQUs7b0JBQWIsaUJBeUJDO29CQXhCRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNmLGVBQWU7b0JBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLElBQUksTUFBTSxHQUFHOzRCQUNULElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3hELDRCQUE0Qjs0QkFDNUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxRQUFRLEdBQUc7Z0NBQ1gscUJBQXFCO2dDQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dDQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7Z0NBQ2hCLDJDQUEyQztnQ0FDM0MsT0FBTSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7b0NBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUN4RCxDQUFDO2dDQUNELGdCQUFnQjtnQ0FDaEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzs0QkFDeEMsQ0FBQyxDQUFDOzRCQUNGLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLENBQUMsQ0FBQzt3QkFDRixNQUFNLEVBQUUsQ0FBQztvQkFDYixDQUFDO2dCQUNMLENBQUM7Z0JBakRMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLFFBQVE7d0JBQ25CLFFBQVEsRUFBRyxzUEFNVjtxQkFDSixDQUFDOzswQkFBQTtnQkF5Q0YsYUFBQztZQUFELENBQUMsQUF2Q0QsSUF1Q0M7WUF2Q0QsMkJBdUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdiYW5uZXInLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGlkPSdiYW5uZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwiI2ltYWdlU3JjIG9mIGJhbm5lckxpc3RcIj5cbiAgICAgICAgICAgICAgICA8aW1nICNpbWFnZSAobG9hZCk9XCJsb2FkZWQoaW1hZ2UpXCIgY2xhc3M9XCJiYW5uZXItaW1hZ2VcIiBzcmM9e3twYXRoVG9JbWFnZXN9fXt7aW1hZ2VTcmN9fT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQmFubmVyIHtcbiAgICBwYXRoVG9JbWFnZXM6c3RyaW5nID0gXCJpbWFnZXMvYmFubmVycy9cIjtcbiAgICBiYW5uZXJMaXN0IDogc3RyaW5nW10gPSBbXTtcbiAgICAvL3VzZWQgdG8gc2VlIHdoZW4gYWxsIGltYWdlcyBsb2FkZWRcbiAgICBjb3VudGVyIDogbnVtYmVyID0gMDtcbiAgICBpbWFnZXMgOiBhbnlbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvL1NldCB1cCBiYW5uZXJMaXN0IChoYXJkLWNvZGVkIGJhbm5lclguanBnLCBYID0gbnVtYmVyKVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IDI7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuYmFubmVyTGlzdC5wdXNoKGBiYW5uZXIke2luZGV4fS5qcGdgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkZWQgKGltYWdlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICB0aGlzLmNvdW50ZXIrKztcbiAgICAgICAgLy9pZiBhbGwgbG9hZGVkXG4gICAgICAgIGlmKHRoaXMuY291bnRlciA9PSB0aGlzLmJhbm5lckxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxPQURFRFwiKTtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSAoKT0+e1xuICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMuaW1hZ2VzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy9NYWtlIHRoZSByYW5kb20gaW1hZ2Ugc2hvd1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzW3JhbmRdLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIHZhciBpbm5lclJlcCA9ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vSGlkZSBwcmV2aW91cyBpbWFnZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlc1tyYW5kXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSByYW5kO1xuICAgICAgICAgICAgICAgICAgICAvL2dldCBuZXcgcmFuZG9tIG51bWJlciB0aGF0IGlzbid0IGEgcmVwZWF0XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKHJhbmQgPT0gdGVtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLmltYWdlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vU2hvdyBuZXcgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNbcmFuZF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbChpbm5lclJlcCwgNTAwMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVwZWF0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=