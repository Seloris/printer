import { Component  } from '@angular/core';
import { Item } from './models/item'
import { ItemEditorComponent } from './item-editor.component';
import { BadgeEditorComponent } from './badge-editor.component';
import { TagSelectorComponent } from './tag-selector.component'
import { TagType } from './models/tagType'
import { ClientDataService } from './services/client-data.service'

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
  <div id="right-content">
    <div class="main-container">
        <div class="main-container-header">
          Press Badge
        </div>
        
        <div class="main-container-content">
          <div class="column">
            <h1>Section 1</h1>
            <badge-editor 
                [showGrid]="showGrid" 
                [items]="items" 
                [(selectedItem)]="selectedItem">
            </badge-editor>
          </div>     
          
          <hr class="vertical" />
          
          <div class="column">
            <h1>Parameters</h1>
            <tag-selector (onAddTag)="onAddTag($event)">
            </tag-selector>
          </div>
          
          <br class="clear"/>
        </div>
      </div>
  </div>`,
  directives: [BadgeEditorComponent, ItemEditorComponent, TagSelectorComponent],
  providers:[ClientDataService]
})

export class AppComponent {
  currentId = 0;
  items = new Array<Item>();
  selectedItem: Item;

  showGrid = false;

  constructor(private clientDataService : ClientDataService) {
  }

  onDelete(itemToDelete: Item) {
    var index: number = this.items.indexOf(itemToDelete);
    this.items.splice(index, 1);
  }

  onAddTag(tagToAdd: TagType) {
    var text = this.clientDataService.getDataForTagType(tagToAdd);
    var item : Item = new Item(this.currentId++, tagToAdd, text);
    this.items.push(item);
  }
}