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
var core_1 = require('@angular/core');
var item_editor_component_1 = require('./item-editor.component');
var canvas_component_1 = require('./canvas.component');
var tag_selector_component_1 = require('./tag-selector.component');
var AppComponent = (function () {
    function AppComponent() {
        this.currentId = 0;
        this.items = new Array();
        this.showGrid = false;
    }
    AppComponent.prototype.onDelete = function (itemToDelete) {
        console.log(itemToDelete);
        var index = this.items.indexOf(itemToDelete);
        console.log(index);
        this.items.splice(index, 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div id=\"leftMenu\">\n    <div class=\"editHeader\">\n    EDITION\n    </div>\n      <item-editor \n        [item]=\"selectedItem\"\n        (onDelete)=\"onDelete($event)\">\n        </item-editor>\n  </div>\n  <div id=\"mainContent\">\n      <printer-canvas \n          [showGrid]=\"showGrid\" \n          [items]=\"items\" \n          [(selectedItem)]=\"selectedItem\">\n      </printer-canvas>\n      <tag-selector>\n      </tag-selector>\n  </div>",
            directives: [item_editor_component_1.ItemEditorComponent, canvas_component_1.CanvasComponent, tag_selector_component_1.TagSelectorComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map