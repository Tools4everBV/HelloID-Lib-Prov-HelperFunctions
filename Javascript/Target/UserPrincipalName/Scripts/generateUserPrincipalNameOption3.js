// generateUserPrincipalNameOption3.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/UserPrincipalName/README.md]
//
// Mapping logic to generate the UserPrincipalName according to the following convention.
// First choice	        B	janine.vandenboele@domain.local
// 	                    BP	janine.vandenboele@domain.local
// 	                    P	janine.devries@domain.local
// 	                    PB  janine.devries@domain.local
// If in use	        B	j.h.c.vandenboele@domain.local
// 	                    BP	j.h.c.vandenboele@domain.local
// 	                    P	j.h.c.devries@domain.local
// 	                    PB  j.h.c.devries@domain.local
// If also in use   	B	j.vandenboele@domain.local
// 	                    BP	j.vandenboele@domain.local
// 	                    P	j.devries@domain.local
// 	                    PB  j.devries@domain.local
// If also in use   	B	ja.vandenboele@domain.local
// 	                    BP	ja.vandenboele@domain.local
// 	                    P	ja.devries@domain.local
// 	                    PB  ja.devries@domain.local
function generateUserPrincipalName() {
    let initials = Person.Name.Initials;
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    const domain = 'domain.local';

    let initialsWithoutDots = '';
    let suffix = '';
    let nameFormatted = '';

    // Remove all dots and trim spaces at start and end.
    if (typeof initials !== 'undefined' && initials) {
        initialsWithoutDots = initials.trim().replace(/\./g, "");
    }

    if (Iteration === 0) {
        nameFormatted = firstName + '.';
    } else {
        // If person has no or one initial Iteration 1 needs to be skipped (values must be unique every iteration)
        if ((initialsWithoutDots.length) <= 1) {
            nameFormatted = firstName.substring(0, (Iteration)) + '.';
            if (Iteration >= (firstName.length)) {
                suffix = (Iteration - (firstName.length - 2));
            }
        } else {
            if (Iteration === 1) {
                // Add a dot to every initial
                nameFormatted = initialsWithoutDots.replace(/(.{1})/g, "$1.");
            } else {
                nameFormatted = firstName.substring(0, (Iteration - 1)) + '.';
                if (Iteration > (firstName.length)) {
                    suffix = (Iteration - (firstName.length - 1));
                }
            }
        }
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