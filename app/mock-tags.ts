import { AvalaibleTag } from './models/avalaibleTag';
import { TagType } from './models/tagType';

export var TAGS: AvalaibleTag[] = [
    { displayName: "First Name", tagType: TagType.FirstName },
    { displayName: "Last Name", tagType: TagType.LastName },
    { displayName: "Telephone", tagType: TagType.Telephone },
    { displayName: "Job", tagType: TagType.Job },
    { displayName: "Company", tagType: TagType.Company },
    { displayName: "Category", tagType: TagType.Category },
]