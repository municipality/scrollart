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
    var Background;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Background = (function () {
                function Background() {
                    this.pathToImages = "images/background/";
                    this.photoListBase = [];
                    this.photoList = [];
                    //photoList : string[] = ["sample.jpg"];
                    this.photos = [];
                    this.numRows = 10;
                    this.numCols = 7;
                    //Set up photoList (hard-coded imgX.jpg, X = number)
                    for (var index = 1; index <= 31; index++) {
                        this.photoList.push("img" + index + ".jpg");
                        this.photoListBase.push("img" + index + ".jpg");
                    }
                    //Set up "photos" to be loaded randomly based on files in directory
                    for (var row = 0; row < this.numRows; row++) {
                        this.photos.push([]);
                        for (var col = 0; col < this.numCols; col++) {
                            var rand = Math.floor(Math.random() * (this.photoList.length));
                            this.photos[row].push({
                                src: this.photoList[rand],
                                id: "" + row + col
                            });
                            this.photoList.splice(rand, 1);
                            //If photolist is empty, start repeating images
                            if (this.photoList.length == 0) {
                                this.photoList = this.photoListBase.slice(0);
                            }
                        }
                    }
                }
                Background.prototype.imageClick = function (image) {
                    return false;
                };
                Background = __decorate([
                    core_1.Component({
                        selector: 'background',
                        //template for row by column image generation
                        //#image lets you access "this" in the "loaded" function
                        template: "\n        <div id='background'>\n            <tr *ngFor=\"#row of photos\">\n                <td *ngFor=\"#item of row\">\n                    <a href=\"#\" (click)=\"imageClick(image)\">\n                        <img #image id='background-{{item.id}}' class=\"background-images\" src='{{pathToImages}}{{item.src}}'>\n                    </a>\n                </td>\n            </tr>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Background);
                return Background;
            }());
            exports_1("Background", Background);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZ3JvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFhSTtvQkFaQSxpQkFBWSxHQUFZLG9CQUFvQixDQUFDO29CQUM3QyxrQkFBYSxHQUFjLEVBQUUsQ0FBQztvQkFDOUIsY0FBUyxHQUFjLEVBQUUsQ0FBQztvQkFDMUIsd0NBQXdDO29CQUN4QyxXQUFNLEdBQWEsRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksQ0FBQyxDQUFDO29CQU9qQixvREFBb0Q7b0JBQ3BELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7d0JBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQU0sS0FBSyxTQUFNLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBTSxLQUFLLFNBQU0sQ0FBQyxDQUFDO29CQUMvQyxDQUFDO29CQUNELG1FQUFtRTtvQkFDbkUsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7d0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzs0QkFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dDQUNsQixHQUFHLEVBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0NBQzFCLEVBQUUsRUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUc7NkJBQ3ZCLENBQUMsQ0FBQzs0QkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQy9CLCtDQUErQzs0QkFDL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDakQsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUM7Z0JBR0wsQ0FBQztnQkE1QkQsK0JBQVUsR0FBVixVQUFZLEtBQUs7b0JBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkE1Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsWUFBWTt3QkFDdkIsNkNBQTZDO3dCQUM3Qyx3REFBd0Q7d0JBQ3hELFFBQVEsRUFBRyx3WkFVVjtxQkFDSixDQUFDOzs4QkFBQTtnQkF5Q0YsaUJBQUM7WUFBRCxDQUFDLEFBdkNELElBdUNDO1lBdkNELG1DQXVDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdiYWNrZ3JvdW5kJyxcbiAgICAvL3RlbXBsYXRlIGZvciByb3cgYnkgY29sdW1uIGltYWdlIGdlbmVyYXRpb25cbiAgICAvLyNpbWFnZSBsZXRzIHlvdSBhY2Nlc3MgXCJ0aGlzXCIgaW4gdGhlIFwibG9hZGVkXCIgZnVuY3Rpb25cbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD0nYmFja2dyb3VuZCc+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3JvdyBvZiBwaG90b3NcIj5cbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwiI2l0ZW0gb2Ygcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cImltYWdlQ2xpY2soaW1hZ2UpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICNpbWFnZSBpZD0nYmFja2dyb3VuZC17e2l0ZW0uaWR9fScgY2xhc3M9XCJiYWNrZ3JvdW5kLWltYWdlc1wiIHNyYz0ne3twYXRoVG9JbWFnZXN9fXt7aXRlbS5zcmN9fSc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQge1xuICAgIHBhdGhUb0ltYWdlcyA6IHN0cmluZyA9IFwiaW1hZ2VzL2JhY2tncm91bmQvXCI7XG4gICAgcGhvdG9MaXN0QmFzZSA6IHN0cmluZ1tdID0gW107XG4gICAgcGhvdG9MaXN0IDogc3RyaW5nW10gPSBbXTtcbiAgICAvL3Bob3RvTGlzdCA6IHN0cmluZ1tdID0gW1wic2FtcGxlLmpwZ1wiXTtcbiAgICBwaG90b3MgOiBhbnlbXVtdID0gW107XG4gICAgbnVtUm93cyA6IG51bWJlciA9IDEwO1xuICAgIG51bUNvbHMgOiBudW1iZXIgPSA3O1xuXG4gICAgaW1hZ2VDbGljayAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy9TZXQgdXAgcGhvdG9MaXN0IChoYXJkLWNvZGVkIGltZ1guanBnLCBYID0gbnVtYmVyKVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IDMxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLnBob3RvTGlzdC5wdXNoKGBpbWcke2luZGV4fS5qcGdgKTtcbiAgICAgICAgICAgIHRoaXMucGhvdG9MaXN0QmFzZS5wdXNoKGBpbWcke2luZGV4fS5qcGdgKTtcbiAgICAgICAgfVxuICAgICAgICAvL1NldCB1cCBcInBob3Rvc1wiIHRvIGJlIGxvYWRlZCByYW5kb21seSBiYXNlZCBvbiBmaWxlcyBpbiBkaXJlY3RvcnlcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5udW1Sb3dzOyByb3crKykge1xuICAgICAgICAgICAgdGhpcy5waG90b3MucHVzaChbXSk7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLm51bUNvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKHRoaXMucGhvdG9MaXN0Lmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIHRoaXMucGhvdG9zW3Jvd10ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNyYyA6IHRoaXMucGhvdG9MaXN0W3JhbmRdLFxuICAgICAgICAgICAgICAgICAgICBpZCA6ICBcIlwiICsgcm93ICsgY29sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5waG90b0xpc3Quc3BsaWNlKHJhbmQsIDEpO1xuICAgICAgICAgICAgICAgIC8vSWYgcGhvdG9saXN0IGlzIGVtcHR5LCBzdGFydCByZXBlYXRpbmcgaW1hZ2VzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGhvdG9MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhvdG9MaXN0ID0gdGhpcy5waG90b0xpc3RCYXNlLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cbiJdfQ==