"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require('@angular/common');
var CanvasComponent = (function () {
    function CanvasComponent() {
        this.test = false;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CanvasComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CanvasComponent.prototype, "showGridd", void 0);
    CanvasComponent = __decorate([
        core_1.Component({
            selector: "printer-canvas",
            inputs: ["showGrid"],
            template: "\n    <div id=\"mainSheet\">\n        <div *ngFor=\"let item of items\">\n               <div [ngClass]=\"{bordered: showGrid}\" class=\"resize-drag\" data-editable [attr.data-name]=\"item.id\" [id]=\"item.id\">\n                    <p>{{item.title}} {{showGrid}} ok</p>\n               </div>\n        </div>\n    </div>\n    ",
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], CanvasComponent);
    return CanvasComponent;
}());
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=canvas.component.js.map