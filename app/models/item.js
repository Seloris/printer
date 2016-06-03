"use strict";
var Item = (function () {
    function Item(id, tagType, text) {
        this.id = id;
        this.tagType = tagType;
        this.fontColor = "#000";
        this.font = "Quattrocento Sans";
        this.fontSize = 22;
        this.backgroundColor = "transparent";
        this.align = "align-left";
        this.text = text;
    }
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map