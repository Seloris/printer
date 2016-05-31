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
var CanvasComponent = (function () {
    function CanvasComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CanvasComponent.prototype, "items", void 0);
    CanvasComponent = __decorate([
        core_1.Component({
            selector: "printer-canvas",
            styles: ["\n    #mainSheet{\n        box-shadow: 5px 5px 10px 0px #cfcfcf;\n        margin:24px;\n        border:solid 1px #cfcfcf;\n        width: 600px;\n        height:840px;\n    }\n    \n    .resize-drag{\n        display: inline-block;\n        background: red;\n    }"],
            template: "\n    <div id=\"mainSheet\">\n        <div *ngFor=\"let item of items\" class=\"resize-container\">\n            <div class=\"resize-drag\">\n                <textarea [id]=\"item.id\" [name]=\"item.id\" rows=\"10\" cols=\"40\">\n                Test temp \n                </textarea>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CanvasComponent);
    return CanvasComponent;
}());
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=canvas.component.js.map