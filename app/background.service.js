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
    var BackgroundService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BackgroundService = (function () {
                function BackgroundService() {
                    this.pathToImages = "images/background/";
                    this.photoListBase = [];
                    this.photoList = [];
                    this.photos = [];
                    this.numRows = 10;
                    this.numCols = 8;
                    this.numBackgroundImages = 34;
                }
                BackgroundService.prototype.getPhotos = function () {
                    //Set up photoList (hard-coded imgX.jpg, X = number)
                    for (var index = 1; index <= this.numBackgroundImages; index++) {
                        this.photoList.push(this.pathToImages + "img" + index + ".jpg");
                        this.photoListBase.push(this.pathToImages + "img" + index + ".jpg");
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
                    return this.photos;
                };
                BackgroundService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BackgroundService);
                return BackgroundService;
            }());
            exports_1("BackgroundService", BackgroundService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2dyb3VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUE7b0JBQ0ksaUJBQVksR0FBWSxvQkFBb0IsQ0FBQztvQkFDN0Msa0JBQWEsR0FBYyxFQUFFLENBQUM7b0JBQzlCLGNBQVMsR0FBYyxFQUFFLENBQUM7b0JBQzFCLFdBQU0sR0FBYSxFQUFFLENBQUM7b0JBQ3RCLFlBQU8sR0FBWSxFQUFFLENBQUM7b0JBQ3RCLFlBQU8sR0FBWSxDQUFDLENBQUM7b0JBQ3JCLHdCQUFtQixHQUFZLEVBQUUsQ0FBQztnQkEwQnRDLENBQUM7Z0JBeEJHLHFDQUFTLEdBQVQ7b0JBQ0ksb0RBQW9EO29CQUNwRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO3dCQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsWUFBWSxXQUFNLEtBQUssU0FBTSxDQUFDLENBQUM7d0JBQzNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxZQUFZLFdBQU0sS0FBSyxTQUFNLENBQUMsQ0FBQztvQkFDbkUsQ0FBQztvQkFDRCxtRUFBbUU7b0JBQ25FLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO3dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7NEJBQzFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDbEIsR0FBRyxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dDQUMxQixFQUFFLEVBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHOzZCQUN2QixDQUFDLENBQUM7NEJBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUMvQiwrQ0FBK0M7NEJBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2pELENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQWpDTDtvQkFBQyxpQkFBVSxFQUFFOztxQ0FBQTtnQkFrQ2Isd0JBQUM7WUFBRCxDQUFDLEFBakNELElBaUNDO1lBakNELGlEQWlDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRTZXJ2aWNlIHtcbiAgICBwYXRoVG9JbWFnZXMgOiBzdHJpbmcgPSBcImltYWdlcy9iYWNrZ3JvdW5kL1wiO1xuICAgIHBob3RvTGlzdEJhc2UgOiBzdHJpbmdbXSA9IFtdO1xuICAgIHBob3RvTGlzdCA6IHN0cmluZ1tdID0gW107XG4gICAgcGhvdG9zIDogYW55W11bXSA9IFtdO1xuICAgIG51bVJvd3MgOiBudW1iZXIgPSAxMDtcbiAgICBudW1Db2xzIDogbnVtYmVyID0gODtcbiAgICBudW1CYWNrZ3JvdW5kSW1hZ2VzIDogbnVtYmVyID0gMzQ7XG5cbiAgICBnZXRQaG90b3MgKCkge1xuICAgICAgICAvL1NldCB1cCBwaG90b0xpc3QgKGhhcmQtY29kZWQgaW1nWC5qcGcsIFggPSBudW1iZXIpXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gdGhpcy5udW1CYWNrZ3JvdW5kSW1hZ2VzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLnBob3RvTGlzdC5wdXNoKGAke3RoaXMucGF0aFRvSW1hZ2VzfWltZyR7aW5kZXh9LmpwZ2ApO1xuICAgICAgICAgICAgdGhpcy5waG90b0xpc3RCYXNlLnB1c2goYCR7dGhpcy5wYXRoVG9JbWFnZXN9aW1nJHtpbmRleH0uanBnYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9TZXQgdXAgXCJwaG90b3NcIiB0byBiZSBsb2FkZWQgcmFuZG9tbHkgYmFzZWQgb24gZmlsZXMgaW4gZGlyZWN0b3J5XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubnVtUm93czsgcm93KyspIHtcbiAgICAgICAgICAgIHRoaXMucGhvdG9zLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5udW1Db2xzOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKih0aGlzLnBob3RvTGlzdC5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBob3Rvc1tyb3ddLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzcmMgOiB0aGlzLnBob3RvTGlzdFtyYW5kXSxcbiAgICAgICAgICAgICAgICAgICAgaWQgOiAgXCJcIiArIHJvdyArIGNvbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGhvdG9MaXN0LnNwbGljZShyYW5kLCAxKTtcbiAgICAgICAgICAgICAgICAvL0lmIHBob3RvbGlzdCBpcyBlbXB0eSwgc3RhcnQgcmVwZWF0aW5nIGltYWdlc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBob3RvTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob3RvTGlzdCA9IHRoaXMucGhvdG9MaXN0QmFzZS5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGhvdG9zO1xuICAgIH1cbn1cbiJdfQ==