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
var item_1 = require("./models/item");
var core_1 = require("@angular/core");
var common_1 = require('@angular/common');
var CanvasComponent = (function () {
    function CanvasComponent() {
        this.selectedItemChange = new core_1.EventEmitter();
    }
    CanvasComponent.prototype.selectItem = function (item) {
        this.selectedItem = item;
        this.selectedItemChange.emit(this.selectedItem);
    };
    CanvasComponent.prototype.deleteItem = function (item) {
        var index = this.items.indexOf(item, 0);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CanvasComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_1.Item)
    ], CanvasComponent.prototype, "selectedItem", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CanvasComponent.prototype, "items", void 0);
    CanvasComponent = __decorate([
        core_1.Component({
            selector: "printer-canvas",
            template: "\n    <div id=\"mainSheet\">\n        <div \n            *ngFor=\"let item of items\" [class.selected]=\"item == selectedItem\"\n            (click)=\"selectItem(item)\" \n            class=\"resize-drag item\" \n            [id]=\"item.id\"\n            contentEditable=\"true\"\n            [style.color]=\"item.fontColor\"\n            [style.font-family]=\"item.font\"\n            [style.font-size]=\"item.fontSize\"\n            [style.background-color]=\"item.backgroundColor\"\n            [style.text-align]=\"item.align\">\n            Lorem ipsum\n       </div>\n    </div>\n    ",
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], CanvasComponent);
    return CanvasComponent;
}());
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=canvas.component.js.map