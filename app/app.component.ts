import { Component  } from '@angular/core';
import { Item } from './models/item'
import { ItemEditorComponent } from './item-editor.component';
import { CanvasComponent } from './canvas.component';
import { TagSelectorComponent } from './tag-selector.component'


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
      <printer-canvas 
          [showGrid]="showGrid" 
          [items]="items" 
          [(selectedItem)]="selectedItem">
      </printer-canvas>
      <tag-selector>
      </tag-selector>
  </div>`,
  directives: [ItemEditorComponent, CanvasComponent, TagSelectorComponent]
})

export class AppComponent {
  currentId = 0;
  items = new Array<Item>();
  selectedItem: Item;

  showGrid = false;

  constructor() {
  }

  onDelete(itemToDelete: Item) {
    console.log(itemToDelete);
    var index: number = this.items.indexOf(itemToDelete);
    console.log(index);
    this.items.splice(index, 1);
  }
}