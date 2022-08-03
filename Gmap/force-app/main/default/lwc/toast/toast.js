import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Toast extends LightningElement {
   
    connectedCallback(){
       
        const evt = new ShowToastEvent({
            title: "hello",
            message: "welcome to mobile service",
            variant: 'success'
        });
        this.dispatchEvent(evt);
    
}
}