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
                    /*
                    Squares
                        title : title of square
                        src : image file name in pathToImages
                        description : square description
                    */
                    this.squares = [
                        {
                            title: "Brian Lee",
                            src: 'sample.jpg',
                            description: "UC San Diego CS Major 2014"
                        },
                        {
                            title: "bye",
                            description: "See you later"
                        }, {
                            title: "Brian Lee",
                            src: 'sample.jpg',
                            description: "UC San Diego CS Major 2014"
                        },
                        {
                            title: "bye",
                            description: "See you later"
                        }, {
                            title: "Brian Lee",
                            src: 'sample.jpg',
                            description: "UC San Diego CS Major 2014"
                        },
                        {
                            title: "bye",
                            description: "See you later"
                        }, {
                            title: "Brian Lee",
                            src: 'sample.jpg',
                            description: "UC San Diego CS Major 2014"
                        },
                        {
                            title: "bye",
                            description: "See you later"
                        }
                    ];
                    //used to build the squares
                    this.numColumns = 3;
                    this.builder = [];
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
                        template: "\n        <div id=\"wall\">\n            <table id=\"square-table\">\n                <tr *ngFor=\"#row of builder\">\n                    <td *ngFor=\"#square of row\">\n                        <square [title]=\"square.title\" [description]=\"square.description\" [src]=\"square.src\"></square>\n                    </td>\n                </tr>\n            </table>\n        </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Page);
                return Page;
            }());
            exports_1("Page", Page);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wdWJsaWMvYXBwL3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQStDSSx3RUFBd0U7Z0JBQ3hFO29CQS9DQTs7Ozs7c0JBS0U7b0JBQ0YsWUFBTyxHQUFXO3dCQUNkOzRCQUNJLEtBQUssRUFBRyxXQUFXOzRCQUNuQixHQUFHLEVBQUcsWUFBWTs0QkFDbEIsV0FBVyxFQUFHLDRCQUE0Qjt5QkFDN0M7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLEtBQUs7NEJBQ2IsV0FBVyxFQUFHLGVBQWU7eUJBQ2hDLEVBQUM7NEJBQ0UsS0FBSyxFQUFHLFdBQVc7NEJBQ25CLEdBQUcsRUFBRyxZQUFZOzRCQUNsQixXQUFXLEVBQUcsNEJBQTRCO3lCQUM3Qzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsS0FBSzs0QkFDYixXQUFXLEVBQUcsZUFBZTt5QkFDaEMsRUFBQzs0QkFDRSxLQUFLLEVBQUcsV0FBVzs0QkFDbkIsR0FBRyxFQUFHLFlBQVk7NEJBQ2xCLFdBQVcsRUFBRyw0QkFBNEI7eUJBQzdDO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxLQUFLOzRCQUNiLFdBQVcsRUFBRyxlQUFlO3lCQUNoQyxFQUFDOzRCQUNFLEtBQUssRUFBRyxXQUFXOzRCQUNuQixHQUFHLEVBQUcsWUFBWTs0QkFDbEIsV0FBVyxFQUFHLDRCQUE0Qjt5QkFDN0M7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLEtBQUs7NEJBQ2IsV0FBVyxFQUFHLGVBQWU7eUJBQ2hDO3FCQUNKLENBQUM7b0JBRUYsMkJBQTJCO29CQUMzQixlQUFVLEdBQVksQ0FBQyxDQUFDO29CQUN4QixZQUFPLEdBQWEsRUFBRSxDQUFDO29CQUluQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzNDLG1EQUFtRDt3QkFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzFCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxDQUFDO2dCQUNMLENBQUM7Z0JBekVMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLHlCQUFNLENBQUM7d0JBQ3JCLFFBQVEsRUFBRywyWUFZVjtxQkFDSixDQUFDOzt3QkFBQTtnQkE0REYsV0FBQztZQUFELENBQUMsQUEzREQsSUEyREM7WUEzREQsdUJBMkRDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NxdWFyZX0gZnJvbSAnLi9zcXVhcmUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3BhZ2UnLFxuICAgIGRpcmVjdGl2ZXMgOiBbU3F1YXJlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD1cIndhbGxcIj5cbiAgICAgICAgICAgIDx0YWJsZSBpZD1cInNxdWFyZS10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjcm93IG9mIGJ1aWxkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cIiNzcXVhcmUgb2Ygcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3F1YXJlIFt0aXRsZV09XCJzcXVhcmUudGl0bGVcIiBbZGVzY3JpcHRpb25dPVwic3F1YXJlLmRlc2NyaXB0aW9uXCIgW3NyY109XCJzcXVhcmUuc3JjXCI+PC9zcXVhcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2Uge1xuICAgIC8qXG4gICAgU3F1YXJlc1xuICAgICAgICB0aXRsZSA6IHRpdGxlIG9mIHNxdWFyZVxuICAgICAgICBzcmMgOiBpbWFnZSBmaWxlIG5hbWUgaW4gcGF0aFRvSW1hZ2VzXG4gICAgICAgIGRlc2NyaXB0aW9uIDogc3F1YXJlIGRlc2NyaXB0aW9uXG4gICAgKi9cbiAgICBzcXVhcmVzIDogYW55W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogXCJCcmlhbiBMZWVcIixcbiAgICAgICAgICAgIHNyYyA6ICdzYW1wbGUuanBnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYFVDIFNhbiBEaWVnbyBDUyBNYWpvciAyMDE0YFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IFwiYnllXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IFwiU2VlIHlvdSBsYXRlclwiXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGUgOiBcIkJyaWFuIExlZVwiLFxuICAgICAgICAgICAgc3JjIDogJ3NhbXBsZS5qcGcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgVUMgU2FuIERpZWdvIENTIE1ham9yIDIwMTRgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogXCJieWVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogXCJTZWUgeW91IGxhdGVyXCJcbiAgICAgICAgfSx7XG4gICAgICAgICAgICB0aXRsZSA6IFwiQnJpYW4gTGVlXCIsXG4gICAgICAgICAgICBzcmMgOiAnc2FtcGxlLmpwZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBVQyBTYW4gRGllZ28gQ1MgTWFqb3IgMjAxNGBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBcImJ5ZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBcIlNlZSB5b3UgbGF0ZXJcIlxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRpdGxlIDogXCJCcmlhbiBMZWVcIixcbiAgICAgICAgICAgIHNyYyA6ICdzYW1wbGUuanBnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYFVDIFNhbiBEaWVnbyBDUyBNYWpvciAyMDE0YFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IFwiYnllXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IFwiU2VlIHlvdSBsYXRlclwiXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgLy91c2VkIHRvIGJ1aWxkIHRoZSBzcXVhcmVzXG4gICAgbnVtQ29sdW1ucyA6IG51bWJlciA9IDM7XG4gICAgYnVpbGRlciA6IGFueVtdW10gPSBbXTtcblxuICAgIC8vQ29uc3RydWN0IHRoZSBidWlsZGVyIHdoaWNoIGlzIHVzZWQgdG8gbGF5IG91dCB0aGUgc3F1YXJlcyBieSB0ZW1wbGF0ZVxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vRm9yIGV2ZXJ5IG51bUNvbHVtbnMgc3F1YXJlcywgY29uc3RydWN0IGEgbmV3IHJvd1xuICAgICAgICAgICAgaWYgKGkldGhpcy5udW1Db2x1bW5zID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkZXIucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXJbdGhpcy5idWlsZGVyLmxlbmd0aCAtIDFdLnB1c2godGhpcy5zcXVhcmVzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iXX0=