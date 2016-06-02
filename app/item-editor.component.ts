import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Item } from "./item";

@Component({
    selector:"item-editor",
    template: `
    <div *ngIf="item" class="editPanel">
        <div>
            <label for="fontEdit"> Police </label>
            <input class="full-width-editor" type="text" [(ngModel)]="item.font" />
        </div>
        <div>
            <label for="fontSizeEdit"> Taille de la police </label>
            <input class="full-width-editor" type="text" [(ngModel)]="item.fontSize" />
        </div>
        <div>
            <label for="fontColorEdit"> Couleur </label>
            <div id="colorPreview" [style.background]="item.fontColor"></div><input type="text" [(ngModel)]="item.fontColor" />
        </div>
        <div>
            <input type="submit" value="Delete" (click)="deleteItem()" class="deletePanelButton"/>
        </div>
    </div>`
})

export class ItemEditorComponent {
    @Input()
    item: Item;
    
    @Output()
    onDelete = new EventEmitter<Item>();
    
    deleteItem(){
        this.onDelete.emit(this.item);
        this.item = null;
    }
}