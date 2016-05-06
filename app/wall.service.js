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
    var WallService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WallService = (function () {
                function WallService() {
                    //used to build the squares table
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
                            src: "lifter.jpg",
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
                        },
                        {
                            title: "Hard Thinker",
                            src: "thinker.jpg",
                            description: "Get to know my technical side!",
                            descriptionLink: "Check out my resume here",
                            descriptionLinkURL: "LeeBrian_Resume.pdf"
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
                WallService.prototype.getSquares = function () {
                    return this.squares;
                };
                WallService.prototype.getSquaresTable = function () {
                    return this.builder;
                };
                WallService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WallService);
                return WallService;
            }());
            exports_1("WallService", WallService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBMkVJO29CQTFFQSxpQ0FBaUM7b0JBQ2pDLGVBQVUsR0FBWSxDQUFDLENBQUM7b0JBQ3hCLFlBQU8sR0FBYSxFQUFFLENBQUM7b0JBQ3ZCOzs7OztzQkFLRTtvQkFDRixZQUFPLEdBQVc7d0JBQ2Q7NEJBQ0ksS0FBSyxFQUFHLEVBQUU7NEJBQ1YsR0FBRyxFQUFHLG1CQUFtQjs0QkFDekIsV0FBVyxFQUFHLEVBQUU7eUJBQ25CO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxtQkFBbUI7NEJBQzNCLEdBQUcsRUFBRyxhQUFhOzRCQUNuQixXQUFXLEVBQUcsMENBQTBDO3lCQUMzRDt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsZUFBZTs0QkFDdkIsR0FBRyxFQUFHLFlBQVk7NEJBQ2xCLFdBQVcsRUFBRyxvQ0FBb0M7eUJBQ3JEO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxjQUFjOzRCQUN0QixHQUFHLEVBQUcsa0JBQWtCOzRCQUN4QixXQUFXLEVBQUcsc0VBQXNFO3lCQUN2Rjt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsYUFBYTs0QkFDckIsR0FBRyxFQUFHLGVBQWU7NEJBQ3JCLFdBQVcsRUFBRyxtREFBbUQ7eUJBQ3BFO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxtQkFBbUI7NEJBQzNCLEdBQUcsRUFBRyxZQUFZOzRCQUNsQixXQUFXLEVBQUcsK0VBQStFO3lCQUNoRzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcscUJBQXFCOzRCQUM3QixHQUFHLEVBQUcsYUFBYTs0QkFDbkIsV0FBVyxFQUFHLDJCQUEyQjt5QkFDNUM7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLE9BQU87NEJBQ2YsR0FBRyxFQUFHLFdBQVc7NEJBQ2pCLFdBQVcsRUFBRyxnREFBZ0Q7eUJBQ2pFO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxRQUFROzRCQUNoQixHQUFHLEVBQUcsWUFBWTs0QkFDbEIsV0FBVyxFQUFHLG9FQUFvRTt5QkFDckY7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGdCQUFnQjs0QkFDeEIsR0FBRyxFQUFHLGNBQWM7NEJBQ3BCLFdBQVcsRUFBRyx3REFBd0Q7eUJBQ3pFO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxVQUFVOzRCQUNsQixHQUFHLEVBQUcsY0FBYzs0QkFDcEIsV0FBVyxFQUFHLHlFQUF5RTt5QkFDMUY7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGNBQWM7NEJBQ3RCLEdBQUcsRUFBRyxhQUFhOzRCQUNuQixXQUFXLEVBQUcsZ0NBQWdDOzRCQUM5QyxlQUFlLEVBQUcsMEJBQTBCOzRCQUM1QyxrQkFBa0IsRUFBRyxxQkFBcUI7eUJBQzdDO3FCQUNKLENBQUM7b0JBR0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMzQyxtREFBbUQ7d0JBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMxQixDQUFDO3dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEUsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGdDQUFVLEdBQVY7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQscUNBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDeEIsQ0FBQztnQkE1Rkw7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBNkZiLGtCQUFDO1lBQUQsQ0FBQyxBQTVGRCxJQTRGQztZQTVGRCxxQ0E0RkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXYWxsU2VydmljZSB7XG4gICAgLy91c2VkIHRvIGJ1aWxkIHRoZSBzcXVhcmVzIHRhYmxlXG4gICAgbnVtQ29sdW1ucyA6IG51bWJlciA9IDM7XG4gICAgYnVpbGRlciA6IGFueVtdW10gPSBbXTtcbiAgICAvKlxuICAgIFNxdWFyZXNcbiAgICAgICAgdGl0bGUgOiB0aXRsZSBvZiBzcXVhcmVcbiAgICAgICAgc3JjIDogaW1hZ2UgZmlsZSBuYW1lIGluIHBhdGhUb0ltYWdlc1xuICAgICAgICBkZXNjcmlwdGlvbiA6IHNxdWFyZSBkZXNjcmlwdGlvblxuICAgICovXG4gICAgc3F1YXJlcyA6IGFueVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBgLFxuICAgICAgICAgICAgc3JjIDogYGFib3V0YnJpYW5sZWUuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYGBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgU29mdHdhcmUgRW5naW5lZXJgLFxuICAgICAgICAgICAgc3JjIDogJ2Fib3V0bWUuanBnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYFVDIFNhbiBEaWVnbyAyMDE0IENvbXB1dGVyIFNjaWVuY2UgTWFqb3JgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFdlaWdodCBMaWZ0ZXJgLFxuICAgICAgICAgICAgc3JjIDogYGxpZnRlci5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgQWN0aXZlIHdlaWdodC1saWZ0ZXIgZm9yIHNpeCB5ZWFyc2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgUGhvdG9ncmFwaGVyYCxcbiAgICAgICAgICAgIHNyYyA6IGBwaG90b2dyYXBoZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEFtYXRldXIgcGhvdG9ncmFwaGVyIGV4cGVyaWVuY2VkIHdpdGggYm90aCBEU0xSIGFuZCBwb2xhcm9pZCBjYW1lcmFzYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBTbm93Ym9hcmRlcmAsXG4gICAgICAgICAgICBzcmMgOiBgc25vd2JvYXJkLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBbWF0ZXVyIHNub3dib2FyZGVyIHdpdGggY29uc2lzdGVudCByZWFyLWVuZCBwYWluYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBUZXRyaXMgRW50aHVzaWFzdGAsXG4gICAgICAgICAgICBzcmMgOiBgdGV0cmlzLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBIaWdoIHNjb3JlIG9mIDQxOTMzIG9uIFRldHJpcyBVbHRyYSwgcHJvZmljaWVudCBhdCBULXNwaW5uaW5nIGFuZCBTVCBzdGFja2luZ2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgRGVzc2VydCBDb25ub2lzc2V1cmAsXG4gICAgICAgICAgICBzcmMgOiBgZGVzc2VydC5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgRXhwZXJ0IGluIGRlc3NlcnQgdGFzdGluZ2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgSGlrZXJgLFxuICAgICAgICAgICAgc3JjIDogYGhpa2VyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBbHdheXMgYWN0aXZlbHkgbG9va2luZyBmb3IgbmV3IHRyYWlscyB0byBoaWtlYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBEYW5jZXJgLFxuICAgICAgICAgICAgc3JjIDogYGRhbmNlci5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgQW1hdGV1ciBkYW5jZXIsIGJ1dCBleHBlcnQgd2l0aCBnb29kIGNvbXBhbnkgYW5kIGEgY291cGxlIG9mIGJlZXJzYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBXb3JsZCBFeHBsb3JlcmAsXG4gICAgICAgICAgICBzcmMgOiBgZXhwbG9yZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYExvdmVyIG9mIHRoZSBvY2VhbiwgbmV3IGVudmlyb25tZW50cywgYW5kIGV4b3RpYyBmb29kc2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgSm9rZXN0ZXJgLFxuICAgICAgICAgICAgc3JjIDogYGpva2VzdGVyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBDcmVhdG9yIG9mIGJhZCBqb2tlcyBhbmQgcHVucyB3aXRoIGEgc2lkZSBvZiBob3JyZW5kb3VzbHkgbG91ZCBsYXVnaHRlcmBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgSGFyZCBUaGlua2VyYCxcbiAgICAgICAgICAgIHNyYyA6IGB0aGlua2VyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBHZXQgdG8ga25vdyBteSB0ZWNobmljYWwgc2lkZSFgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25MaW5rIDogYENoZWNrIG91dCBteSByZXN1bWUgaGVyZWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxpbmtVUkwgOiBgTGVlQnJpYW5fUmVzdW1lLnBkZmBcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL0ZvciBldmVyeSBudW1Db2x1bW5zIHNxdWFyZXMsIGNvbnN0cnVjdCBhIG5ldyByb3dcbiAgICAgICAgICAgIGlmIChpJXRoaXMubnVtQ29sdW1ucyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZGVyLnB1c2goW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5idWlsZGVyW3RoaXMuYnVpbGRlci5sZW5ndGggLSAxXS5wdXNoKHRoaXMuc3F1YXJlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTcXVhcmVzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlcztcbiAgICB9XG5cbiAgICBnZXRTcXVhcmVzVGFibGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyO1xuICAgIH1cbn1cbiJdfQ==