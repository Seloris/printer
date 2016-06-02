export class Item {
    
    public id: number;
    public text: string;
    public fontColor: string;
    public fontSize: number;
    public font: string;
   
    constructor(id: number) {
        this.id = id;
        
        this.fontColor = "#000";
        this.font = "Quattrocento Sans";
        this.fontSize = 24;
    }
}