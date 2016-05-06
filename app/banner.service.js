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
    var BannerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BannerService = (function () {
                function BannerService() {
                    this.pathToImages = "images/banners/";
                    this.bannerList = [];
                    this.numBannerImages = 8;
                    //Set up bannerList (hard-coded bannerX.jpg, X = number)
                    for (var index = 1; index <= this.numBannerImages; index++) {
                        this.bannerList.push(this.pathToImages + "banner" + index + ".jpg");
                    }
                }
                BannerService.prototype.getBannerImages = function () {
                    return this.bannerList;
                };
                BannerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BannerService);
                return BannerService;
            }());
            exports_1("BannerService", BannerService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUtJO29CQUpBLGlCQUFZLEdBQVUsaUJBQWlCLENBQUM7b0JBQ3hDLGVBQVUsR0FBYyxFQUFFLENBQUM7b0JBQzNCLG9CQUFlLEdBQVksQ0FBQyxDQUFDO29CQUd6Qix3REFBd0Q7b0JBQ3hELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO3dCQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsWUFBWSxjQUFTLEtBQUssU0FBTSxDQUFDLENBQUM7b0JBQ25FLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx1Q0FBZSxHQUFmO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzQixDQUFDO2dCQWZMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWdCYixvQkFBQztZQUFELENBQUMsQUFmRCxJQWVDO1lBZkQseUNBZUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYW5uZXJTZXJ2aWNlIHtcbiAgICBwYXRoVG9JbWFnZXM6c3RyaW5nID0gXCJpbWFnZXMvYmFubmVycy9cIjtcbiAgICBiYW5uZXJMaXN0IDogc3RyaW5nW10gPSBbXTtcbiAgICBudW1CYW5uZXJJbWFnZXMgOiBudW1iZXIgPSA4O1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvL1NldCB1cCBiYW5uZXJMaXN0IChoYXJkLWNvZGVkIGJhbm5lclguanBnLCBYID0gbnVtYmVyKVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IHRoaXMubnVtQmFubmVySW1hZ2VzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLmJhbm5lckxpc3QucHVzaChgJHt0aGlzLnBhdGhUb0ltYWdlc31iYW5uZXIke2luZGV4fS5qcGdgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhbm5lckltYWdlcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhbm5lckxpc3Q7XG4gICAgfVxufVxuIl19