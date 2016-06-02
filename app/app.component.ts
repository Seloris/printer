import { Component  } from '@angular/core';
import { Item } from './item'
import { ItemEditorComponent } from './item-editor.component';
import { CanvasComponent } from './canvas.component';


@Component({
  selector: 'my-app',
  template: `
  <div id="leftMenu">
    <div class="editHeader">
    EDITION
    </div>
      <item-editor 
        [item]="selectedItem"
        (onDelete)="onDelete($event)">
        </item-editor>
  </div>
  <div id="mainContent">
    <div class="rightEditor">
      <input type="submit" value="Add a Tag" (click)="toAdd()" class="addPanelButton"/>
      <printer-canvas 
          [showGrid]="showGrid" 
          [items]="items" 
          [(selectedItem)]="selectedItem">
      </printer-canvas>
    </div>
  </div>`,
  directives: [ItemEditorComponent, CanvasComponent]
})

export class AppComponent {
  currentId = 0;
  items = new Array<Item>();
  selectedItem: Item;

  showGrid = false;

  constructor() {
  }

  toAdd() {
    var item = new Item(this.currentId++);
    this.items.push(item);
  }

  onDelete(itemToDelete: Item) {
    console.log(itemToDelete);
    var index: number = this.items.indexOf(itemToDelete);
    console.log(index);
    this.items.splice(index, 1);
  }
}