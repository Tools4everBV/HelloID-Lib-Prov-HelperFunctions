// generateUserPrincipalNameOption10.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/UserPrincipalName/Scripts/generateUserPrincipalNameOption10.js]
//
// Mapping logic to generate the UserPrincipalName according to the following convention.
// Eerste keuze	            B	j.vandenboele@domain.local
// 	                        BP	j.vandenboele@domain.local
// 	                        P	j.vandenboele@domain.local
// 	                        PB  j.vandenboele@domain.local
// Indien in gebruik	    B	janine.vandenboele@domain.local
// 	                        BP	janine.vandenboele@domain.local
// 	                        P	janine.vandenboele@domain.local
// 	                        PB	janine.vandenboele@domain.local
// Indien ook in gebruik	B	ja.vandenboele@domain.local
// 	                        BP	ja.vandenboele@domain.local
// 	                        P	ja.vandenboele@domain.local
// 	                        PB	ja.vandenboele@domain.local
// etc.
function generateUserPrincipalName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let mailNickName = '';

    if (Iteration === 0) {
        mailNickName = nickName.substring(0, 1) + '.';
    } else if (Iteration === 1) {
        mailNickName = nickName + '.';
    } else if (Iteration < (nickName.length)) {
        mailNickName = nickName.substring(0, (Iteration)) + '.';
    } else {
        mailNickName = nickName.substring(0, 1) + '.';
    }

    switch (convention) {
        case "P":
        case "PB":
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
    let iterationToUse = Iteration - (nickName.length - 2)
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const domain = 'domain.local';
    const maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    if (Iteration > (nickName.length - 1)) {
        mailNickName = mailNickName + suffix;
    }

    return mailNickName + '@' + domain;
}

generateUserPrincipalName();