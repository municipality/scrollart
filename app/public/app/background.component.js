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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wdWJsaWMvYXBwL2JhY2tncm91bmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQVFJO29CQVBBLGlCQUFZLEdBQVksU0FBUyxDQUFBO29CQUNqQyx3REFBd0Q7b0JBQ3hELGNBQVMsR0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN0QyxXQUFNLEdBQWEsRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksQ0FBQyxDQUFDO29CQUdqQixtRUFBbUU7b0JBQ25FLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO3dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7NEJBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dDQUNsQixHQUFHLEVBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQ0FDdkUsRUFBRSxFQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRzs2QkFDdkIsQ0FBQyxDQUFDO3dCQUNQLENBQUM7b0JBQ0wsQ0FBQztnQkFHTCxDQUFDO2dCQXRDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxZQUFZO3dCQUN2Qiw2Q0FBNkM7d0JBQzdDLHdEQUF3RDt3QkFDeEQsUUFBUSxFQUFHLDBYQVVWO3FCQUNKLENBQUM7OzhCQUFBO2dCQXlCRixpQkFBQztZQUFELENBQUMsQUF2QkQsSUF1QkM7WUF2QkQsbUNBdUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JhY2tncm91bmQnLFxuICAgIC8vdGVtcGxhdGUgZm9yIHJvdyBieSBjb2x1bW4gaW1hZ2UgZ2VuZXJhdGlvblxuICAgIC8vI2ltYWdlIGxldHMgeW91IGFjY2VzcyBcInRoaXNcIiBpbiB0aGUgXCJsb2FkZWRcIiBmdW5jdGlvblxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGlkPSdiYWNrZ3JvdW5kJz5cbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjcm93IG9mIHBob3Rvc1wiPlxuICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCIjaXRlbSBvZiByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgI2ltYWdlIGlkPSdiYWNrZ3JvdW5kLXt7aXRlbS5pZH19JyBjbGFzcz1cImJhY2tncm91bmQtaW1hZ2VzXCIgc3JjPSd7e3BhdGhUb0ltYWdlc319e3tpdGVtLnNyY319Jz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XG4gICAgcGF0aFRvSW1hZ2VzIDogc3RyaW5nID0gXCJpbWFnZXMvXCJcbiAgICAvL3Bob3RvTGlzdCA6IHN0cmluZ1tdID0gW1wiYmFubmVyMS5qcGdcIiwgXCJiYW5uZXIyLmpwZ1wiXTtcbiAgICBwaG90b0xpc3QgOiBzdHJpbmdbXSA9IFtcInNhbXBsZS5qcGdcIl07XG4gICAgcGhvdG9zIDogYW55W11bXSA9IFtdO1xuICAgIG51bVJvd3MgOiBudW1iZXIgPSAyMDtcbiAgICBudW1Db2xzIDogbnVtYmVyID0gODtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy9TZXQgdXAgXCJwaG90b3NcIiB0byBiZSBsb2FkZWQgcmFuZG9tbHkgYmFzZWQgb24gZmlsZXMgaW4gZGlyZWN0b3J5XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubnVtUm93czsgcm93KyspIHtcbiAgICAgICAgICAgIHRoaXMucGhvdG9zLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5udW1Db2xzOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucGhvdG9zW3Jvd10ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNyYyA6IHRoaXMucGhvdG9MaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoodGhpcy5waG90b0xpc3QubGVuZ3RoKSldLFxuICAgICAgICAgICAgICAgICAgICBpZCA6ICBcIlwiICsgcm93ICsgY29sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59XG4iXX0=