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
var item_1 = require('./item');
var item_list_component_1 = require('./item-list.component');
var canvas_component_1 = require('./canvas.component');
var AppComponent = (function () {
    function AppComponent() {
        this.currentId = 0;
        this.items = new Array();
        this.showGrid = false;
    }
    AppComponent.prototype.toggleGrid = function () {
        this.showGrid = !this.showGrid;
    };
    AppComponent.prototype.toAdd = function () {
        if (ctEditor.isEditing()) {
            alert("Not possible in edit mode !");
            return;
        }
        var item = new item_1.Item(this.newTitle, "editor" + this.currentId++);
        this.items.push(item);
        this.newTitle = "";
        setTimeout(function () {
            ctEditor.init('[data-editable]', 'data-name');
            ;
        }, 500);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div id=\"framecontent\">\n    <div class=\"addItemPanel\">\n      <h1>Add a panel:</h1>\n      <input [(ngModel)]=\"newTitle\" />\n      <input type=\"submit\" (click)=\"toAdd()\"/>\n    </div>\n     <my-item-list [items]=\"items\"></my-item-list>\n  </div>\n  <div id=\"maincontent\">\n    <div class=\"rightEditor\">\n      <div class=\"showGrid\">\n        <button (click)=\"toggleGrid()\">Toggle Grid</button>\n      </div>\n      <printer-canvas [showGrid]=\"showGrid\" [items]=\"items\"></printer-canvas>\n    </div>\n  </div>",
            directives: [item_list_component_1.ItemListComponent, canvas_component_1.CanvasComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map