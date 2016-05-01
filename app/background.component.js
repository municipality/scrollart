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
                    this.photoList = ["banner1.jpg", "banner2.jpg"];
                    //photoList : string[] = ["sample.jpg"];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZ3JvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFRSTtvQkFQQSxpQkFBWSxHQUFZLFNBQVMsQ0FBQTtvQkFDakMsY0FBUyxHQUFjLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO29CQUN0RCx3Q0FBd0M7b0JBQ3hDLFdBQU0sR0FBYSxFQUFFLENBQUM7b0JBQ3RCLFlBQU8sR0FBWSxFQUFFLENBQUM7b0JBQ3RCLFlBQU8sR0FBWSxDQUFDLENBQUM7b0JBR2pCLG1FQUFtRTtvQkFDbkUsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7d0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzs0QkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQ2xCLEdBQUcsRUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dDQUN2RSxFQUFFLEVBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHOzZCQUN2QixDQUFDLENBQUM7d0JBQ1AsQ0FBQztvQkFDTCxDQUFDO2dCQUdMLENBQUM7Z0JBdENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFlBQVk7d0JBQ3ZCLDZDQUE2Qzt3QkFDN0Msd0RBQXdEO3dCQUN4RCxRQUFRLEVBQUcsMFhBVVY7cUJBQ0osQ0FBQzs7OEJBQUE7Z0JBeUJGLGlCQUFDO1lBQUQsQ0FBQyxBQXZCRCxJQXVCQztZQXZCRCxtQ0F1QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYmFja2dyb3VuZCcsXG4gICAgLy90ZW1wbGF0ZSBmb3Igcm93IGJ5IGNvbHVtbiBpbWFnZSBnZW5lcmF0aW9uXG4gICAgLy8jaW1hZ2UgbGV0cyB5b3UgYWNjZXNzIFwidGhpc1wiIGluIHRoZSBcImxvYWRlZFwiIGZ1bmN0aW9uXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgaWQ9J2JhY2tncm91bmQnPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNyb3cgb2YgcGhvdG9zXCI+XG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cIiNpdGVtIG9mIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAjaW1hZ2UgaWQ9J2JhY2tncm91bmQte3tpdGVtLmlkfX0nIGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZXNcIiBzcmM9J3t7cGF0aFRvSW1hZ2VzfX17e2l0ZW0uc3JjfX0nPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcbiAgICBwYXRoVG9JbWFnZXMgOiBzdHJpbmcgPSBcImltYWdlcy9cIlxuICAgIHBob3RvTGlzdCA6IHN0cmluZ1tdID0gW1wiYmFubmVyMS5qcGdcIiwgXCJiYW5uZXIyLmpwZ1wiXTtcbiAgICAvL3Bob3RvTGlzdCA6IHN0cmluZ1tdID0gW1wic2FtcGxlLmpwZ1wiXTtcbiAgICBwaG90b3MgOiBhbnlbXVtdID0gW107XG4gICAgbnVtUm93cyA6IG51bWJlciA9IDIwO1xuICAgIG51bUNvbHMgOiBudW1iZXIgPSA4O1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvL1NldCB1cCBcInBob3Rvc1wiIHRvIGJlIGxvYWRlZCByYW5kb21seSBiYXNlZCBvbiBmaWxlcyBpbiBkaXJlY3RvcnlcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5udW1Sb3dzOyByb3crKykge1xuICAgICAgICAgICAgdGhpcy5waG90b3MucHVzaChbXSk7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLm51bUNvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waG90b3Nbcm93XS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3JjIDogdGhpcy5waG90b0xpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKih0aGlzLnBob3RvTGlzdC5sZW5ndGgpKV0sXG4gICAgICAgICAgICAgICAgICAgIGlkIDogIFwiXCIgKyByb3cgKyBjb2xcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cbiJdfQ==