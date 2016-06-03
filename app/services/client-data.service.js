"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_clientData_1 = require('../mock-clientData');
var tagType_1 = require('../models/tagType');
var ClientDataService = (function () {
    function ClientDataService() {
    }
    ClientDataService.prototype.getDataForTagType = function (tagType) {
        var toReturn;
        switch (tagType) {
            case tagType_1.TagType.Category:
                toReturn = mock_clientData_1.CLIENT_DATA.Category;
                break;
            case tagType_1.TagType.Company:
                toReturn = mock_clientData_1.CLIENT_DATA.Company;
                break;
            case tagType_1.TagType.FirstName:
                toReturn = mock_clientData_1.CLIENT_DATA.FirstName;
                break;
            case tagType_1.TagType.LastName:
                toReturn = mock_clientData_1.CLIENT_DATA.LastName;
                break;
            case tagType_1.TagType.Job:
                toReturn = mock_clientData_1.CLIENT_DATA.Job;
                break;
            case tagType_1.TagType.Telephone:
                toReturn = mock_clientData_1.CLIENT_DATA.Phone;
                break;
        }
        return toReturn;
    };
    ClientDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ClientDataService);
    return ClientDataService;
}());
exports.ClientDataService = ClientDataService;
//# sourceMappingURL=client-data.service.js.map