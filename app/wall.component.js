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
                    this.builder = wallService.getSquaresTable();
                }
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [square_component_1.Square, contact_footer_1.ContactFooter, banner_component_1.Banner],
                        template: "\n        <div id=\"wall\">\n            <banner></banner>\n            <table id=\"square-table\">\n                <tr *ngFor=\"#row of builder\">\n                    <td *ngFor=\"#square of row\">\n                        <square [title]=\"square.title\" [description]=\"square.description\" [src]=\"square.src\"\n                                [descriptionLink]=\"square.descriptionLink\" [descriptionLinkURL]=\"square.descriptionLinkURL\">\n                        </square>\n                    </td>\n                </tr>\n            </table>\n            <div>\n            <contact></contact>\n        </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [wall_service_1.WallService])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRCQTtnQkFHSSx3RUFBd0U7Z0JBQ3hFLGNBQXFCLFdBQXlCO29CQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztvQkFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ2pELENBQUM7Z0JBNUJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLHlCQUFNLEVBQUUsOEJBQWEsRUFBRSx5QkFBTSxDQUFDO3dCQUM1QyxRQUFRLEVBQUcseW5CQWlCVjtxQkFDSixDQUFDOzt3QkFBQTtnQkFTRixXQUFDO1lBQUQsQ0FBQyxBQVJELElBUUM7WUFSRCx1QkFRQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTcXVhcmV9IGZyb20gJy4vc3F1YXJlLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRhY3RGb290ZXJ9IGZyb20gJy4vY29udGFjdC5mb290ZXInO1xuaW1wb3J0IHtCYW5uZXJ9IGZyb20gJy4vYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1dhbGxTZXJ2aWNlfSBmcm9tICcuL3dhbGwuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICd3YWxsJyxcbiAgICBkaXJlY3RpdmVzIDogW1NxdWFyZSwgQ29udGFjdEZvb3RlciwgQmFubmVyXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD1cIndhbGxcIj5cbiAgICAgICAgICAgIDxiYW5uZXI+PC9iYW5uZXI+XG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJzcXVhcmUtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3JvdyBvZiBidWlsZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCIjc3F1YXJlIG9mIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNxdWFyZSBbdGl0bGVdPVwic3F1YXJlLnRpdGxlXCIgW2Rlc2NyaXB0aW9uXT1cInNxdWFyZS5kZXNjcmlwdGlvblwiIFtzcmNdPVwic3F1YXJlLnNyY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbkxpbmtdPVwic3F1YXJlLmRlc2NyaXB0aW9uTGlua1wiIFtkZXNjcmlwdGlvbkxpbmtVUkxdPVwic3F1YXJlLmRlc2NyaXB0aW9uTGlua1VSTFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcXVhcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGNvbnRhY3Q+PC9jb250YWN0PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXYWxsIHtcbiAgICBidWlsZGVyIDogYW55W11bXTtcblxuICAgIC8vQ29uc3RydWN0IHRoZSBidWlsZGVyIHdoaWNoIGlzIHVzZWQgdG8gbGF5IG91dCB0aGUgc3F1YXJlcyBieSB0ZW1wbGF0ZVxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHdhbGxTZXJ2aWNlIDogV2FsbFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gd2FsbFNlcnZpY2UuZ2V0U3F1YXJlc1RhYmxlKCk7XG4gICAgfVxuXG59XG4iXX0=