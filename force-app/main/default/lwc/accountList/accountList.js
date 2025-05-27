import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountContactController.getAccounts';
const COLUMNS = [{label:'Name', fieldName:'Name', type:'button', typeAttributes:{label:{fieldName:'Name'}, name:'view_contacts', variant:'base'}},
                {label:'Industry', fieldName:'Industry'},
                {label:'Type', fieldName:'Type'}];
export default class AccountList extends LightningElement {
    columns= COLUMNS;
    @track accounts;
    @track selectedAccountId;
    @track error;

    @wire(getAccounts)
    wiredAccount({data,error}){
        if(data){
            this.accounts=data;
        }else if(error){
            this.error = error
        }
    }

    handleRowEvent(event){
        const actionName = event.detail.action.name;
        const row= event.detail.row;
        console.log('row>>>>', row);
        if(actionName === 'view_contacts'){
            console.log('act>>>>', actionName);
            this.selectedAccountId= row.Id;
        }
    }

}