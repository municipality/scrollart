System.register(['angular2/core', './mobile.service'], function(exports_1, context_1) {
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
    var core_1, mobile_service_1;
    var Tetris;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            Tetris = (function () {
                function Tetris(mobileService) {
                    this.mobileService = mobileService;
                }
                Tetris.prototype.handleTop = function (t) {
                    var _this = this;
                    this.t = t;
                    var me = this;
                    var start = 0;
                    var height;
                    if (this.mobileService.isMobile()) {
                        height = window.outerHeight;
                    }
                    else {
                        height = window.innerHeight;
                    }
                    this.container = document.getElementsByClassName("tetris-container")[0];
                    this.container.style.height = height + "px";
                    this.tetris = document.getElementsByTagName("tetris")[0];
                    var handler = function (e) {
                        var rect = _this.tetris.getBoundingClientRect();
                        if (rect.top > 0) {
                            _this.container.style.position = "absolute";
                            _this.container.style.top = "0";
                            _this.container.style.bottom = "";
                            t.style.position = "absolute";
                            t.style.bottom = _this.tetris.offsetHeight;
                        }
                        else if (rect.bottom <= height) {
                            _this.container.style.position = "absolute";
                            _this.container.style.bottom = "0";
                            _this.container.style.top = "";
                            t.style.position = "absolute";
                            t.style.bottom = 0;
                            t.style.top = "";
                        }
                        else {
                            _this.container.style.position = "fixed";
                            _this.container.style.bottom = "0";
                            _this.container.style.top = "";
                            t.style.position = "fixed";
                            t.style.bottom = height * ((rect.bottom - height) / (rect.bottom - rect.top - height));
                        }
                    };
                    document.addEventListener("scroll", handler);
                    window.addEventListener("resize", handler);
                };
                Tetris.prototype.handleBottom = function (b) {
                    document.getElementById("app-loading-mask").style.display = "none";
                    // this.b = b;
                    // var me = this;
                    // var top = me.b.offsetTop;
                    // document.addEventListener("scroll", (e) => {
                    //     if(me.b.style.top == "") {
                    //         me.b.style.top = top + "px";
                    //     }
                    //     me.b.style.top = top + (window.pageYOffset) + "px";
                    // });
                };
                Tetris = __decorate([
                    core_1.Component({
                        selector: 'tetris',
                        template: "\n        <div class=\"tetris-container app-width\">\n\n            <img #b class=\"tetris-bottom app-width\" (load)=\"handleBottom(b)\" src=\"images/tetris-bottom-big.jpg\">\n        </div>\n        <img #t class=\"tetris-top app-width\" (load)=\"handleTop(t)\" src=\"images/tetris-top.png\">\n    "
                    }), 
                    __metadata('design:paramtypes', [mobile_service_1.MobileService])
                ], Tetris);
                return Tetris;
            }());
            exports_1("Tetris", Tetris);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFLSSxnQkFBcUIsYUFBNkI7b0JBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtnQkFFbEQsQ0FBQztnQkFFRCwwQkFBUyxHQUFULFVBQVcsQ0FBQztvQkFBWixpQkE4Q0M7b0JBN0NHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNYLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2QsSUFBSSxNQUFNLENBQUM7b0JBQ1gsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUNoQyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUNoQyxDQUFDO29CQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekQsSUFBSSxPQUFPLEdBQUcsVUFBQyxDQUFDO3dCQUNaLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFFL0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7NEJBQzNDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7NEJBRWpDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs0QkFDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7d0JBQzlDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDN0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs0QkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs0QkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs0QkFDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7NEJBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzt3QkFDckIsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDOzRCQUN4QyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDOzRCQUU5QixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7NEJBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN4RixDQUFDO29CQUVMLENBQUMsQ0FBQTtvQkFDRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUU3QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELDZCQUFZLEdBQVosVUFBYyxDQUFDO29CQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDbkUsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLDRCQUE0QjtvQkFDNUIsK0NBQStDO29CQUMvQyxpQ0FBaUM7b0JBQ2pDLHVDQUF1QztvQkFDdkMsUUFBUTtvQkFDUiwwREFBMEQ7b0JBQzFELE1BQU07Z0JBQ1YsQ0FBQztnQkE5RUw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDZTQU1UO3FCQUNKLENBQUM7OzBCQUFBO2dCQXNFRixhQUFDO1lBQUQsQ0FBQyxBQXJFRCxJQXFFQztZQXJFRCwyQkFxRUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi9tb2JpbGUuc2VydmljZSc7XHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yOiAndGV0cmlzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRldHJpcy1jb250YWluZXIgYXBwLXdpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICA8aW1nICNiIGNsYXNzPVwidGV0cmlzLWJvdHRvbSBhcHAtd2lkdGhcIiAobG9hZCk9XCJoYW5kbGVCb3R0b20oYilcIiBzcmM9XCJpbWFnZXMvdGV0cmlzLWJvdHRvbS1iaWcuanBnXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGltZyAjdCBjbGFzcz1cInRldHJpcy10b3AgYXBwLXdpZHRoXCIgKGxvYWQpPVwiaGFuZGxlVG9wKHQpXCIgc3JjPVwiaW1hZ2VzL3RldHJpcy10b3AucG5nXCI+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXRyaXMge1xyXG4gICAgdCA6IGFueTtcclxuICAgIGIgOiBhbnk7XHJcbiAgICBjb250YWluZXI7XHJcbiAgICB0ZXRyaXM7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBtb2JpbGVTZXJ2aWNlIDogTW9iaWxlU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb3AgKHQpIHtcclxuICAgICAgICB0aGlzLnQgPSB0O1xyXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gMDtcclxuICAgICAgICB2YXIgaGVpZ2h0O1xyXG4gICAgICAgIGlmKHRoaXMubW9iaWxlU2VydmljZS5pc01vYmlsZSgpKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvdy5vdXRlckhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGV0cmlzLWNvbnRhaW5lclwiKVswXTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy50ZXRyaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRldHJpc1wiKVswXTtcclxuICAgICAgICB2YXIgaGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gdGhpcy50ZXRyaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgICAgICBpZihyZWN0LnRvcCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICB0LnN0eWxlLmJvdHRvbSA9IHRoaXMudGV0cmlzLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZWN0LmJvdHRvbSA8PSBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYm90dG9tID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgIHQuc3R5bGUuYm90dG9tID0gMDtcclxuICAgICAgICAgICAgICAgIHQuc3R5bGUudG9wID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYm90dG9tID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgICAgICB0LnN0eWxlLmJvdHRvbSA9IGhlaWdodCAqICgocmVjdC5ib3R0b20gLSBoZWlnaHQpLyhyZWN0LmJvdHRvbSAtIHJlY3QudG9wLSBoZWlnaHQpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVyKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQm90dG9tIChiKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHAtbG9hZGluZy1tYXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAvLyB0aGlzLmIgPSBiO1xyXG4gICAgICAgIC8vIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgICAgLy8gdmFyIHRvcCA9IG1lLmIub2Zmc2V0VG9wO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYobWUuYi5zdHlsZS50b3AgPT0gXCJcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgbWUuYi5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgbWUuYi5zdHlsZS50b3AgPSB0b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0KSArIFwicHhcIjtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=