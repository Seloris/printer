import { Item } from "./item";
import { Component, Input} from "@angular/core";

@Component({
    selector: "printer-canvas",
    styles: [`
    #mainSheet{
        box-shadow: 5px 5px 10px 0px #cfcfcf;
        margin:24px;
        border:solid 1px #cfcfcf;
        width: 600px;
        height:840px;
    }
    
    .resize-drag{
        display: inline-block;
        background: red;
    }`],
    template: `
    <div id="mainSheet">
        <div *ngFor="let item of items" class="resize-container">
            <div class="resize-drag">
                <textarea [id]="item.id" [name]="item.id" rows="10" cols="40">
                Test temp 
                </textarea>
            </div>
        </div>
    </div>
    `
})

export class CanvasComponent {
    @Input()
    items: Item[];
}