import { Component } from '@angular/core';
import { Item } from './item'
import { ItemListComponent } from './item-list.component';
import { CanvasComponent } from './canvas.component';

declare var ctEditor: any;

@Component({
  selector: 'my-app',
  template: `
  <div id="framecontent">
    <div class="addItemPanel">
      <h1>Add a panel:</h1>
      <input [(ngModel)]="newTitle" />
      <input type="submit" (click)="toAdd()"/>
    </div>
     <my-item-list [items]="items"></my-item-list>
  </div>
  <div id="maincontent">
    <div class="rightEditor">
      <div class="showGrid">
        <button (click)="toggleGrid()">Toggle Grid</button>
      </div>
      <printer-canvas [showGrid]="showGrid" [items]="items"></printer-canvas>
    </div>
  </div>`,
  directives: [ItemListComponent, CanvasComponent]
})

export class AppComponent {
  currentId = 0;
  newTitle: string;
  items = new Array<Item>();

  showGrid = false;

  constructor() {
  }

  toggleGrid() {
    this.showGrid = !this.showGrid;
  }

  toAdd() {
    if (ctEditor.isEditing()) {
      alert("Not possible in edit mode !");
      return;
    }

    var item = new Item(this.newTitle, "editor" + this.currentId++);
    this.items.push(item);
    this.newTitle = "";
    setTimeout(function () {
      ctEditor.init('[data-editable]', 'data-name');;
    }, 500)
  }
}