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
    var Tetris;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Tetris = (function () {
                function Tetris() {
                }
                Tetris.prototype.handleTop = function (t) {
                    var _this = this;
                    this.t = t;
                    var me = this;
                    var start = 0;
                    var height;
                    if (isMobile) {
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
                    __metadata('design:paramtypes', [])
                ], Tetris);
                return Tetris;
            }());
            exports_1("Tetris", Tetris);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFLSTtnQkFFQSxDQUFDO2dCQUVELDBCQUFTLEdBQVQsVUFBVyxDQUFDO29CQUFaLGlCQThDQztvQkE3Q0csSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDZCxJQUFJLE1BQU0sQ0FBQztvQkFDWCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNWLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUNoQyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUNoQyxDQUFDO29CQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekQsSUFBSSxPQUFPLEdBQUcsVUFBQyxDQUFDO3dCQUNaLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFFL0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7NEJBQzNDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7NEJBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7NEJBRWpDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs0QkFDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7d0JBQzlDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDN0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs0QkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs0QkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs0QkFDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7NEJBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzt3QkFDckIsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDOzRCQUN4QyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDOzRCQUU5QixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7NEJBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN4RixDQUFDO29CQUVMLENBQUMsQ0FBQTtvQkFDRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUU3QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELDZCQUFZLEdBQVosVUFBYyxDQUFDO29CQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDbkUsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLDRCQUE0QjtvQkFDNUIsK0NBQStDO29CQUMvQyxpQ0FBaUM7b0JBQ2pDLHVDQUF1QztvQkFDdkMsUUFBUTtvQkFDUiwwREFBMEQ7b0JBQzFELE1BQU07Z0JBQ1YsQ0FBQztnQkE5RUw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDZTQU1UO3FCQUNKLENBQUM7OzBCQUFBO2dCQXNFRixhQUFDO1lBQUQsQ0FBQyxBQXJFRCxJQXFFQztZQXJFRCwyQkFxRUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yOiAndGV0cmlzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRldHJpcy1jb250YWluZXIgYXBwLXdpZHRoXCI+XHJcblxyXG4gICAgICAgICAgICA8aW1nICNiIGNsYXNzPVwidGV0cmlzLWJvdHRvbSBhcHAtd2lkdGhcIiAobG9hZCk9XCJoYW5kbGVCb3R0b20oYilcIiBzcmM9XCJpbWFnZXMvdGV0cmlzLWJvdHRvbS1iaWcuanBnXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGltZyAjdCBjbGFzcz1cInRldHJpcy10b3AgYXBwLXdpZHRoXCIgKGxvYWQpPVwiaGFuZGxlVG9wKHQpXCIgc3JjPVwiaW1hZ2VzL3RldHJpcy10b3AucG5nXCI+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXRyaXMge1xyXG4gICAgdCA6IGFueTtcclxuICAgIGIgOiBhbnk7XHJcbiAgICBjb250YWluZXI7XHJcbiAgICB0ZXRyaXM7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvcCAodCkge1xyXG4gICAgICAgIHRoaXMudCA9IHQ7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICB2YXIgc3RhcnQgPSAwO1xyXG4gICAgICAgIHZhciBoZWlnaHQ7XHJcbiAgICAgICAgaWYoaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93Lm91dGVySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZXRyaXMtY29udGFpbmVyXCIpWzBdO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB0aGlzLnRldHJpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV0cmlzXCIpWzBdO1xyXG4gICAgICAgIHZhciBoYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSB0aGlzLnRldHJpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJlY3QudG9wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJvdHRvbSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgIHQuc3R5bGUuYm90dG9tID0gdGhpcy50ZXRyaXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlY3QuYm90dG9tIDw9IGhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5ib3R0b20gPSAwO1xyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS50b3AgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICAgICAgICAgICAgICAgIHQuc3R5bGUuYm90dG9tID0gaGVpZ2h0ICogKChyZWN0LmJvdHRvbSAtIGhlaWdodCkvKHJlY3QuYm90dG9tIC0gcmVjdC50b3AtIGhlaWdodCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCb3R0b20gKGIpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcC1sb2FkaW5nLW1hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIC8vIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgLy8gdmFyIG1lID0gdGhpcztcclxuICAgICAgICAvLyB2YXIgdG9wID0gbWUuYi5vZmZzZXRUb3A7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZihtZS5iLnN0eWxlLnRvcCA9PSBcIlwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBtZS5iLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBtZS5iLnN0eWxlLnRvcCA9IHRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQpICsgXCJweFwiO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==