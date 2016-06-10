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
                        if (_this.mobileService.isMobile()) {
                            height = window.outerHeight;
                        }
                        else {
                            height = window.innerHeight;
                        }
                        _this.container.style.height = height + "px";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFLSSxnQkFBcUIsYUFBNkI7b0JBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtnQkFFbEQsQ0FBQztnQkFFRCwwQkFBUyxHQUFULFVBQVcsQ0FBQztvQkFBWixpQkFzREM7b0JBckRHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNYLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2QsSUFBSSxNQUFNLENBQUM7b0JBQ1gsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUNoQyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUNoQyxDQUFDO29CQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekQsSUFBSSxPQUFPLEdBQUcsVUFBQyxDQUFDO3dCQUVaLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDaEMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDaEMsQ0FBQzt3QkFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDNUMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUUvQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs0QkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFFakMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzt3QkFDOUMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUMzQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDOzRCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7NEJBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs0QkFDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNyQixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7NEJBQ3hDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7NEJBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7NEJBRTlCLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzs0QkFDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3hGLENBQUM7b0JBRUwsQ0FBQyxDQUFBO29CQUNELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRTdDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBRUQsNkJBQVksR0FBWixVQUFjLENBQUM7b0JBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNuRSxjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsNEJBQTRCO29CQUM1QiwrQ0FBK0M7b0JBQy9DLGlDQUFpQztvQkFDakMsdUNBQXVDO29CQUN2QyxRQUFRO29CQUNSLDBEQUEwRDtvQkFDMUQsTUFBTTtnQkFDVixDQUFDO2dCQXRGTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNlNBTVQ7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBOEVGLGFBQUM7WUFBRCxDQUFDLEFBN0VELElBNkVDO1lBN0VELDJCQTZFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge01vYmlsZVNlcnZpY2V9IGZyb20gJy4vbW9iaWxlLnNlcnZpY2UnO1xuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yOiAndGV0cmlzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV0cmlzLWNvbnRhaW5lciBhcHAtd2lkdGhcIj5cblxuICAgICAgICAgICAgPGltZyAjYiBjbGFzcz1cInRldHJpcy1ib3R0b20gYXBwLXdpZHRoXCIgKGxvYWQpPVwiaGFuZGxlQm90dG9tKGIpXCIgc3JjPVwiaW1hZ2VzL3RldHJpcy1ib3R0b20tYmlnLmpwZ1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyAjdCBjbGFzcz1cInRldHJpcy10b3AgYXBwLXdpZHRoXCIgKGxvYWQpPVwiaGFuZGxlVG9wKHQpXCIgc3JjPVwiaW1hZ2VzL3RldHJpcy10b3AucG5nXCI+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXRyaXMge1xuICAgIHQgOiBhbnk7XG4gICAgYiA6IGFueTtcbiAgICBjb250YWluZXI7XG4gICAgdGV0cmlzO1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIG1vYmlsZVNlcnZpY2UgOiBNb2JpbGVTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVUb3AgKHQpIHtcbiAgICAgICAgdGhpcy50ID0gdDtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0ID0gMDtcbiAgICAgICAgdmFyIGhlaWdodDtcbiAgICAgICAgaWYodGhpcy5tb2JpbGVTZXJ2aWNlLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvdy5vdXRlckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZXRyaXMtY29udGFpbmVyXCIpWzBdO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIHRoaXMudGV0cmlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXRyaXNcIilbMF07XG4gICAgICAgIHZhciBoYW5kbGVyID0gKGUpID0+IHtcblxuICAgICAgICAgICAgaWYodGhpcy5tb2JpbGVTZXJ2aWNlLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB3aW5kb3cub3V0ZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHRoaXMudGV0cmlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBpZihyZWN0LnRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICB0LnN0eWxlLmJvdHRvbSA9IHRoaXMudGV0cmlzLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlY3QuYm90dG9tIDw9IGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICB0LnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgICAgICAgICAgICAgdC5zdHlsZS50b3AgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYm90dG9tID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIHQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICAgICAgdC5zdHlsZS5ib3R0b20gPSBoZWlnaHQgKiAoKHJlY3QuYm90dG9tIC0gaGVpZ2h0KS8ocmVjdC5ib3R0b20gLSByZWN0LnRvcC0gaGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZXIpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGhhbmRsZUJvdHRvbSAoYikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcC1sb2FkaW5nLW1hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAvLyB0aGlzLmIgPSBiO1xuICAgICAgICAvLyB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAvLyB2YXIgdG9wID0gbWUuYi5vZmZzZXRUb3A7XG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gICAgIGlmKG1lLmIuc3R5bGUudG9wID09IFwiXCIpIHtcbiAgICAgICAgLy8gICAgICAgICBtZS5iLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIG1lLmIuc3R5bGUudG9wID0gdG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCkgKyBcInB4XCI7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cbn1cbiJdfQ==