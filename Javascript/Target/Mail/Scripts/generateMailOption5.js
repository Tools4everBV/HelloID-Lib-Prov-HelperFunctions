// generateMailOption5.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/feat-rework-javascript/Javascript/Target/Mail/Scripts/generateMailOption5.js]
//
// Mapping logic to generate the Mail according to the following convention.
// First choice	            B	jvandenboele@domain.local
// 	                        BP	jvandenboele@domain.local
// 	                        P	jdevries@domain.local
// 	                        PB  jdevries@domain.local
// If in use	            B	javandenboele@domain.local
// 	                        BP	javandenboele@domain.local
// 	                        P	jadevries@domain.local
// 	                        PB	jadevries@domain.local
// If also in use	        B	janvandenboele@domain.local
// 	                        BP	janvandenboele@domain.local
// 	                        P	jandevries@domain.local
// 	                        PB	jandevries@domain.local
// etc.
function generateMail() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let mailNickName = nickName.substring(0, (Iteration + 1));

    switch (convention) {
        case "P":
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickName = mailNickName + middleNamePartner.replace(/ /g, '') }
            mailNickName = mailNickName + lastNamePartner;
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

generateMail();