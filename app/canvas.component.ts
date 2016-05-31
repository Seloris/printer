import { Item } from "./item";
import { Component, Input} from "@angular/core";
import { NgClass } from '@angular/common';

@Component({
    selector: "printer-canvas",
    inputs: ["showGrid"],
    template: `
    <div id="mainSheet">
        <div *ngFor="let item of items">
               <div [ngClass]="{bordered: showGrid}" class="resize-drag" data-editable [attr.data-name]="item.id" [id]="item.id">
                    <p>{{item.title}} {{showGrid}} ok</p>
               </div>
        </div>
    </div>
    `,
    directives: [NgClass]
})

export class CanvasComponent {
    test = false;
    
    @Input()
    items: Item[];

    @Input()
    showGridd: boolean;
}