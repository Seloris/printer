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
var item_1 = require('./models/item');
var item_editor_component_1 = require('./item-editor.component');
var badge_editor_component_1 = require('./badge-editor.component');
var tag_selector_component_1 = require('./tag-selector.component');
var client_data_service_1 = require('./services/client-data.service');
var AppComponent = (function () {
    function AppComponent(clientDataService) {
        this.clientDataService = clientDataService;
        this.currentId = 0;
        this.items = new Array();
        this.showGrid = false;
    }
    AppComponent.prototype.onDelete = function (itemToDelete) {
        var index = this.items.indexOf(itemToDelete);
        this.items.splice(index, 1);
    };
    AppComponent.prototype.onAddTag = function (tagToAdd) {
        var text = this.clientDataService.getDataForTagType(tagToAdd);
        var item = new item_1.Item(this.currentId++, tagToAdd, text);
        this.items.push(item);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div id=\"leftMenu\">\n    <div class=\"editHeader\">\n    EDITION\n    </div>\n      <item-editor \n        [item]=\"selectedItem\"\n        (onDelete)=\"onDelete($event)\">\n        </item-editor>\n  </div>\n  <div id=\"right-content\">\n    <div class=\"main-container\">\n        <div class=\"main-container-header\">\n          Press Badge\n        </div>\n        \n        <div class=\"main-container-content\">\n          <div class=\"column\">\n            <h1>Section 1</h1>\n            <badge-editor \n                [showGrid]=\"showGrid\" \n                [items]=\"items\" \n                [(selectedItem)]=\"selectedItem\">\n            </badge-editor>\n          </div>     \n          \n          <hr class=\"vertical\" />\n          \n          <div class=\"column\">\n            <h1>Parameters</h1>\n            <tag-selector (onAddTag)=\"onAddTag($event)\">\n            </tag-selector>\n          </div>\n          \n          <br class=\"clear\"/>\n        </div>\n      </div>\n  </div>",
            directives: [badge_editor_component_1.BadgeEditorComponent, item_editor_component_1.ItemEditorComponent, tag_selector_component_1.TagSelectorComponent],
            providers: [client_data_service_1.ClientDataService]
        }), 
        __metadata('design:paramtypes', [client_data_service_1.ClientDataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map