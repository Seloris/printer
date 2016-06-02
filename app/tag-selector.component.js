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
var tag_service_1 = require("./services/tag.service");
var TagSelectorComponent = (function () {
    function TagSelectorComponent(tagService) {
        this.tagService = tagService;
    }
    TagSelectorComponent.prototype.addTag = function (tagType) {
        alert(tagType);
    };
    TagSelectorComponent.prototype.getTags = function () {
        var _this = this;
        this.tagService.getAvalaibleTags().then(function (tags) { return _this.tags = tags; });
    };
    TagSelectorComponent.prototype.ngOnInit = function () {
        this.getTags();
    };
    TagSelectorComponent = __decorate([
        core_1.Component({
            selector: "tag-selector",
            template: "\n    <div class=\"tagSelectorContainer\">\n        <div>Un texte ici</div>\n        <div *ngFor=\"let tag of tags\" class=\"tagContainer\">\n            <div (click)=\"addTag(tag.tagType)\" class=\"box\"></div>\n             <p>{{tag.displayName}}</p>\n        </div>\n        <div>TAGS</div>\n    </div>\n    ",
            providers: [tag_service_1.TagService]
        }), 
        __metadata('design:paramtypes', [tag_service_1.TagService])
    ], TagSelectorComponent);
    return TagSelectorComponent;
}());
exports.TagSelectorComponent = TagSelectorComponent;
//# sourceMappingURL=tag-selector.component.js.map