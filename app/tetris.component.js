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
                    if (window.isMobile) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFLSTtnQkFFQSxDQUFDO2dCQUVELDBCQUFTLEdBQVQsVUFBVyxDQUFDO29CQUFaLGlCQThDQztvQkE3Q0csSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDZCxJQUFJLE1BQU0sQ0FBQztvQkFDWCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLE9BQU8sR0FBRyxVQUFDLENBQUM7d0JBQ1osSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUUvQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs0QkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFFakMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzt3QkFDOUMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUMzQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDOzRCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7NEJBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs0QkFDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNyQixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7NEJBQ3hDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7NEJBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7NEJBRTlCLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzs0QkFDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3hGLENBQUM7b0JBRUwsQ0FBQyxDQUFBO29CQUNELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRTdDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBRUQsNkJBQVksR0FBWixVQUFjLENBQUM7b0JBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNuRSxjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsNEJBQTRCO29CQUM1QiwrQ0FBK0M7b0JBQy9DLGlDQUFpQztvQkFDakMsdUNBQXVDO29CQUN2QyxRQUFRO29CQUNSLDBEQUEwRDtvQkFDMUQsTUFBTTtnQkFDVixDQUFDO2dCQTlFTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNlNBTVQ7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBc0VGLGFBQUM7WUFBRCxDQUFDLEFBckVELElBcUVDO1lBckVELDJCQXFFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCAoe1xyXG4gICAgc2VsZWN0b3I6ICd0ZXRyaXMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV0cmlzLWNvbnRhaW5lciBhcHAtd2lkdGhcIj5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgI2IgY2xhc3M9XCJ0ZXRyaXMtYm90dG9tIGFwcC13aWR0aFwiIChsb2FkKT1cImhhbmRsZUJvdHRvbShiKVwiIHNyYz1cImltYWdlcy90ZXRyaXMtYm90dG9tLWJpZy5qcGdcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nICN0IGNsYXNzPVwidGV0cmlzLXRvcCBhcHAtd2lkdGhcIiAobG9hZCk9XCJoYW5kbGVUb3AodClcIiBzcmM9XCJpbWFnZXMvdGV0cmlzLXRvcC5wbmdcIj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRldHJpcyB7XHJcbiAgICB0IDogYW55O1xyXG4gICAgYiA6IGFueTtcclxuICAgIGNvbnRhaW5lcjtcclxuICAgIHRldHJpcztcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG9wICh0KSB7XHJcbiAgICAgICAgdGhpcy50ID0gdDtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzdGFydCA9IDA7XHJcbiAgICAgICAgdmFyIGhlaWdodDtcclxuICAgICAgICBpZih3aW5kb3cuaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93Lm91dGVySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZXRyaXMtY29udGFpbmVyXCIpWzBdO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB0aGlzLnRldHJpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV0cmlzXCIpWzBdO1xyXG4gICAgICAgIHZhciBoYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSB0aGlzLnRldHJpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJlY3QudG9wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJvdHRvbSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgIHQuc3R5bGUuYm90dG9tID0gdGhpcy50ZXRyaXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlY3QuYm90dG9tIDw9IGhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5ib3R0b20gPSAwO1xyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS50b3AgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICAgICAgICAgICAgICAgIHQuc3R5bGUuYm90dG9tID0gaGVpZ2h0ICogKChyZWN0LmJvdHRvbSAtIGhlaWdodCkvKHJlY3QuYm90dG9tIC0gcmVjdC50b3AtIGhlaWdodCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCb3R0b20gKGIpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcC1sb2FkaW5nLW1hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIC8vIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgLy8gdmFyIG1lID0gdGhpcztcclxuICAgICAgICAvLyB2YXIgdG9wID0gbWUuYi5vZmZzZXRUb3A7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZihtZS5iLnN0eWxlLnRvcCA9PSBcIlwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBtZS5iLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBtZS5iLnN0eWxlLnRvcCA9IHRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQpICsgXCJweFwiO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==