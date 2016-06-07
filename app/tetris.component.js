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
                    document.addEventListener("scroll", function (e) {
                        var rect = _this.tetris.getBoundingClientRect();
                        console.log(rect);
                        if (rect.top > 0) {
                            _this.container.style.position = "absolute";
                            _this.container.style.top = "0";
                            t.style.position = "absolute";
                            t.style.bottom = _this.tetris.offsetHeight;
                            t.style.bottom = "";
                        }
                        else if (rect.bottom <= window.innerHeight) {
                            _this.container.style.position = "absolute";
                            _this.container.style.bottom = "0";
                            t.style.position = "absolute";
                            t.style.bottom = 0;
                            t.style.top = "";
                        }
                        else {
                            _this.container.style.position = "fixed";
                            t.style.position = "fixed";
                            console.log(_this.tetris.x);
                            t.style.bottom = window.innerHeight * ((_this.tetris.offsetHeight - (window.pageYOffset)) / (_this.tetris.offsetHeight - t.offsetHeight));
                        }
                    });
                    window.addEventListener("resize", function (e) {
                    });
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
                        template: "\n        <div class=\"tetris-container\">\n\n            <img #b class=\"tetris-bottom\" (load)=\"handleBottom(b)\" src=\"images/tetris-bottom-small.jpg\">\n        </div>\n        <img #t class=\"tetris-top\" (load)=\"handleTop(t)\" src=\"images/tetris-top.png\">\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tetris);
                return Tetris;
            }());
            exports_1("Tetris", Tetris);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFLSTtnQkFFQSxDQUFDO2dCQUVELDBCQUFTLEdBQVQsVUFBVyxDQUFDO29CQUFaLGlCQTBDQztvQkF6Q0csSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFHZCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUV6RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDbEMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQzs0QkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFFL0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUM5QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzs0QkFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO3dCQUN4QixDQUFDO3dCQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOzRCQUMzQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUVsQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7NEJBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs0QkFDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNyQixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7NEJBRXhDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzs0QkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQzNJLENBQUM7b0JBR0wsQ0FBQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsNkJBQVksR0FBWixVQUFjLENBQUM7b0JBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNuRSxjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsNEJBQTRCO29CQUM1QiwrQ0FBK0M7b0JBQy9DLGlDQUFpQztvQkFDakMsdUNBQXVDO29CQUN2QyxRQUFRO29CQUNSLDBEQUEwRDtvQkFDMUQsTUFBTTtnQkFDVixDQUFDO2dCQTFFTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsaVJBTVQ7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBa0VGLGFBQUM7WUFBRCxDQUFDLEFBakVELElBaUVDO1lBakVELDJCQWlFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3I6ICd0ZXRyaXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXRyaXMtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxpbWcgI2IgY2xhc3M9XCJ0ZXRyaXMtYm90dG9tXCIgKGxvYWQpPVwiaGFuZGxlQm90dG9tKGIpXCIgc3JjPVwiaW1hZ2VzL3RldHJpcy1ib3R0b20tc21hbGwuanBnXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nICN0IGNsYXNzPVwidGV0cmlzLXRvcFwiIChsb2FkKT1cImhhbmRsZVRvcCh0KVwiIHNyYz1cImltYWdlcy90ZXRyaXMtdG9wLnBuZ1wiPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGV0cmlzIHtcbiAgICB0IDogYW55O1xuICAgIGIgOiBhbnk7XG4gICAgY29udGFpbmVyO1xuICAgIHRldHJpcztcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVUb3AgKHQpIHtcbiAgICAgICAgdGhpcy50ID0gdDtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0ID0gMDtcblxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRldHJpcy1jb250YWluZXJcIilbMF07XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgICAgdGhpcy50ZXRyaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRldHJpc1wiKVswXTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHRoaXMudGV0cmlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVjdCk7XG4gICAgICAgICAgICBpZihyZWN0LnRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjBcIjtcblxuICAgICAgICAgICAgICAgIHQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgdC5zdHlsZS5ib3R0b20gPSB0aGlzLnRldHJpcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdC5zdHlsZS5ib3R0b20gPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYm90dG9tID0gXCIwXCI7XG5cbiAgICAgICAgICAgICAgICB0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIHQuc3R5bGUuYm90dG9tID0gMDtcbiAgICAgICAgICAgICAgICB0LnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcblxuICAgICAgICAgICAgICAgIHQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50ZXRyaXMueCk7XG4gICAgICAgICAgICAgICAgdC5zdHlsZS5ib3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAoKHRoaXMudGV0cmlzLm9mZnNldEhlaWdodCAtICggd2luZG93LnBhZ2VZT2Zmc2V0KSkvKHRoaXMudGV0cmlzLm9mZnNldEhlaWdodCAtIHQub2Zmc2V0SGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZSkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVCb3R0b20gKGIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHAtbG9hZGluZy1tYXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gdGhpcy5iID0gYjtcbiAgICAgICAgLy8gdmFyIG1lID0gdGhpcztcbiAgICAgICAgLy8gdmFyIHRvcCA9IG1lLmIub2Zmc2V0VG9wO1xuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgIC8vICAgICBpZihtZS5iLnN0eWxlLnRvcCA9PSBcIlwiKSB7XG4gICAgICAgIC8vICAgICAgICAgbWUuYi5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBtZS5iLnN0eWxlLnRvcCA9IHRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQpICsgXCJweFwiO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG59XG4iXX0=