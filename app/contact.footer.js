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
    var ContactFooter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactFooter = (function () {
                function ContactFooter() {
                    this.name = "Brian Lee";
                    this.email = "ucsdblee@gmail.com";
                    this.years = "2016";
                }
                ContactFooter = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n        <div id=\"contact-footer\">\n            <p class=\"section-header\">Contact Information</p>\n            <p class=\"icon email-icon\">Email : {{email}}</p>\n            <p id=\"copyright\">&copy;{{name}} {{years}}</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactFooter);
                return ContactFooter;
            }());
            exports_1("ContactFooter", ContactFooter);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5mb290ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmZvb3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUFBO29CQUNJLFNBQUksR0FBWSxXQUFXLENBQUM7b0JBQzVCLFVBQUssR0FBWSxvQkFBb0IsQ0FBQztvQkFDdEMsVUFBSyxHQUFZLE1BQU0sQ0FBQztnQkFDNUIsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxTQUFTO3dCQUNwQixRQUFRLEVBQUcsNFBBTVY7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBTUYsb0JBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELHlDQUlDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdjb250YWN0JyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD1cImNvbnRhY3QtZm9vdGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+Q29udGFjdCBJbmZvcm1hdGlvbjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaWNvbiBlbWFpbC1pY29uXCI+RW1haWwgOiB7e2VtYWlsfX08L3A+XG4gICAgICAgICAgICA8cCBpZD1cImNvcHlyaWdodFwiPiZjb3B5O3t7bmFtZX19IHt7eWVhcnN9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RGb290ZXIge1xuICAgIG5hbWUgOiBzdHJpbmcgPSBcIkJyaWFuIExlZVwiO1xuICAgIGVtYWlsIDogc3RyaW5nID0gXCJ1Y3NkYmxlZUBnbWFpbC5jb21cIjtcbiAgICB5ZWFycyA6IHN0cmluZyA9IFwiMjAxNlwiO1xufVxuIl19