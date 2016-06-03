import { Item } from "./models/item";
import { Component, Input, Output, EventEmitter} from "@angular/core";
import { NgClass } from '@angular/common';

@Component({
    selector: "badge-editor",
    template: `
    <div class="badgeEditor-wrapper">
        <div class="badgeEditor">
            <div 
                *ngFor="let item of items" [class.selected]="item == selectedItem"
                (click)="selectItem(item)" 
                class="resize-drag item" 
                [id]="item.id"
                contentEditable="true"
                [style.color]="item.fontColor"
                [style.font-family]="item.font"
                [style.font-size]="item.fontSize"
                [style.background-color]="item.backgroundColor"
                [style.text-align]="item.align">
                {{item.text}}
            </div>
        </div>
    </div>
    `,
    directives: [NgClass]
})

export class BadgeEditorComponent {
    @Output()
    selectedItemChange: EventEmitter<Item> = new EventEmitter<Item>();
    @Input()
    selectedItem: Item;

    @Input()
    items: Item[];

    selectItem(item: Item) {
        this.selectedItem = item;
        this.selectedItemChange.emit(this.selectedItem);
    }

    deleteItem(item: Item) {
        var index: number = this.items.indexOf(item, 0);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}