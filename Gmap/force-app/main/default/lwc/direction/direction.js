import { api, track ,wire, LightningElement } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class Map extends LightningElement {
    @api recordId;
    state;
    city;
    Name;
    street;
    country;
    postalcode;
    zoomLevel;
    listView;
    marker;
    @track mapmarkers=[];
  
   @wire(getRecord, { recordId: '$recordId', layoutTypes: ['Full']})
   data({data})
   {
    if(data)
    {
      console.log(data);
      this.state=data.fields.State__c.value
      this.countrty=data.fields.Country__c.value
      this.postalcode=data.fields.Zip_Code__c.value
      this.street=data.fields.Street__c.value;
      this.city=data.fields.City__c.value;
      this.Name=data.fields.Name.value;

      this.marker =  {
            location: {
                Street: this.street,
                City: this.city,
                State: this.state,
                Country:this.countrty,
                PostalCode:this.postalcode
            },
            type: 'Circle',
            radius: 200,
            strokeColor: '#FFF000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FFF000',
            fillOpacity: 0.35,
            icon: 'standard:account',

            title: this.Name,
            description:
                'A grand setting for one of the greatest collections of art, from ancient to contemporary.',
        },
        this.mapmarkers=[this.marker];
    
    this.zoomLevel = 15;
    this.listView = 'visible';
    }
   
   }
   
}