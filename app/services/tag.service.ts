import { Injectable } from '@angular/core'
import { TAGS } from '../mock-tags'

@Injectable()
export class TagService{
    getAvalaibleTags(){
        return Promise.resolve(TAGS);
    }
}