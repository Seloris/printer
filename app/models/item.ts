import { TagType } from './tagType';

export class Item {

    public id: number;
    public text: string;
    public fontColor: string;
    public fontSize: number;
    public font: string;
    public backgroundColor: string;
    public align: string;
    public tagType: TagType;

    constructor(id: number, tagType: TagType, text :string) {
        this.id = id;
        this.tagType = tagType;
        this.fontColor = "#000";
        this.font = "Quattrocento Sans";
        this.fontSize = 22;
        this.backgroundColor = "transparent";
        this.align = "align-left";
        this.text = text;
    }
}