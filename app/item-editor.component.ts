import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Item } from "./models/item";

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
            <label for="fontColorEdit"> Couleur de la police </label>
            <div class="colorPreview" [style.background]="item.fontColor"></div>
            <input class="color-editor" type="text" [(ngModel)]="item.fontColor" />
        </div>
        <div>
            <label for="backgroundColorEdit"> Couleur du fond </label>
            <div class="colorPreview" [style.background]="item.backgroundColor"></div>
            <input class="color-editor" type="text" [(ngModel)]="item.backgroundColor" />
        </div>
        <div>
            <label for="alignEdit"> Alignement </label>
            <div class="alignIcons">
                <i class="fa fa-align-left" aria-hidden="true" (click)="changeAlignment('left')"></i>
                <i class="fa fa-align-center" aria-hidden="true" (click)="changeAlignment('center')"></i>
                <i class="fa fa-align-right" aria-hidden="true" (click)="changeAlignment('right')"></i>
                <i class="fa fa-align-justify" aria-hidden="true" (click)="changeAlignment('justify')"></i>
            </div>
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
    
    changeAlignment(align:string){
        this.item.align = align;
    }
}