System.register(['angular2/core', './square.component'], function(exports_1, context_1) {
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
    var core_1, square_component_1;
    var Page;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (square_component_1_1) {
                square_component_1 = square_component_1_1;
            }],
        execute: function() {
            Page = (function () {
                //Construct the builder which is used to lay out the squares by template
                function Page() {
                    //used to build the squares
                    this.numColumns = 3;
                    this.builder = [];
                    /*
                    Squares
                        title : title of square
                        src : image file name in pathToImages
                        description : square description
                    */
                    this.squares = [
                        {
                            title: "",
                            src: "aboutbrianlee.jpg",
                            description: ""
                        },
                        {
                            title: "Software Engineer",
                            src: 'aboutme.jpg',
                            description: "UC San Diego 2014 Computer Science Major"
                        },
                        {
                            title: "Weight Lifter",
                            src: "sample.jpg",
                            description: "Active weight-lifter for six years"
                        },
                        {
                            title: "Photographer",
                            src: "photographer.jpg",
                            description: "Amateur photographer experienced with both DSLR and polaroid cameras"
                        },
                        {
                            title: "Snowboarder",
                            src: "snowboard.jpg",
                            description: "Amateur snowboarder with consistent rear-end pain"
                        },
                        {
                            title: "Tetris Enthusiast",
                            src: "tetris.jpg",
                            description: "High score of 41933 on Tetris Ultra, proficient at T-spinning and ST stacking"
                        },
                        {
                            title: "Dessert Connoisseur",
                            src: "dessert.jpg",
                            description: "Expert in tasting different types of desserts"
                        },
                        {
                            title: "Hiker",
                            src: "hiker.jpg",
                            description: "Always actively looking for new trails to hike"
                        },
                        {
                            title: "Dancer",
                            src: "dancer.jpg",
                            description: "Amateur dancer, but expert with good company and a couple beers"
                        },
                        {
                            title: "World Explorer",
                            src: "explorer.jpg",
                            description: "Lover of new environments and exotic foods"
                        },
                        {
                            title: "Jokester",
                            src: "jokester.jpg",
                            description: "Creator of bad jokes and puns with a side of horrendously loud laughter"
                        }
                    ];
                    for (var i = 0; i < this.squares.length; i++) {
                        //For every numColumns squares, construct a new row
                        if (i % this.numColumns == 0) {
                            this.builder.push([]);
                        }
                        this.builder[this.builder.length - 1].push(this.squares[i]);
                    }
                }
                Page = __decorate([
                    core_1.Component({
                        selector: 'page',
                        directives: [square_component_1.Square],
                        template: "\n        <div id=\"wall\">\n            <table id=\"square-table\">\n                <tr *ngFor=\"#row of builder\">\n                    <td *ngFor=\"#square of row\">\n                        <square [title]=\"square.title\" [description]=\"square.description\" [src]=\"square.src\"></square>\n                    </td>\n                </tr>\n            </table>\n            <div>\n\n        </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Page);
                return Page;
            }());
            exports_1("Page", Page);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFLSSx3RUFBd0U7Z0JBQ3hFO29CQUxBLDJCQUEyQjtvQkFDM0IsZUFBVSxHQUFZLENBQUMsQ0FBQztvQkFDeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztvQkFZdkI7Ozs7O3NCQUtFO29CQUNGLFlBQU8sR0FBVzt3QkFDZDs0QkFDSSxLQUFLLEVBQUcsRUFBRTs0QkFDVixHQUFHLEVBQUcsbUJBQW1COzRCQUN6QixXQUFXLEVBQUcsRUFBRTt5QkFDbkI7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLG1CQUFtQjs0QkFDM0IsR0FBRyxFQUFHLGFBQWE7NEJBQ25CLFdBQVcsRUFBRywwQ0FBMEM7eUJBQzNEO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxlQUFlOzRCQUN2QixHQUFHLEVBQUcsWUFBWTs0QkFDbEIsV0FBVyxFQUFHLG9DQUFvQzt5QkFDckQ7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGNBQWM7NEJBQ3RCLEdBQUcsRUFBRyxrQkFBa0I7NEJBQ3hCLFdBQVcsRUFBRyxzRUFBc0U7eUJBQ3ZGO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxhQUFhOzRCQUNyQixHQUFHLEVBQUcsZUFBZTs0QkFDckIsV0FBVyxFQUFHLG1EQUFtRDt5QkFDcEU7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLG1CQUFtQjs0QkFDM0IsR0FBRyxFQUFHLFlBQVk7NEJBQ2xCLFdBQVcsRUFBRywrRUFBK0U7eUJBQ2hHO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxxQkFBcUI7NEJBQzdCLEdBQUcsRUFBRyxhQUFhOzRCQUNuQixXQUFXLEVBQUcsK0NBQStDO3lCQUNoRTt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsT0FBTzs0QkFDZixHQUFHLEVBQUcsV0FBVzs0QkFDakIsV0FBVyxFQUFHLGdEQUFnRDt5QkFDakU7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLFFBQVE7NEJBQ2hCLEdBQUcsRUFBRyxZQUFZOzRCQUNsQixXQUFXLEVBQUcsaUVBQWlFO3lCQUNsRjt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsZ0JBQWdCOzRCQUN4QixHQUFHLEVBQUcsY0FBYzs0QkFDcEIsV0FBVyxFQUFHLDRDQUE0Qzt5QkFDN0Q7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLFVBQVU7NEJBQ2xCLEdBQUcsRUFBRyxjQUFjOzRCQUNwQixXQUFXLEVBQUcseUVBQXlFO3lCQUMxRjtxQkFDSixDQUFDO29CQXRFRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzNDLG1EQUFtRDt3QkFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzFCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxDQUFDO2dCQUNMLENBQUM7Z0JBakNMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLHlCQUFNLENBQUM7d0JBQ3JCLFFBQVEsRUFBRyxnYUFjVjtxQkFDSixDQUFDOzt3QkFBQTtnQkFpRkYsV0FBQztZQUFELENBQUMsQUFoRkQsSUFnRkM7WUFoRkQsdUJBZ0ZDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NxdWFyZX0gZnJvbSAnLi9zcXVhcmUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3BhZ2UnLFxuICAgIGRpcmVjdGl2ZXMgOiBbU3F1YXJlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD1cIndhbGxcIj5cbiAgICAgICAgICAgIDx0YWJsZSBpZD1cInNxdWFyZS10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjcm93IG9mIGJ1aWxkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cIiNzcXVhcmUgb2Ygcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3F1YXJlIFt0aXRsZV09XCJzcXVhcmUudGl0bGVcIiBbZGVzY3JpcHRpb25dPVwic3F1YXJlLmRlc2NyaXB0aW9uXCIgW3NyY109XCJzcXVhcmUuc3JjXCI+PC9zcXVhcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2Uge1xuICAgIC8vdXNlZCB0byBidWlsZCB0aGUgc3F1YXJlc1xuICAgIG51bUNvbHVtbnMgOiBudW1iZXIgPSAzO1xuICAgIGJ1aWxkZXIgOiBhbnlbXVtdID0gW107XG5cbiAgICAvL0NvbnN0cnVjdCB0aGUgYnVpbGRlciB3aGljaCBpcyB1c2VkIHRvIGxheSBvdXQgdGhlIHNxdWFyZXMgYnkgdGVtcGxhdGVcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL0ZvciBldmVyeSBudW1Db2x1bW5zIHNxdWFyZXMsIGNvbnN0cnVjdCBhIG5ldyByb3dcbiAgICAgICAgICAgIGlmIChpJXRoaXMubnVtQ29sdW1ucyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyLnB1c2goW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5idWlsZGVyW3RoaXMuYnVpbGRlci5sZW5ndGggLSAxXS5wdXNoKHRoaXMuc3F1YXJlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLypcbiAgICBTcXVhcmVzXG4gICAgICAgIHRpdGxlIDogdGl0bGUgb2Ygc3F1YXJlXG4gICAgICAgIHNyYyA6IGltYWdlIGZpbGUgbmFtZSBpbiBwYXRoVG9JbWFnZXNcbiAgICAgICAgZGVzY3JpcHRpb24gOiBzcXVhcmUgZGVzY3JpcHRpb25cbiAgICAqL1xuICAgIHNxdWFyZXMgOiBhbnlbXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgYCxcbiAgICAgICAgICAgIHNyYyA6IGBhYm91dGJyaWFubGVlLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFNvZnR3YXJlIEVuZ2luZWVyYCxcbiAgICAgICAgICAgIHNyYyA6ICdhYm91dG1lLmpwZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBVQyBTYW4gRGllZ28gMjAxNCBDb21wdXRlciBTY2llbmNlIE1ham9yYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBXZWlnaHQgTGlmdGVyYCxcbiAgICAgICAgICAgIHNyYyA6IGBzYW1wbGUuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEFjdGl2ZSB3ZWlnaHQtbGlmdGVyIGZvciBzaXggeWVhcnNgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFBob3RvZ3JhcGhlcmAsXG4gICAgICAgICAgICBzcmMgOiBgcGhvdG9ncmFwaGVyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBbWF0ZXVyIHBob3RvZ3JhcGhlciBleHBlcmllbmNlZCB3aXRoIGJvdGggRFNMUiBhbmQgcG9sYXJvaWQgY2FtZXJhc2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgU25vd2JvYXJkZXJgLFxuICAgICAgICAgICAgc3JjIDogYHNub3dib2FyZC5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgQW1hdGV1ciBzbm93Ym9hcmRlciB3aXRoIGNvbnNpc3RlbnQgcmVhci1lbmQgcGFpbmBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgVGV0cmlzIEVudGh1c2lhc3RgLFxuICAgICAgICAgICAgc3JjIDogYHRldHJpcy5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgSGlnaCBzY29yZSBvZiA0MTkzMyBvbiBUZXRyaXMgVWx0cmEsIHByb2ZpY2llbnQgYXQgVC1zcGlubmluZyBhbmQgU1Qgc3RhY2tpbmdgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYERlc3NlcnQgQ29ubm9pc3NldXJgLFxuICAgICAgICAgICAgc3JjIDogYGRlc3NlcnQuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEV4cGVydCBpbiB0YXN0aW5nIGRpZmZlcmVudCB0eXBlcyBvZiBkZXNzZXJ0c2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgSGlrZXJgLFxuICAgICAgICAgICAgc3JjIDogYGhpa2VyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBbHdheXMgYWN0aXZlbHkgbG9va2luZyBmb3IgbmV3IHRyYWlscyB0byBoaWtlYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBEYW5jZXJgLFxuICAgICAgICAgICAgc3JjIDogYGRhbmNlci5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgQW1hdGV1ciBkYW5jZXIsIGJ1dCBleHBlcnQgd2l0aCBnb29kIGNvbXBhbnkgYW5kIGEgY291cGxlIGJlZXJzYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBXb3JsZCBFeHBsb3JlcmAsXG4gICAgICAgICAgICBzcmMgOiBgZXhwbG9yZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYExvdmVyIG9mIG5ldyBlbnZpcm9ubWVudHMgYW5kIGV4b3RpYyBmb29kc2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgSm9rZXN0ZXJgLFxuICAgICAgICAgICAgc3JjIDogYGpva2VzdGVyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBDcmVhdG9yIG9mIGJhZCBqb2tlcyBhbmQgcHVucyB3aXRoIGEgc2lkZSBvZiBob3JyZW5kb3VzbHkgbG91ZCBsYXVnaHRlcmBcbiAgICAgICAgfVxuICAgIF07XG5cblxufVxuIl19