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
var item_1 = require("./models/item");
var ItemEditorComponent = (function () {
    function ItemEditorComponent() {
        this.onDelete = new core_1.EventEmitter();
    }
    ItemEditorComponent.prototype.deleteItem = function () {
        this.onDelete.emit(this.item);
        this.item = null;
    };
    ItemEditorComponent.prototype.changeAlignment = function (align) {
        this.item.align = align;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_1.Item)
    ], ItemEditorComponent.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemEditorComponent.prototype, "onDelete", void 0);
    ItemEditorComponent = __decorate([
        core_1.Component({
            selector: "item-editor",
            template: "\n    <div *ngIf=\"item\" class=\"editPanel\">\n        <div>\n            <label for=\"fontEdit\"> Police </label>\n            <input class=\"full-width-editor\" type=\"text\" [(ngModel)]=\"item.font\" />\n        </div>\n        <div>\n            <label for=\"fontSizeEdit\"> Taille de la police </label>\n            <input class=\"full-width-editor\" type=\"text\" [(ngModel)]=\"item.fontSize\" />\n        </div>\n        <div>\n            <label for=\"fontColorEdit\"> Couleur de la police </label>\n            <div class=\"colorPreview\" [style.background]=\"item.fontColor\"></div>\n            <input class=\"color-editor\" type=\"text\" [(ngModel)]=\"item.fontColor\" />\n        </div>\n        <div>\n            <label for=\"backgroundColorEdit\"> Couleur du fond </label>\n            <div class=\"colorPreview\" [style.background]=\"item.backgroundColor\"></div>\n            <input class=\"color-editor\" type=\"text\" [(ngModel)]=\"item.backgroundColor\" />\n        </div>\n        <div>\n            <label for=\"alignEdit\"> Alignement </label>\n            <div class=\"alignIcons\">\n                <i class=\"fa fa-align-left\" aria-hidden=\"true\" (click)=\"changeAlignment('left')\"></i>\n                <i class=\"fa fa-align-center\" aria-hidden=\"true\" (click)=\"changeAlignment('center')\"></i>\n                <i class=\"fa fa-align-right\" aria-hidden=\"true\" (click)=\"changeAlignment('right')\"></i>\n                <i class=\"fa fa-align-justify\" aria-hidden=\"true\" (click)=\"changeAlignment('justify')\"></i>\n            </div>\n        </div>\n        <div>\n            <input type=\"submit\" value=\"Delete\" (click)=\"deleteItem()\" class=\"deletePanelButton\"/>\n        </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ItemEditorComponent);
    return ItemEditorComponent;
}());
exports.ItemEditorComponent = ItemEditorComponent;
//# sourceMappingURL=item-editor.component.js.map