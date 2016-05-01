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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkErQ0ksd0VBQXdFO2dCQUN4RTtvQkEvQ0E7Ozs7O3NCQUtFO29CQUNGLFlBQU8sR0FBVzt3QkFDZDs0QkFDSSxLQUFLLEVBQUcsV0FBVzs0QkFDbkIsR0FBRyxFQUFHLFlBQVk7NEJBQ2xCLFdBQVcsRUFBRyw0QkFBNEI7eUJBQzdDO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxLQUFLOzRCQUNiLFdBQVcsRUFBRyxlQUFlO3lCQUNoQyxFQUFDOzRCQUNFLEtBQUssRUFBRyxXQUFXOzRCQUNuQixHQUFHLEVBQUcsWUFBWTs0QkFDbEIsV0FBVyxFQUFHLDRCQUE0Qjt5QkFDN0M7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLEtBQUs7NEJBQ2IsV0FBVyxFQUFHLGVBQWU7eUJBQ2hDLEVBQUM7NEJBQ0UsS0FBSyxFQUFHLFdBQVc7NEJBQ25CLEdBQUcsRUFBRyxZQUFZOzRCQUNsQixXQUFXLEVBQUcsNEJBQTRCO3lCQUM3Qzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsS0FBSzs0QkFDYixXQUFXLEVBQUcsZUFBZTt5QkFDaEMsRUFBQzs0QkFDRSxLQUFLLEVBQUcsV0FBVzs0QkFDbkIsR0FBRyxFQUFHLFlBQVk7NEJBQ2xCLFdBQVcsRUFBRyw0QkFBNEI7eUJBQzdDO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxLQUFLOzRCQUNiLFdBQVcsRUFBRyxlQUFlO3lCQUNoQztxQkFDSixDQUFDO29CQUVGLDJCQUEyQjtvQkFDM0IsZUFBVSxHQUFZLENBQUMsQ0FBQztvQkFDeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztvQkFJbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMzQyxtREFBbUQ7d0JBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMxQixDQUFDO3dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEUsQ0FBQztnQkFDTCxDQUFDO2dCQXpFTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxNQUFNO3dCQUNqQixVQUFVLEVBQUcsQ0FBQyx5QkFBTSxDQUFDO3dCQUNyQixRQUFRLEVBQUcsMllBWVY7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBNERGLFdBQUM7WUFBRCxDQUFDLEFBM0RELElBMkRDO1lBM0RELHVCQTJEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTcXVhcmV9IGZyb20gJy4vc3F1YXJlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdwYWdlJyxcbiAgICBkaXJlY3RpdmVzIDogW1NxdWFyZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgaWQ9XCJ3YWxsXCI+XG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJzcXVhcmUtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3JvdyBvZiBidWlsZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCIjc3F1YXJlIG9mIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNxdWFyZSBbdGl0bGVdPVwic3F1YXJlLnRpdGxlXCIgW2Rlc2NyaXB0aW9uXT1cInNxdWFyZS5kZXNjcmlwdGlvblwiIFtzcmNdPVwic3F1YXJlLnNyY1wiPjwvc3F1YXJlPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlIHtcbiAgICAvKlxuICAgIFNxdWFyZXNcbiAgICAgICAgdGl0bGUgOiB0aXRsZSBvZiBzcXVhcmVcbiAgICAgICAgc3JjIDogaW1hZ2UgZmlsZSBuYW1lIGluIHBhdGhUb0ltYWdlc1xuICAgICAgICBkZXNjcmlwdGlvbiA6IHNxdWFyZSBkZXNjcmlwdGlvblxuICAgICovXG4gICAgc3F1YXJlcyA6IGFueVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IFwiQnJpYW4gTGVlXCIsXG4gICAgICAgICAgICBzcmMgOiAnc2FtcGxlLmpwZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBVQyBTYW4gRGllZ28gQ1MgTWFqb3IgMjAxNGBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBcImJ5ZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBcIlNlZSB5b3UgbGF0ZXJcIlxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRpdGxlIDogXCJCcmlhbiBMZWVcIixcbiAgICAgICAgICAgIHNyYyA6ICdzYW1wbGUuanBnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYFVDIFNhbiBEaWVnbyBDUyBNYWpvciAyMDE0YFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IFwiYnllXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IFwiU2VlIHlvdSBsYXRlclwiXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGUgOiBcIkJyaWFuIExlZVwiLFxuICAgICAgICAgICAgc3JjIDogJ3NhbXBsZS5qcGcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgVUMgU2FuIERpZWdvIENTIE1ham9yIDIwMTRgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogXCJieWVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogXCJTZWUgeW91IGxhdGVyXCJcbiAgICAgICAgfSx7XG4gICAgICAgICAgICB0aXRsZSA6IFwiQnJpYW4gTGVlXCIsXG4gICAgICAgICAgICBzcmMgOiAnc2FtcGxlLmpwZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBVQyBTYW4gRGllZ28gQ1MgTWFqb3IgMjAxNGBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBcImJ5ZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBcIlNlZSB5b3UgbGF0ZXJcIlxuICAgICAgICB9XG4gICAgXTtcblxuICAgIC8vdXNlZCB0byBidWlsZCB0aGUgc3F1YXJlc1xuICAgIG51bUNvbHVtbnMgOiBudW1iZXIgPSAzO1xuICAgIGJ1aWxkZXIgOiBhbnlbXVtdID0gW107XG5cbiAgICAvL0NvbnN0cnVjdCB0aGUgYnVpbGRlciB3aGljaCBpcyB1c2VkIHRvIGxheSBvdXQgdGhlIHNxdWFyZXMgYnkgdGVtcGxhdGVcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL0ZvciBldmVyeSBudW1Db2x1bW5zIHNxdWFyZXMsIGNvbnN0cnVjdCBhIG5ldyByb3dcbiAgICAgICAgICAgIGlmIChpJXRoaXMubnVtQ29sdW1ucyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyLnB1c2goW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5idWlsZGVyW3RoaXMuYnVpbGRlci5sZW5ndGggLSAxXS5wdXNoKHRoaXMuc3F1YXJlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19