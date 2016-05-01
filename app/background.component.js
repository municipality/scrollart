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
                    this.photoList = [];
                    //photoList : string[] = ["sample.jpg"];
                    this.photos = [];
                    this.numRows = 20;
                    this.numCols = 8;
                    //Set up photoList (hard-coded imgX.jpg, X = number)
                    for (var index = 1; index <= 10; index++) {
                        this.photoList.push("img" + index + ".jpg");
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZ3JvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFRSTtvQkFQQSxpQkFBWSxHQUFZLG9CQUFvQixDQUFBO29CQUM1QyxjQUFTLEdBQWMsRUFBRSxDQUFDO29CQUMxQix3Q0FBd0M7b0JBQ3hDLFdBQU0sR0FBYSxFQUFFLENBQUM7b0JBQ3RCLFlBQU8sR0FBWSxFQUFFLENBQUM7b0JBQ3RCLFlBQU8sR0FBWSxDQUFDLENBQUM7b0JBR2pCLG9EQUFvRDtvQkFDcEQsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBTSxLQUFLLFNBQU0sQ0FBQyxDQUFDO29CQUMzQyxDQUFDO29CQUNELG1FQUFtRTtvQkFDbkUsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7d0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzs0QkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQ2xCLEdBQUcsRUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dDQUN2RSxFQUFFLEVBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHOzZCQUN2QixDQUFDLENBQUM7d0JBQ1AsQ0FBQztvQkFDTCxDQUFDO2dCQUdMLENBQUM7Z0JBMUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFlBQVk7d0JBQ3ZCLDZDQUE2Qzt3QkFDN0Msd0RBQXdEO3dCQUN4RCxRQUFRLEVBQUcsMFhBVVY7cUJBQ0osQ0FBQzs7OEJBQUE7Z0JBNkJGLGlCQUFDO1lBQUQsQ0FBQyxBQTNCRCxJQTJCQztZQTNCRCxtQ0EyQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYmFja2dyb3VuZCcsXG4gICAgLy90ZW1wbGF0ZSBmb3Igcm93IGJ5IGNvbHVtbiBpbWFnZSBnZW5lcmF0aW9uXG4gICAgLy8jaW1hZ2UgbGV0cyB5b3UgYWNjZXNzIFwidGhpc1wiIGluIHRoZSBcImxvYWRlZFwiIGZ1bmN0aW9uXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgaWQ9J2JhY2tncm91bmQnPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNyb3cgb2YgcGhvdG9zXCI+XG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cIiNpdGVtIG9mIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAjaW1hZ2UgaWQ9J2JhY2tncm91bmQte3tpdGVtLmlkfX0nIGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZXNcIiBzcmM9J3t7cGF0aFRvSW1hZ2VzfX17e2l0ZW0uc3JjfX0nPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcbiAgICBwYXRoVG9JbWFnZXMgOiBzdHJpbmcgPSBcImltYWdlcy9iYWNrZ3JvdW5kL1wiXG4gICAgcGhvdG9MaXN0IDogc3RyaW5nW10gPSBbXTtcbiAgICAvL3Bob3RvTGlzdCA6IHN0cmluZ1tdID0gW1wic2FtcGxlLmpwZ1wiXTtcbiAgICBwaG90b3MgOiBhbnlbXVtdID0gW107XG4gICAgbnVtUm93cyA6IG51bWJlciA9IDIwO1xuICAgIG51bUNvbHMgOiBudW1iZXIgPSA4O1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvL1NldCB1cCBwaG90b0xpc3QgKGhhcmQtY29kZWQgaW1nWC5qcGcsIFggPSBudW1iZXIpXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gMTA7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMucGhvdG9MaXN0LnB1c2goYGltZyR7aW5kZXh9LmpwZ2ApO1xuICAgICAgICB9XG4gICAgICAgIC8vU2V0IHVwIFwicGhvdG9zXCIgdG8gYmUgbG9hZGVkIHJhbmRvbWx5IGJhc2VkIG9uIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLm51bVJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICB0aGlzLnBob3Rvcy5wdXNoKFtdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMubnVtQ29sczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBob3Rvc1tyb3ddLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzcmMgOiB0aGlzLnBob3RvTGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKHRoaXMucGhvdG9MaXN0Lmxlbmd0aCkpXSxcbiAgICAgICAgICAgICAgICAgICAgaWQgOiAgXCJcIiArIHJvdyArIGNvbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxufVxuIl19