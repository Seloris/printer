import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TagType } from "./models/tagType";
import { TagService } from "./services/tag.service"
import { AvalaibleTag } from "./models/avalaibleTag";

@Component({
    selector:"tag-selector",
    template:`
    <div class="tagSelectorContainer">
        <p class="tagTextHeader">Drag and drop each element on the badge editor</p>
        <hr />
        <p class="tagHeader">TAGS</p>
        <div *ngFor="let tag of tags" class="tagContainer">
            <div (click)="addTag(tag.tagType)" class="box"></div>
             <p>{{tag.displayName}}</p>
        </div>
    </div>
    `,
    providers: [TagService]
})

export class TagSelectorComponent implements OnInit{
    tags : AvalaibleTag[];
    
    @Output()
    onAddTag = new EventEmitter<TagType>();
    
    constructor(private tagService:TagService){
    }
    
    addTag(tagType:TagType)
    {
        this.onAddTag.emit(tagType);
    }
    
    getTags(){
        this.tagService.getAvalaibleTags().then(tags => this.tags = tags)
    }
    
    ngOnInit(){
        this.getTags();
    }
}