System.register(['angular2/core', './square.component', './contact.footer', './banner.component'], function(exports_1, context_1) {
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
    var core_1, square_component_1, contact_footer_1, banner_component_1;
    var Wall;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (square_component_1_1) {
                square_component_1 = square_component_1_1;
            },
            function (contact_footer_1_1) {
                contact_footer_1 = contact_footer_1_1;
            },
            function (banner_component_1_1) {
                banner_component_1 = banner_component_1_1;
            }],
        execute: function() {
            Wall = (function () {
                //Construct the builder which is used to lay out the squares by template
                function Wall() {
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
                            description: "Expert in dessert tasting"
                        },
                        {
                            title: "Hiker",
                            src: "hiker.jpg",
                            description: "Always actively looking for new trails to hike"
                        },
                        {
                            title: "Dancer",
                            src: "dancer.jpg",
                            description: "Amateur dancer, but expert with good company and a couple of beers"
                        },
                        {
                            title: "World Explorer",
                            src: "explorer.jpg",
                            description: "Lover of the ocean, new environments, and exotic foods"
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
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [square_component_1.Square, contact_footer_1.ContactFooter, banner_component_1.Banner],
                        template: "\n        <div id=\"wall\">\n            <banner></banner>\n            <table id=\"square-table\">\n                <tr *ngFor=\"#row of builder\">\n                    <td *ngFor=\"#square of row\">\n                        <square [title]=\"square.title\" [description]=\"square.description\" [src]=\"square.src\"></square>\n                    </td>\n                </tr>\n            </table>\n            <div>\n            <contact></contact>\n        </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFLSSx3RUFBd0U7Z0JBQ3hFO29CQUxBLDJCQUEyQjtvQkFDM0IsZUFBVSxHQUFZLENBQUMsQ0FBQztvQkFDeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztvQkFZdkI7Ozs7O3NCQUtFO29CQUNGLFlBQU8sR0FBVzt3QkFDZDs0QkFDSSxLQUFLLEVBQUcsRUFBRTs0QkFDVixHQUFHLEVBQUcsbUJBQW1COzRCQUN6QixXQUFXLEVBQUcsRUFBRTt5QkFDbkI7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLG1CQUFtQjs0QkFDM0IsR0FBRyxFQUFHLGFBQWE7NEJBQ25CLFdBQVcsRUFBRywwQ0FBMEM7eUJBQzNEO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxlQUFlOzRCQUN2QixHQUFHLEVBQUcsWUFBWTs0QkFDbEIsV0FBVyxFQUFHLG9DQUFvQzt5QkFDckQ7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGNBQWM7NEJBQ3RCLEdBQUcsRUFBRyxrQkFBa0I7NEJBQ3hCLFdBQVcsRUFBRyxzRUFBc0U7eUJBQ3ZGO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxhQUFhOzRCQUNyQixHQUFHLEVBQUcsZUFBZTs0QkFDckIsV0FBVyxFQUFHLG1EQUFtRDt5QkFDcEU7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLG1CQUFtQjs0QkFDM0IsR0FBRyxFQUFHLFlBQVk7NEJBQ2xCLFdBQVcsRUFBRywrRUFBK0U7eUJBQ2hHO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxxQkFBcUI7NEJBQzdCLEdBQUcsRUFBRyxhQUFhOzRCQUNuQixXQUFXLEVBQUcsMkJBQTJCO3lCQUM1Qzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsT0FBTzs0QkFDZixHQUFHLEVBQUcsV0FBVzs0QkFDakIsV0FBVyxFQUFHLGdEQUFnRDt5QkFDakU7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLFFBQVE7NEJBQ2hCLEdBQUcsRUFBRyxZQUFZOzRCQUNsQixXQUFXLEVBQUcsb0VBQW9FO3lCQUNyRjt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsZ0JBQWdCOzRCQUN4QixHQUFHLEVBQUcsY0FBYzs0QkFDcEIsV0FBVyxFQUFHLHdEQUF3RDt5QkFDekU7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLFVBQVU7NEJBQ2xCLEdBQUcsRUFBRyxjQUFjOzRCQUNwQixXQUFXLEVBQUcseUVBQXlFO3lCQUMxRjtxQkFDSixDQUFDO29CQXRFRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzNDLG1EQUFtRDt3QkFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzFCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxDQUFDO2dCQUNMLENBQUM7Z0JBbENMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLHlCQUFNLEVBQUUsOEJBQWEsRUFBRSx5QkFBTSxDQUFDO3dCQUM1QyxRQUFRLEVBQUcsOGRBZVY7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBaUZGLFdBQUM7WUFBRCxDQUFDLEFBaEZELElBZ0ZDO1lBaEZELHVCQWdGQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTcXVhcmV9IGZyb20gJy4vc3F1YXJlLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRhY3RGb290ZXJ9IGZyb20gJy4vY29udGFjdC5mb290ZXInO1xuaW1wb3J0IHtCYW5uZXJ9IGZyb20gJy4vYmFubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICd3YWxsJyxcbiAgICBkaXJlY3RpdmVzIDogW1NxdWFyZSwgQ29udGFjdEZvb3RlciwgQmFubmVyXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD1cIndhbGxcIj5cbiAgICAgICAgICAgIDxiYW5uZXI+PC9iYW5uZXI+XG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJzcXVhcmUtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3JvdyBvZiBidWlsZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCIjc3F1YXJlIG9mIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNxdWFyZSBbdGl0bGVdPVwic3F1YXJlLnRpdGxlXCIgW2Rlc2NyaXB0aW9uXT1cInNxdWFyZS5kZXNjcmlwdGlvblwiIFtzcmNdPVwic3F1YXJlLnNyY1wiPjwvc3F1YXJlPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxjb250YWN0PjwvY29udGFjdD5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV2FsbCB7XG4gICAgLy91c2VkIHRvIGJ1aWxkIHRoZSBzcXVhcmVzXG4gICAgbnVtQ29sdW1ucyA6IG51bWJlciA9IDM7XG4gICAgYnVpbGRlciA6IGFueVtdW10gPSBbXTtcblxuICAgIC8vQ29uc3RydWN0IHRoZSBidWlsZGVyIHdoaWNoIGlzIHVzZWQgdG8gbGF5IG91dCB0aGUgc3F1YXJlcyBieSB0ZW1wbGF0ZVxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vRm9yIGV2ZXJ5IG51bUNvbHVtbnMgc3F1YXJlcywgY29uc3RydWN0IGEgbmV3IHJvd1xuICAgICAgICAgICAgaWYgKGkldGhpcy5udW1Db2x1bW5zID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXJbdGhpcy5idWlsZGVyLmxlbmd0aCAtIDFdLnB1c2godGhpcy5zcXVhcmVzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKlxuICAgIFNxdWFyZXNcbiAgICAgICAgdGl0bGUgOiB0aXRsZSBvZiBzcXVhcmVcbiAgICAgICAgc3JjIDogaW1hZ2UgZmlsZSBuYW1lIGluIHBhdGhUb0ltYWdlc1xuICAgICAgICBkZXNjcmlwdGlvbiA6IHNxdWFyZSBkZXNjcmlwdGlvblxuICAgICovXG4gICAgc3F1YXJlcyA6IGFueVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBgLFxuICAgICAgICAgICAgc3JjIDogYGFib3V0YnJpYW5sZWUuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYGBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgU29mdHdhcmUgRW5naW5lZXJgLFxuICAgICAgICAgICAgc3JjIDogJ2Fib3V0bWUuanBnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYFVDIFNhbiBEaWVnbyAyMDE0IENvbXB1dGVyIFNjaWVuY2UgTWFqb3JgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFdlaWdodCBMaWZ0ZXJgLFxuICAgICAgICAgICAgc3JjIDogYHNhbXBsZS5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgQWN0aXZlIHdlaWdodC1saWZ0ZXIgZm9yIHNpeCB5ZWFyc2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgUGhvdG9ncmFwaGVyYCxcbiAgICAgICAgICAgIHNyYyA6IGBwaG90b2dyYXBoZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEFtYXRldXIgcGhvdG9ncmFwaGVyIGV4cGVyaWVuY2VkIHdpdGggYm90aCBEU0xSIGFuZCBwb2xhcm9pZCBjYW1lcmFzYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBTbm93Ym9hcmRlcmAsXG4gICAgICAgICAgICBzcmMgOiBgc25vd2JvYXJkLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBbWF0ZXVyIHNub3dib2FyZGVyIHdpdGggY29uc2lzdGVudCByZWFyLWVuZCBwYWluYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBUZXRyaXMgRW50aHVzaWFzdGAsXG4gICAgICAgICAgICBzcmMgOiBgdGV0cmlzLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBIaWdoIHNjb3JlIG9mIDQxOTMzIG9uIFRldHJpcyBVbHRyYSwgcHJvZmljaWVudCBhdCBULXNwaW5uaW5nIGFuZCBTVCBzdGFja2luZ2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgRGVzc2VydCBDb25ub2lzc2V1cmAsXG4gICAgICAgICAgICBzcmMgOiBgZGVzc2VydC5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgRXhwZXJ0IGluIGRlc3NlcnQgdGFzdGluZ2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgSGlrZXJgLFxuICAgICAgICAgICAgc3JjIDogYGhpa2VyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBbHdheXMgYWN0aXZlbHkgbG9va2luZyBmb3IgbmV3IHRyYWlscyB0byBoaWtlYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBEYW5jZXJgLFxuICAgICAgICAgICAgc3JjIDogYGRhbmNlci5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgQW1hdGV1ciBkYW5jZXIsIGJ1dCBleHBlcnQgd2l0aCBnb29kIGNvbXBhbnkgYW5kIGEgY291cGxlIG9mIGJlZXJzYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBXb3JsZCBFeHBsb3JlcmAsXG4gICAgICAgICAgICBzcmMgOiBgZXhwbG9yZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYExvdmVyIG9mIHRoZSBvY2VhbiwgbmV3IGVudmlyb25tZW50cywgYW5kIGV4b3RpYyBmb29kc2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgSm9rZXN0ZXJgLFxuICAgICAgICAgICAgc3JjIDogYGpva2VzdGVyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBDcmVhdG9yIG9mIGJhZCBqb2tlcyBhbmQgcHVucyB3aXRoIGEgc2lkZSBvZiBob3JyZW5kb3VzbHkgbG91ZCBsYXVnaHRlcmBcbiAgICAgICAgfVxuICAgIF07XG5cblxufVxuIl19