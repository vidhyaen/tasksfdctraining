import { api, track ,wire, LightningElement } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import Street from '@salesforce/schema/Service_Request__c.Street__c';
import state from '@salesforce/schema/Service_Request__c.state__c';
import City from '@salesforce/schema/Service_Request__c.City__c';
import Country from '@salesforce/schema/Service_Request__c.Country__c';
import Zipcode from '@salesforce/schema/Service_Request__c.Zip_Code__c';
const fields=[Street,state,City,Country,Zipcode];
export default class Formataddress extends LightningElement {
@api recordId;
@wire(getRecord, { recordId: '$recordId',fields})ServiceRequest;

get streetValue()
{
    return getFieldValue(this.ServiceRequest.data,Street);
}
get stateValue()
{
    return getFieldValue(this.ServiceRequest.data,state);
}
get CountryValue()
{
    return getFieldValue(this.ServiceRequest.data,Country);
}
get CityValue()
{
    return getFieldValue(this.ServiceRequest.data,City);
}
get ZipcodeValue()
{
    return getFieldValue(this.ServiceRequest.data,Zipcode);
}

}