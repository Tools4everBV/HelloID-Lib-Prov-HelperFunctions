// generateUserPrincipalNameOption8.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Mail/Scripts/generateUserPrincipalNameOption8.js]
//
// Mapping logic to generate the Mail according to the following convention.
// First choice	        B	jvandenboele@domain.local
// 	                    BP	jvandenboele@domain.local
// 	                    P	jdevries@domain.local
// 	                    PB  jdevries@domain.local
// If in use	        B	jvandenboele1@domain.local
// 	                    BP	jvandenboele1@domain.local
// 	                    P	jdevries1@domain.local
// 	                    PB  jdevries1@domain.local
// If also in use   	B	jvandenboele2@domain.local
// 	                    BP	jvandenboele2@domain.local
// 	                    P	jdevries2@domain.local
// 	                    PB  jdevries2@domain.local
// etc.
function generateUserPrincipalName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let mailNickName = nickName.substring(0, 1);

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
    let suffix = Iteration === 0 ? '' : Iteration;
    const domain = 'domain.local';
    const maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    mailNickName = mailNickName + suffix;

    return mailNickName + '@' + domain;
}

generateUserPrincipalName();