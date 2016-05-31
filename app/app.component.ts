import { Component } from '@angular/core';
import { Item } from './item'
import { ItemListComponent } from './item-list.component';
import { CanvasComponent } from './canvas.component';

declare var CkEditorRefresh: any;

@Component({
  selector: 'my-app',
  template: `
  <div id="framecontent">
     <input [(ngModel)]="newTitle" />
     <input type="submit" (click)="toAdd()"/>
    <div>
    salut 1
    </div>
     <my-item-list [items]="items"></my-item-list>
  </div>
  <div id="maincontent">
    <printer-canvas [items]="items"></printer-canvas>
  </div>`,
  directives: [ItemListComponent, CanvasComponent]
})

export class AppComponent {
  currentId = 0;
  newTitle: string;
  items = new Array<Item>();

  constructor() {
  }

  toAdd() {
    var item = new Item(this.newTitle, "editor" + this.currentId++);
    this.items.push(item);
    this.newTitle = "";
    setTimeout(function () {
      CkEditorRefresh(item.id);
    }, 1000)
  }
}