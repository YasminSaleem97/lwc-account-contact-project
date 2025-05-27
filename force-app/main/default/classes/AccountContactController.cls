/**
* @File Name : AccountContactController.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : May 27, 2025
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | May 27, 2025 |   | Initial Version
**/

public class AccountContactController {
	@AuraEnabled(cacheable=true)
	public static List<Account> getAccounts(){
		return [SELECT Id, Name, Type, Industry FROM Account LIMIT 10];
	}

	@AuraEnabled(cacheable=true)
	public static List<Contact> getContacts(Id accountId){
		return [SELECT Id, LastName, Email, AccountId FROM Contact WHERE AccountId =: accountId];
	}
}