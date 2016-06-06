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
                    this.t = t;
                    var me = this;
                    var start = (me.t.height + 40) * -1;
                    if (me.t.style.top == "") {
                        me.t.style.top = start + "px";
                    }
                    document.addEventListener("scroll", function (e) {
                        //total height of the document
                        var totalHeight = document.body.scrollHeight - document.body.clientHeight;
                        //current scroll of the document
                        var currentHeight = document.body.scrollTop;
                        me.t.style.top = start + (document.body.clientHeight * (currentHeight * 1.0 / totalHeight)) + "px";
                    });
                };
                Tetris.prototype.handleBottom = function (b) {
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
                        template: "\n        <div class=\"tetris-container\">\n            <img #t class=\"tetris-top\" (load)=\"handleTop(t)\" src=\"images/tetris-top.png\">\n            <img #b class=\"tetris-bottom\" (load)=\"handleBottom(b)\" src=\"images/tetris-bottom-small.jpg\">\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tetris);
                return Tetris;
            }());
            exports_1("Tetris", Tetris);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFHSTtnQkFFQSxDQUFDO2dCQUVELDBCQUFTLEdBQVQsVUFBVyxDQUFDO29CQUNSLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNYLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxFQUFFLENBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xDLENBQUM7b0JBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2xDLDhCQUE4Qjt3QkFDOUIsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7d0JBQzFFLGdDQUFnQzt3QkFDaEMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBRTVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3ZHLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsNkJBQVksR0FBWixVQUFjLENBQUM7b0JBQ1gsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLDRCQUE0QjtvQkFDNUIsK0NBQStDO29CQUMvQyxpQ0FBaUM7b0JBQ2pDLHVDQUF1QztvQkFDdkMsUUFBUTtvQkFDUiwwREFBMEQ7b0JBQzFELE1BQU07Z0JBQ1YsQ0FBQztnQkE1Q0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLG1SQUtUO3FCQUNKLENBQUM7OzBCQUFBO2dCQXFDRixhQUFDO1lBQUQsQ0FBQyxBQXBDRCxJQW9DQztZQXBDRCwyQkFvQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yOiAndGV0cmlzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV0cmlzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyAjdCBjbGFzcz1cInRldHJpcy10b3BcIiAobG9hZCk9XCJoYW5kbGVUb3AodClcIiBzcmM9XCJpbWFnZXMvdGV0cmlzLXRvcC5wbmdcIj5cbiAgICAgICAgICAgIDxpbWcgI2IgY2xhc3M9XCJ0ZXRyaXMtYm90dG9tXCIgKGxvYWQpPVwiaGFuZGxlQm90dG9tKGIpXCIgc3JjPVwiaW1hZ2VzL3RldHJpcy1ib3R0b20tc21hbGwuanBnXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGV0cmlzIHtcbiAgICB0IDogYW55O1xuICAgIGIgOiBhbnk7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG4gICAgaGFuZGxlVG9wICh0KSB7XG4gICAgICAgIHRoaXMudCA9IHQ7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHZhciBzdGFydCA9IChtZS50LmhlaWdodCArIDQwKSAqIC0xO1xuICAgICAgICBpZihtZS50LnN0eWxlLnRvcCA9PSBcIlwiKSB7XG4gICAgICAgICAgICBtZS50LnN0eWxlLnRvcCA9IHN0YXJ0ICsgXCJweFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy90b3RhbCBoZWlnaHQgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgICAgICB2YXIgdG90YWxIZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgLy9jdXJyZW50IHNjcm9sbCBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG5cbiAgICAgICAgICAgIG1lLnQuc3R5bGUudG9wID0gc3RhcnQgKyAoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKiAoY3VycmVudEhlaWdodCAqIDEuMCAvIHRvdGFsSGVpZ2h0KSkgKyBcInB4XCI7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQm90dG9tIChiKSB7XG4gICAgICAgIC8vIHRoaXMuYiA9IGI7XG4gICAgICAgIC8vIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIC8vIHZhciB0b3AgPSBtZS5iLm9mZnNldFRvcDtcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICAgICAgICAvLyAgICAgaWYobWUuYi5zdHlsZS50b3AgPT0gXCJcIikge1xuICAgICAgICAvLyAgICAgICAgIG1lLmIuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgbWUuYi5zdHlsZS50b3AgPSB0b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0KSArIFwicHhcIjtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxufVxuIl19