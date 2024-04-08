// generateUserPrincipalNameOption2.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/UserPrincipalName/README.md]
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
function generateUserPrincipalName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    const domain = 'domain.local';

    let suffix = '';
    let nameFormatted = '';
    if (Iteration === 0) {
        nameFormatted = firstName.substring(0, 1) + '.';
    } else if (Iteration === 1) {
        nameFormatted = firstName.substring(0, 2) + '.';
    } else if (Iteration === 2) {
        nameFormatted = firstName + '.';
    } else {
        nameFormatted = firstName + '.';
        suffix = Iteration - 1;
    }

    let maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);

    switch (convention) {

        case "P":
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner }
            nameFormatted = nameFormatted + lastNamePartner;
            break;
        case "B":
        case "BP":
        default:
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName }
            nameFormatted = nameFormatted + lastName;
            break;
    }
    // Trim spaces at start and end
    let userPrincipalName = nameFormatted.trim();

    // Convert to lower case
    userPrincipalName = userPrincipalName.toLowerCase();

    // Remove diacritical chars
    userPrincipalName = deleteDiacriticalMarks(userPrincipalName);

    // Remove blank chars and "'"
    userPrincipalName = userPrincipalName.replace(/[^0-9a-zA-Z.-_]/g, '');

    // Shorten string to maxAttributeLength minus iteration length
    userPrincipalName = userPrincipalName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    userPrincipalName = userPrincipalName + suffix;

    return userPrincipalName + '@' + domain;
}

generateUserPrincipalName();