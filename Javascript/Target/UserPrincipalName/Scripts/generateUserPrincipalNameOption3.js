// generateUserPrincipalNameOption3.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/UserPrincipalName/Scripts/generateUserPrincipalNameOption3.js]
//
// Mapping logic to generate the UserPrincipalName according to the following convention.
// First choice	        B	j.vandenboele@domain.local
// 	                    BP	j.vandenboele@domain.local
// 	                    P	j.devries@domain.local
// 	                    PB  j.devries@domain.local
// If in use	        B	ja.vandenboele@domain.local
// 	                    BP	ja.vandenboele@domain.local
// 	                    P	ja.devries@domain.local
// 	                    PB  ja.devries@domain.local
// If also in use   	B	janine.vandenboele@domain.local
// 	                    BP	janine.vandenboele@domain.local
// 	                    P	janine.devries@domain.local
// 	                    PB  janine.devries@domain.local
// If also in use   	B	janine.vandenboele2@domain.local
// 	                    BP	janine.vandenboele2@domain.local
// 	                    P	janine.devries2@domain.local
// 	                    PB  janine.devries2@domain.local
// etc.
function generateUserPrincipalName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let mailNickName = '';
    if (Iteration === 0) {
        mailNickName = nickName.substring(0, 1) + '.';
    } else if (Iteration === 1) {
        mailNickName = nickName.substring(0, 2) + '.';
    } else {
        mailNickName = nickName + '.';
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
    let suffix = Iteration < 3 ? '' : (Iteration - 1).toString();
    const domain = 'domain.local';
    const maxAttributeLength = (256 - suffix.length - domain.length - 1);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    mailNickName = mailNickName + suffix;

    return mailNickName + '@' + domain;
}

generateUserPrincipalName();