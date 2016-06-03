import { Injectable } from '@angular/core'
import { CLIENT_DATA } from '../mock-clientData'
import { TagType } from '../models/tagType';

@Injectable()
export class ClientDataService{
    getDataForTagType(tagType: TagType){
        var toReturn : string;
        switch (tagType) {
            case TagType.Category:
                toReturn = CLIENT_DATA.Category;
                break;
            case TagType.Company:
                toReturn = CLIENT_DATA.Company;
                break;
            case TagType.FirstName:
                toReturn = CLIENT_DATA.FirstName;
                break;
            case TagType.LastName:
                toReturn = CLIENT_DATA.LastName;
                break;
            case TagType.Job:
                toReturn = CLIENT_DATA.Job;
                break;
            case TagType.Telephone:
                toReturn = CLIENT_DATA.Phone;
                break;
        }
        return toReturn;
    }
}