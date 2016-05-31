import { Item } from "./item";
import { Component, Input} from "@angular/core";

@Component({
    selector:"my-item-list",
    template: `
    <ul>
    <li *ngFor="let item of items">
        <span>{{item.id}} - {{item.title}}</span>
    </li>
    </ul>`
})

export class ItemListComponent {
    @Input()
    items: Item[];
}