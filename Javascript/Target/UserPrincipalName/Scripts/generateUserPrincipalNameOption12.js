// generateUserPrincipalNameOption12.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/UserPrincipalName/Scripts/generateUserPrincipalNameOption12.js]
//
// Mapping logic to generate the UserPrincipalName according to the following convention.
// First choice	        B	hc.vanden.boele@domain.local
// 	                    BP	hc.vanden.boele-de.vries@domain.local
// 	                    P	hc.de.vries@domain.local
// 	                    PB  hc.de.vries-vanden.boele@domain.local
// If in use	        B	hc.vanden.boele2@domain.local
// 	                    BP	hc.vanden.boele-de.vries2@domain.local
// 	                    P	hc.de.vries2@domain.local
// 	                    PB  hc.de.vries-vanden.boele2@domain.local
// If also in use   	B	hc.vanden.boele3@domain.local
// 	                    BP	hc.vanden.boele-de.vries3@domain.local
// 	                    P	hc.de.vries3@domain.local
// 	                    PB  hc.de.vries-vanden.boele3@domain.local
// etc.
function generateUserPrincipalName() {
    const domain = 'domain.local';

    let initials = Person.Name.Initials;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let mailNickName = '';
    mailNickName = initials.replace(/\./g, '') + '.';

    switch (convention) {
        case "BP":
            if (typeof middleName !== 'undefined' && middleName) { mailNickName = mailNickName + middleName.replace(/ /g, '') + '.' }
            mailNickName = mailNickName + lastName;

            mailNickName = mailNickName + '-';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickName = mailNickName + ' ' + middleNamePartner.replace(/ /g, '') + '.' }
            mailNickName = mailNickName + lastNamePartner;

            break;
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickName = mailNickName + ' ' + middleNamePartner.replace(/ /g, '') + '.' }
            mailNickName = mailNickName + lastNamePartner;

            mailNickName = mailNickName + '-';
            if (typeof middleName !== 'undefined' && middleName) { mailNickName = mailNickName + middleName.replace(/ /g, '') + '.' }
            mailNickName = mailNickName + lastName;

            break;
        case "P":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickName = mailNickName + middleNamePartner.replace(/ /g, '') + '.' }
            mailNickName = mailNickName + lastNamePartner;
            break;
        case "B":
        default:
            if (typeof middleName !== 'undefined' && middleName) { mailNickName = mailNickName + middleName.replace(/ /g, '') + '.' }
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
    let iterationToUse = Iteration + 1
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    mailNickName = mailNickName + suffix;

    return mailNickName + '@' + domain;
}

generateUserPrincipalName();