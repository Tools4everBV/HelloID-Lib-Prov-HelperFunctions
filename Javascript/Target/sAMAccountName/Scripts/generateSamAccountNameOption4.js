// generateSamAccountNameOption4.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/sAMAccountName/README.md]
//
// Mapping logic to generate the sAMAccountName according to the following convention.
// First choice	        B	janine.vandenboele
// 	                    BP	janine.vandenboele
// 	                    P	janine.vandenboele
// 	                    PB  janine.vandenboele
// If in use	        B	janine_vandenboele
// 	                    BP	janine_vandenboele
// 	                    P	janine_vandenboele
// 	                    PB  janine_vandenboele
// If also in use   	B	j.vandenboele
// 	                    BP	j.vandenboele
// 	                    P	j.vandenboele
// 	                    PB  j.vandenboele
// If also in use   	B	j.vandenboele1
// 	                    BP	j.vandenboele1
// 	                    P	j.vandenboele1
// 	                    PB  j.vandenboele1
function generateSamAccountName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let suffix = ''
    let nameFormatted = '';
    if (Iteration === 0) {
        nameFormatted = firstName + '.';
    } else if (Iteration === 1) {
        nameFormatted = firstName + '_';
    } else if (Iteration === 2) {
        nameFormatted = firstName.substring(0, 1) + '.';
    } else {
        nameFormatted = firstName.substring(0, 1) + '.';
        suffix = Iteration - 2;
    }

    let maxAttributeLength = (20 - suffix.toString().length);

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