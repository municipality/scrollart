System.register(['angular2/core', './background.service'], function(exports_1, context_1) {
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
    var core_1, background_service_1;
    var Background;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (background_service_1_1) {
                background_service_1 = background_service_1_1;
            }],
        execute: function() {
            Background = (function () {
                //Do not put complex logic inside constructor (aka calling a service)
                function Background(backgroundService) {
                    this.backgroundService = backgroundService;
                    this.photos = [];
                }
                Background.prototype.imageClick = function (image) {
                    return false;
                };
                Background.prototype.ngOnInit = function () {
                    this.photos = this.backgroundService.getPhotos();
                };
                Background = __decorate([
                    core_1.Component({
                        selector: 'background',
                        //template for row by column image generation
                        //#image lets you access "this" in the "loaded" function
                        template: "\n        <div id='background'>\n            <tr *ngFor=\"#row of photos\">\n                <td *ngFor=\"#item of row\">\n                    <a href=\"#\" (click)=\"imageClick(image)\">\n                        <img #image id='background-{{item.id}}' class=\"background-images\" src='{{item.src}}'>\n                    </a>\n                </td>\n            </tr>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [background_service_1.BackgroundService])
                ], Background);
                return Background;
            }());
            exports_1("Background", Background);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZ3JvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFPSSxxRUFBcUU7Z0JBQ3JFLG9CQUFxQixpQkFBcUM7b0JBQXJDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7b0JBUDFELFdBQU0sR0FBYSxFQUFFLENBQUM7Z0JBU3RCLENBQUM7Z0JBUEQsK0JBQVUsR0FBVixVQUFZLEtBQUs7b0JBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFPRCw2QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyRCxDQUFDO2dCQS9CTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxZQUFZO3dCQUN2Qiw2Q0FBNkM7d0JBQzdDLHdEQUF3RDt3QkFDeEQsUUFBUSxFQUFHLHdZQVVWO3FCQUNKLENBQUM7OzhCQUFBO2dCQWtCRixpQkFBQztZQUFELENBQUMsQUFoQkQsSUFnQkM7WUFoQkQsbUNBZ0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QmFja2dyb3VuZFNlcnZpY2V9IGZyb20gJy4vYmFja2dyb3VuZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYmFja2dyb3VuZCcsXG4gICAgLy90ZW1wbGF0ZSBmb3Igcm93IGJ5IGNvbHVtbiBpbWFnZSBnZW5lcmF0aW9uXG4gICAgLy8jaW1hZ2UgbGV0cyB5b3UgYWNjZXNzIFwidGhpc1wiIGluIHRoZSBcImxvYWRlZFwiIGZ1bmN0aW9uXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgaWQ9J2JhY2tncm91bmQnPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNyb3cgb2YgcGhvdG9zXCI+XG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cIiNpdGVtIG9mIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJpbWFnZUNsaWNrKGltYWdlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAjaW1hZ2UgaWQ9J2JhY2tncm91bmQte3tpdGVtLmlkfX0nIGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZXNcIiBzcmM9J3t7aXRlbS5zcmN9fSc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgcGhvdG9zIDogYW55W11bXSA9IFtdO1xuXG4gICAgaW1hZ2VDbGljayAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vRG8gbm90IHB1dCBjb21wbGV4IGxvZ2ljIGluc2lkZSBjb25zdHJ1Y3RvciAoYWthIGNhbGxpbmcgYSBzZXJ2aWNlKVxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGJhY2tncm91bmRTZXJ2aWNlIDogQmFja2dyb3VuZFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5waG90b3MgPSB0aGlzLmJhY2tncm91bmRTZXJ2aWNlLmdldFBob3RvcygpO1xuICAgIH1cblxufVxuIl19