// generateMailOption11.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Mail/Scripts/generateMailOption11.js]
//
// Mapping logic to generate the Mail according to the following convention.
// First choice	        B	janine.vandenboele@domain.local
// 	                    BP	janine.vandenboele@domain.local
// 	                    P	janine.devries@domain.local
// 	                    PB  janine.devries@domain.local
// If in use           	B	j.vandenboele@domain.local
// 	                    BP	j.vandenboele@domain.local
// 	                    P	j.devries@domain.local
// 	                    PB  j.devries@domain.local
// If also in use   	B	ja.vandenboele@domain.local
// 	                    BP	ja.vandenboele@domain.local
// 	                    P	ja.devries@domain.local
// 	                    PB  ja.devries@domain.loca
// If also in use   	B	jan.vandenboele@domain.local
// 	                    BP	jan.vandenboele@domain.local
// 	                    P	jan.devries@domain.local
// 	                    PB  jan.devries@domain.loca
// etc.
// If full name used, use iterator  	B	janine.vandenboele2@domain.local
// 	                                    BP	janine.vandenboele2@domain.local
// 	                                    P	janine.devries2@domain.local
// 	                                    PB  janine.devries2@domain.local    
// etc.

function generateMail() {
    const domain = 'domain.local';

    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;
 
    let mailNickName = '';
    if (Iteration === 0) {
        mailNickName = nickName + '.';
    } else {
        mailNickName = nickName.substring(0, (Iteration)) + '.';
    }
 
    switch (convention) {
        case "P":
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickName = mailNickName + middleNamePartner.replace(/ /g, '') }
            mailNickName = mailNickName + lastNamePartner;
            break;
        case "B":
        case "BP":
        default:
            if (typeof middleName !== 'undefined' && middleName) { mailNickName = mailNickName + middleName.replace(/ /g, '') }
            mailNickName = mailNickName + lastName;
            break;
    }
 
    // Trim spaces at start and end
    mailNickName = mailNickName.trim();
 
    // Convert to lower case
    mailNickName = mailNickName.toLowerCase();
 
    // Remove diacritical chars
    mailNickName = deleteDiacriticalMarks(mailNickName);
 
    // Remove blank chars and "'"
    mailNickName = mailNickName.replace(/[^0-9a-zA-Z.\-_]/g, '');
 
    // Shorten string to maxAttributeLength minus iteration length
    let suffix = ''
    let iterationToUse = Iteration - (nickName.length - 1) <= 1 ? '' : (Iteration - (nickName.length - 1))
    suffix = Iteration === 0 ? '' : (iterationToUse);

    const maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);
 
    // Use the iterator if needed
    mailNickName = mailNickName + suffix;
 
    return mailNickName + '@' + domain;
}
 
generateMail();