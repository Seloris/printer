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
    }`],
    template: `
    <div id="mainSheet">
        <div *ngFor="let item of items" class="resize-container">
            <div class="resize-drag">
                <div class="editable">
                    Test temp 
                    </div>
            </div>
        </div>
    </div>
    `
})

export class CanvasComponent {
    @Input()
    items: Item[];
}