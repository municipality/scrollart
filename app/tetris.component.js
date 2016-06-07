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
                    this.container = document.getElementsByClassName("tetris-container")[0];
                    this.container.style.height = window.innerHeight + "px";
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
                        else if (rect.bottom <= window.innerHeight) {
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
                            t.style.position = "fixed";
                            t.style.bottom = window.innerHeight * ((rect.bottom - window.innerHeight) / (rect.bottom - rect.top - window.innerHeight));
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
                        template: "\n        <div class=\"tetris-container\">\n\n            <img #b class=\"tetris-bottom\" (load)=\"handleBottom(b)\" src=\"images/tetris-bottom-big.jpg\">\n        </div>\n        <img #t class=\"tetris-top\" (load)=\"handleTop(t)\" src=\"images/tetris-top.png\">\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tetris);
                return Tetris;
            }());
            exports_1("Tetris", Tetris);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFLSTtnQkFFQSxDQUFDO2dCQUVELDBCQUFTLEdBQVQsVUFBVyxDQUFDO29CQUFaLGlCQXVDQztvQkF0Q0csSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFHZCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLE9BQU8sR0FBRyxVQUFDLENBQUM7d0JBQ1osSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUMvQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs0QkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFFakMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzt3QkFDOUMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs0QkFDekMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs0QkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs0QkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs0QkFDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7NEJBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzt3QkFDckIsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDOzRCQUN4QyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUVsQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7NEJBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUM1SCxDQUFDO29CQUVMLENBQUMsQ0FBQTtvQkFDRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUU3QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELDZCQUFZLEdBQVosVUFBYyxDQUFDO29CQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDbkUsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLDRCQUE0QjtvQkFDNUIsK0NBQStDO29CQUMvQyxpQ0FBaUM7b0JBQ2pDLHVDQUF1QztvQkFDdkMsUUFBUTtvQkFDUiwwREFBMEQ7b0JBQzFELE1BQU07Z0JBQ1YsQ0FBQztnQkF2RUw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLCtRQU1UO3FCQUNKLENBQUM7OzBCQUFBO2dCQStERixhQUFDO1lBQUQsQ0FBQyxBQTlERCxJQThEQztZQTlERCwyQkE4REMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yOiAndGV0cmlzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRldHJpcy1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgI2IgY2xhc3M9XCJ0ZXRyaXMtYm90dG9tXCIgKGxvYWQpPVwiaGFuZGxlQm90dG9tKGIpXCIgc3JjPVwiaW1hZ2VzL3RldHJpcy1ib3R0b20tYmlnLmpwZ1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbWcgI3QgY2xhc3M9XCJ0ZXRyaXMtdG9wXCIgKGxvYWQpPVwiaGFuZGxlVG9wKHQpXCIgc3JjPVwiaW1hZ2VzL3RldHJpcy10b3AucG5nXCI+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXRyaXMge1xyXG4gICAgdCA6IGFueTtcclxuICAgIGIgOiBhbnk7XHJcbiAgICBjb250YWluZXI7XHJcbiAgICB0ZXRyaXM7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvcCAodCkge1xyXG4gICAgICAgIHRoaXMudCA9IHQ7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICB2YXIgc3RhcnQgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGV0cmlzLWNvbnRhaW5lclwiKVswXTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy50ZXRyaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRldHJpc1wiKVswXTtcclxuICAgICAgICB2YXIgaGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gdGhpcy50ZXRyaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmKHJlY3QudG9wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJvdHRvbSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgIHQuc3R5bGUuYm90dG9tID0gdGhpcy50ZXRyaXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5ib3R0b20gPSAwO1xyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS50b3AgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB0LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5ib3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAoKHJlY3QuYm90dG9tIC0gd2luZG93LmlubmVySGVpZ2h0KS8ocmVjdC5ib3R0b20gLSByZWN0LnRvcC0gd2luZG93LmlubmVySGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlcik7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJvdHRvbSAoYikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwLWxvYWRpbmctbWFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgLy8gdGhpcy5iID0gYjtcclxuICAgICAgICAvLyB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIC8vIHZhciB0b3AgPSBtZS5iLm9mZnNldFRvcDtcclxuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmKG1lLmIuc3R5bGUudG9wID09IFwiXCIpIHtcclxuICAgICAgICAvLyAgICAgICAgIG1lLmIuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIG1lLmIuc3R5bGUudG9wID0gdG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCkgKyBcInB4XCI7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbn1cclxuIl19