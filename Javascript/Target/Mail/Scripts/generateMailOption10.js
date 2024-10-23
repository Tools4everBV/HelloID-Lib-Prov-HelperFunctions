// generateMailOption10.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Mail/Scripts/generateMailOption10.js]
//
// Mapping logic to generate the Mail according to the following convention.
// First choice	        B	janine.van.den.boele@domain.local
// 	                    BP	janine.van.den.boele@domain.local
// 	                    P	janine.de.vries@domain.local
// 	                    PB  janine.de.vries@domain.local
// If in use	        B	janine.van.den.boele2@domain.local
// 	                    BP	janine.van.den.boele2@domain.local
// 	                    P	janine.de.vries2@domain.local
// 	                    PB  janine.de.vries2@domain.local
// If also in use   	B	janine.van.den.boele3@domain.local
// 	                    BP	janine.van.den.boele3@domain.local
// 	                    P	janine.de.vries3@domain.local
// 	                    PB  janine.de.vries3@domain.local
// etc.
function generateMail() {
    const domain = 'domain.local';

    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let mailNickName = nickName + '.';

    switch (convention) {
        case "P":
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickName = mailNickName + middleNamePartner.replace(/ /g, '.') + '.' }
            mailNickName = mailNickName + lastNamePartner;
            break;
        case "B":
        case "BP":
        default:
            if (typeof middleName !== 'undefined' && middleName) { mailNickName = mailNickName + middleName.replace(/ /g, '.') + '.' }
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
    let iterationToUse = Iteration < 1 ? '' : (Iteration + 1)
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    mailNickName = mailNickName + suffix;

    return mailNickName + '@' + domain;
}

generateMail();
