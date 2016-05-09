System.register(['angular2/core', './square.component', './contact.footer', './banner.component', './wall.service'], function(exports_1, context_1) {
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
    var core_1, square_component_1, contact_footer_1, banner_component_1, wall_service_1;
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
            },
            function (wall_service_1_1) {
                wall_service_1 = wall_service_1_1;
            }],
        execute: function() {
            Wall = (function () {
                //Construct the builder which is used to lay out the squares by template
                function Wall(wallService) {
                    this.wallService = wallService;
                }
                Wall.prototype.ngOnInit = function () {
                    this.builder = this.wallService.getSquaresTable();
                };
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [square_component_1.Square, contact_footer_1.ContactFooter, banner_component_1.Banner],
                        providers: [wall_service_1.WallService],
                        template: "\n        <div id=\"wall\">\n            <banner></banner>\n            <table id=\"square-table\">\n                <tr *ngFor=\"#row of builder\">\n                    <td *ngFor=\"#square of row\">\n                        <square [title]=\"square.title\" [description]=\"square.description\" [src]=\"square.src\"\n                                [descriptionLink]=\"square.descriptionLink\" [descriptionLinkURL]=\"square.descriptionLinkURL\">\n                        </square>\n                    </td>\n                </tr>\n            </table>\n            <div>\n            <contact></contact>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [wall_service_1.WallService])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCQTtnQkFHSSx3RUFBd0U7Z0JBQ3hFLGNBQXFCLFdBQXlCO29CQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztnQkFDOUMsQ0FBQztnQkFFRCx1QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdEQsQ0FBQztnQkE5Qkw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsTUFBTTt3QkFDakIsVUFBVSxFQUFHLENBQUMseUJBQU0sRUFBRSw4QkFBYSxFQUFFLHlCQUFNLENBQUM7d0JBQzVDLFNBQVMsRUFBRyxDQUFDLDBCQUFXLENBQUM7d0JBQ3pCLFFBQVEsRUFBRyxxbkJBZVY7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBWUYsV0FBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsdUJBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTcXVhcmV9IGZyb20gJy4vc3F1YXJlLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRhY3RGb290ZXJ9IGZyb20gJy4vY29udGFjdC5mb290ZXInO1xuaW1wb3J0IHtCYW5uZXJ9IGZyb20gJy4vYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1dhbGxTZXJ2aWNlfSBmcm9tICcuL3dhbGwuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICd3YWxsJyxcbiAgICBkaXJlY3RpdmVzIDogW1NxdWFyZSwgQ29udGFjdEZvb3RlciwgQmFubmVyXSxcbiAgICBwcm92aWRlcnMgOiBbV2FsbFNlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGlkPVwid2FsbFwiPlxuICAgICAgICAgICAgPGJhbm5lcj48L2Jhbm5lcj5cbiAgICAgICAgICAgIDx0YWJsZSBpZD1cInNxdWFyZS10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjcm93IG9mIGJ1aWxkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cIiNzcXVhcmUgb2Ygcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3F1YXJlIFt0aXRsZV09XCJzcXVhcmUudGl0bGVcIiBbZGVzY3JpcHRpb25dPVwic3F1YXJlLmRlc2NyaXB0aW9uXCIgW3NyY109XCJzcXVhcmUuc3JjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uTGlua109XCJzcXVhcmUuZGVzY3JpcHRpb25MaW5rXCIgW2Rlc2NyaXB0aW9uTGlua1VSTF09XCJzcXVhcmUuZGVzY3JpcHRpb25MaW5rVVJMXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NxdWFyZT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Y29udGFjdD48L2NvbnRhY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV2FsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYnVpbGRlciA6IGFueVtdW107XG5cbiAgICAvL0NvbnN0cnVjdCB0aGUgYnVpbGRlciB3aGljaCBpcyB1c2VkIHRvIGxheSBvdXQgdGhlIHNxdWFyZXMgYnkgdGVtcGxhdGVcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSB3YWxsU2VydmljZSA6IFdhbGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSB0aGlzLndhbGxTZXJ2aWNlLmdldFNxdWFyZXNUYWJsZSgpO1xuICAgIH1cblxufVxuIl19