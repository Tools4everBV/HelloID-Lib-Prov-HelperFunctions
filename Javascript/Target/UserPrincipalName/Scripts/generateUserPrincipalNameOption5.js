// generateUserPrincipalNameOption5.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/UserPrincipalName/README.md]
//
// Mapping logic to generate the UserPrincipalName according to the following convention.
// Eerste keuze	            B	jvandenboele@domain.local
// 	                        BP	jvandenboele@domain.local
// 	                        P	jdevries@domain.local
// 	                        PB  jdevries@domain.local
// Indien in gebruik	    B	javandenboele@domain.local
// 	                        BP	javandenboele@domain.local
// 	                        P	jadevries@domain.local
// 	                        PB	jadevries@domain.local
// Indien ook in gebruik	B	janvandenboele@domain.local
// 	                        BP	janvandenboele@domain.local
// 	                        P	jandevries@domain.local
// 	                        PB	jandevries@domain.local
function generateUserPrincipalName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    const domain = 'domain.local';

    let suffix = '';
    let nameFormatted = firstName.substring(0, (Iteration + 1));
    if (Iteration > (firstName.length - 1)) {
        suffix = (Iteration - (firstName.length - 2));
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