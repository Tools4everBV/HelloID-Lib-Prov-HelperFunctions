// generateSamAccountNameOption5.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/sAMAccountName/README.md]
//
// Mapping logic to generate the sAMAccountName according to the following convention.
// Eerste keuze	            B	jvandenboele
// 	                        BP	jvandenboele
// 	                        P	jdevries
// 	                        PB  jdevries
// Indien in gebruik	    B	javandenboele
// 	                        BP	javandenboele
// 	                        P	jadevries
// 	                        PB	jadevries
// Indien ook in gebruik	B	janvandenboele
// 	                        BP	janvandenboele
// 	                        P	jandevries
// 	                        PB	jandevries
function generateSamAccountName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let suffix = '';
    let nameFormatted = firstName.substring(0, (Iteration + 1));
    if (Iteration > (firstName.length - 1)) {
        suffix = (Iteration - (firstName.length - 1));
    }

    let maxAttributeLength = (20 - suffix.toString().length);

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
    let sAMAccountName = nameFormatted.trim();

    // Convert to lower case
    sAMAccountName = sAMAccountName.toLowerCase();

    // Remove diacritical chars
    sAMAccountName = deleteDiacriticalMarks(sAMAccountName);

    // Remove blank chars and "'"
    sAMAccountName = sAMAccountName.replace(/[^0-9a-zA-Z.-_]/g, '');

    // Shorten string to maxAttributeLength minus iteration length
    sAMAccountName = sAMAccountName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    sAMAccountName = sAMAccountName + suffix;

    return sAMAccountName;
}

generateSamAccountName();