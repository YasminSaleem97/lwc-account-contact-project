import { LightningElement, track, wire, api } from 'lwc';
import getContacts from '@salesforce/apex/AccountContactController.getContacts';
const COLUMNS = [{label:'Name', fieldName:'Name', type:'text'},
            {label: 'Email', fieldName:'Email', type:'email'},
            {label: 'Phone', fieldName:'Phone', type:'phone'}]
export default class ContactList extends LightningElement {
    columns = COLUMNS
    @api accountId;
    @track contacts;
    @track error;

    @wire(getContacts,{accountId: '$accountId' })
    wiredcontacts({data,error}){
        if(data){
            this.contacts=data
            this.error = undefined
        }else if(error){
            this.error=error
            this.contacts=undefined
        }
    }

}