import { api, LightningElement, track, wire} from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccount';
export default class Account extends LightningElement {
     @track columns = [
          { label: 'Account Number', fieldName: 'AccountNumber' },
          { label: 'Id', fieldName: 'Id'},
          { label: 'Account Name', fieldName: 'Name' },
          { label: 'Phone', fieldName: 'Phone' }
     ];

     @track accountList;
  
     
     //Method 2
     @wire (getAccount) wiredAccount({data,error}){
          if (data) {
               this.accountList = data;
               console.log(data); 
          } else if (error) {
               console.log(error);
               console.log("here");
          }
        }
   
}