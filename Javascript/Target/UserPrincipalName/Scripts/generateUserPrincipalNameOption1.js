// generateUserPrincipalNameOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/UserPrincipalName/README.md]
//
// Mapping logic to generate the UserPrincipalName according to the following convention.
// First choice	        B	janine.vandenboele@domain.local
// 	                    BP	janine.vandenboele@domain.local
// 	                    P	janine.vandenboele@domain.local
// 	                    PB  janine.vandenboele@domain.local
// If in use          	B	j.vandenboele@domain.local
// 	                    BP	j.vandenboele@domain.local
// 	                    P	j.vandenboele@domain.local
// 	                    PB  j.vandenboele@domain.local
// If also in use   	B	janine.vandenboele2@domain.local
// 	                    BP	janine.vandenboele2@domain.local
// 	                    P	janine.vandenboele2@domain.local
// 	                    PB  janine.vandenboele2@domain.local
function generateUserPrincipalName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    const domain = 'domain.local';

    let suffix = '';
    let nameFormatted = '';
    if (Iteration === 0) {
        nameFormatted = firstName + '.';
    } else if (Iteration === 1) {
        nameFormatted = firstName.substring(0, 1) + '.';
    } else {
        nameFormatted = firstName + '.';
        suffix = Iteration;
    }

    let maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);

    switch (convention) {
        case "P":
        case "PB":
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