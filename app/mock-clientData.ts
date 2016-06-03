import { ClientData } from './models/clientData';

var clientData : ClientData = new ClientData();
clientData.Category = "Web development";
clientData.Company = "Infinite Square";
clientData.FirstName = "Daniel";
clientData.LastName = "Djordjevic";
clientData.Phone = "0646443578";
clientData.Job = "Développeur Web Junior";

export var CLIENT_DATA : ClientData = clientData;