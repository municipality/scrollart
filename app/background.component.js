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
                    this.pathToImages = "images/";
                    //photoList : string[] = ["banner1.jpg", "banner2.jpg"];
                    this.photoList = ["sample.jpg"];
                    this.photos = [];
                    this.numRows = 20;
                    this.numCols = 8;
                    //Set up "photos" to be loaded randomly based on files in directory
                    for (var row = 0; row < this.numRows; row++) {
                        this.photos.push([]);
                        for (var col = 0; col < this.numCols; col++) {
                            this.photos[row].push({
                                src: this.photoList[Math.floor(Math.random() * (this.photoList.length))],
                                id: "" + row + col
                            });
                        }
                    }
                }
                Background = __decorate([
                    core_1.Component({
                        selector: 'background',
                        //template for row by column image generation
                        //#image lets you access "this" in the "loaded" function
                        template: "\n        <div id='background'>\n            <tr *ngFor=\"#row of photos\">\n                <td *ngFor=\"#item of row\">\n                    <a href=\"#\">\n                        <img #image id='background-{{item.id}}' class=\"background-images\" src='{{pathToImages}}{{item.src}}'>\n                    </a>\n                </td>\n            </tr>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Background);
                return Background;
            }());
            exports_1("Background", Background);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZ3JvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFRSTtvQkFQQSxpQkFBWSxHQUFZLFNBQVMsQ0FBQTtvQkFDakMsd0RBQXdEO29CQUN4RCxjQUFTLEdBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdEMsV0FBTSxHQUFhLEVBQUUsQ0FBQztvQkFDdEIsWUFBTyxHQUFZLEVBQUUsQ0FBQztvQkFDdEIsWUFBTyxHQUFZLENBQUMsQ0FBQztvQkFHakIsbUVBQW1FO29CQUNuRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDOzRCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDbEIsR0FBRyxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZFLEVBQUUsRUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUc7NkJBQ3ZCLENBQUMsQ0FBQzt3QkFDUCxDQUFDO29CQUNMLENBQUM7Z0JBR0wsQ0FBQztnQkF0Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsWUFBWTt3QkFDdkIsNkNBQTZDO3dCQUM3Qyx3REFBd0Q7d0JBQ3hELFFBQVEsRUFBRywwWEFVVjtxQkFDSixDQUFDOzs4QkFBQTtnQkF5QkYsaUJBQUM7WUFBRCxDQUFDLEFBdkJELElBdUJDO1lBdkJELG1DQXVCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdiYWNrZ3JvdW5kJyxcbiAgICAvL3RlbXBsYXRlIGZvciByb3cgYnkgY29sdW1uIGltYWdlIGdlbmVyYXRpb25cbiAgICAvLyNpbWFnZSBsZXRzIHlvdSBhY2Nlc3MgXCJ0aGlzXCIgaW4gdGhlIFwibG9hZGVkXCIgZnVuY3Rpb25cbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD0nYmFja2dyb3VuZCc+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3JvdyBvZiBwaG90b3NcIj5cbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwiI2l0ZW0gb2Ygcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICNpbWFnZSBpZD0nYmFja2dyb3VuZC17e2l0ZW0uaWR9fScgY2xhc3M9XCJiYWNrZ3JvdW5kLWltYWdlc1wiIHNyYz0ne3twYXRoVG9JbWFnZXN9fXt7aXRlbS5zcmN9fSc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQge1xuICAgIHBhdGhUb0ltYWdlcyA6IHN0cmluZyA9IFwiaW1hZ2VzL1wiXG4gICAgLy9waG90b0xpc3QgOiBzdHJpbmdbXSA9IFtcImJhbm5lcjEuanBnXCIsIFwiYmFubmVyMi5qcGdcIl07XG4gICAgcGhvdG9MaXN0IDogc3RyaW5nW10gPSBbXCJzYW1wbGUuanBnXCJdO1xuICAgIHBob3RvcyA6IGFueVtdW10gPSBbXTtcbiAgICBudW1Sb3dzIDogbnVtYmVyID0gMjA7XG4gICAgbnVtQ29scyA6IG51bWJlciA9IDg7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vU2V0IHVwIFwicGhvdG9zXCIgdG8gYmUgbG9hZGVkIHJhbmRvbWx5IGJhc2VkIG9uIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLm51bVJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICB0aGlzLnBob3Rvcy5wdXNoKFtdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMubnVtQ29sczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBob3Rvc1tyb3ddLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzcmMgOiB0aGlzLnBob3RvTGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKHRoaXMucGhvdG9MaXN0Lmxlbmd0aCkpXSxcbiAgICAgICAgICAgICAgICAgICAgaWQgOiAgXCJcIiArIHJvdyArIGNvbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxufVxuIl19