import { Component, OnInit } from "@angular/core";
import { TagType } from "./models/tagType";
import { TagService } from "./services/tag.service"
import { AvalaibleTag } from "./models/avalaibleTag";

@Component({
    selector:"tag-selector",
    template:`
    <div class="tagSelectorContainer">
        <div>Un texte ici</div>
        <div *ngFor="let tag of tags" class="tagContainer">
            <div (click)="addTag(tag.tagType)" class="box"></div>
             <p>{{tag.displayName}}</p>
        </div>
        <div>TAGS</div>
    </div>
    `,
    providers: [TagService]
})

export class TagSelectorComponent implements OnInit{
    tags : AvalaibleTag[];
    
    constructor(private tagService:TagService){
    }
    
    addTag(tagType:TagType)
    {
        alert(tagType);
    }
    
    getTags(){
        this.tagService.getAvalaibleTags().then(tags => this.tags = tags)
    }
    
    ngOnInit(){
        this.getTags();
    }
}