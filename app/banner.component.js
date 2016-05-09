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
                Banner.prototype.ngOnInit = function () {
                    this.bannerList = this.bannerService.getBannerImages();
                };
                Banner = __decorate([
                    core_1.Component({
                        selector: 'banner',
                        providers: [banner_service_1.BannerService],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFTSSxnQkFBcUIsYUFBNkI7b0JBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtvQkFSbEQsZUFBVSxHQUFjLEVBQUUsQ0FBQztvQkFDM0Isb0NBQW9DO29CQUNwQyxZQUFPLEdBQVksQ0FBQyxDQUFDO29CQUNyQixXQUFNLEdBQVcsRUFBRSxDQUFDO29CQUVwQixtQ0FBbUM7b0JBQ25DLG1CQUFjLEdBQVksSUFBSSxDQUFDO2dCQUcvQixDQUFDO2dCQUVELHVCQUFNLEdBQU4sVUFBUSxLQUFLO29CQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRWYsbUNBQW1DO29CQUNuQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw4QkFBYSxHQUFiO29CQUFBLGlCQW9CQztvQkFuQkcsSUFBSSxNQUFNLEdBQUc7d0JBQ1QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDeEQsNEJBQTRCO3dCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLFFBQVEsR0FBRzs0QkFDWCxxQkFBcUI7NEJBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7NEJBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs0QkFDaEIsMkNBQTJDOzRCQUMzQyxPQUFNLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztnQ0FDakIsc0RBQXNEO2dDQUN0RCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLEdBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7NEJBQzNDLENBQUM7NEJBQ0QsZ0JBQWdCOzRCQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDLENBQUM7d0JBQ0YsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQy9DLENBQUMsQ0FBQztvQkFDRixNQUFNLEVBQUUsQ0FBQztnQkFDYixDQUFDO2dCQUVELHlCQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzRCxDQUFDO2dCQTNETDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxRQUFRO3dCQUNuQixTQUFTLEVBQUcsQ0FBQyw4QkFBYSxDQUFDO3dCQUMzQixRQUFRLEVBQUcsc09BTVY7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBa0RGLGFBQUM7WUFBRCxDQUFDLEFBaERELElBZ0RDO1lBaERELDJCQWdEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Jhbm5lclNlcnZpY2V9IGZyb20gJy4vYmFubmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnYmFubmVyJyxcbiAgICBwcm92aWRlcnMgOiBbQmFubmVyU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgaWQ9J2Jhbm5lci1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCIjaW1hZ2VTcmMgb2YgYmFubmVyTGlzdFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgI2ltYWdlIChsb2FkKT1cImxvYWRlZChpbWFnZSlcIiBjbGFzcz1cImJhbm5lci1pbWFnZVwiIHNyYz17e2ltYWdlU3JjfX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEJhbm5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYmFubmVyTGlzdCA6IHN0cmluZ1tdID0gW107XG4gICAgLy91c2VkIHRvIHNlZSB3aGVuIGFsbCBpbWFnZXMgbG9hZGVkXG4gICAgY291bnRlciA6IG51bWJlciA9IDA7XG4gICAgaW1hZ2VzIDogYW55W10gPSBbXTtcblxuICAgIC8vSG93IG9mdGVuIHRoZSBiYW5uZXIgY2hhbmdlcyAobXMpXG4gICAgY2hhbmdlSW50ZXJ2YWwgOiBudW1iZXIgPSA1MDAwO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYmFubmVyU2VydmljZSA6IEJhbm5lclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBsb2FkZWQgKGltYWdlKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICB0aGlzLmNvdW50ZXIrKztcblxuICAgICAgICAvL2lmIGFsbCBiYW5uZXIgaW1hZ2VzIGFyZSBsb2FkZWQhIVxuICAgICAgICBpZih0aGlzLmNvdW50ZXIgPT0gdGhpcy5iYW5uZXJMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQUxMIEJBTk5FUiBJTUFHRVMgTE9BREVEXCIpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQmFubmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlQmFubmVyICgpIHtcbiAgICAgICAgdmFyIHJlcGVhdCA9ICgpPT57XG4gICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLmltYWdlcy5sZW5ndGgpO1xuICAgICAgICAgICAgLy9NYWtlIHRoZSByYW5kb20gaW1hZ2Ugc2hvd1xuICAgICAgICAgICAgdGhpcy5pbWFnZXNbcmFuZF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB2YXIgaW5uZXJSZXAgPSAoKT0+e1xuICAgICAgICAgICAgICAgIC8vSGlkZSBwcmV2aW91cyBpbWFnZVxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzW3JhbmRdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gcmFuZDtcbiAgICAgICAgICAgICAgICAvL2dldCBuZXcgcmFuZG9tIG51bWJlciB0aGF0IGlzbid0IGEgcmVwZWF0XG4gICAgICAgICAgICAgICAgd2hpbGUocmFuZCA9PSB0ZW1wKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLmltYWdlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICByYW5kID0gKHJhbmQrMSkldGhpcy5iYW5uZXJMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9TaG93IG5ldyBpbWFnZVxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzW3JhbmRdLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldEludGVydmFsKGlubmVyUmVwLCB0aGlzLmNoYW5nZUludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVwZWF0KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLmJhbm5lckxpc3QgPSB0aGlzLmJhbm5lclNlcnZpY2UuZ2V0QmFubmVySW1hZ2VzKCk7XG4gICAgfVxufVxuIl19