// generateSamAccountNameOption3.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/sAMAccountName/README.md]
//
// Mapping logic to generate the sAMAccountName according to the following convention.
// First choice	        B	janine.van.den.boele
// 	                    BP	janine.van.den.boele
// 	                    P	janine.van.den.boele
// 	                    PB  janine.van.den.boele
// If in use	        B	j.van.den.boel
// 	                    BP	j.van.den.boel
// 	                    P	j.van.den.boel
// 	                    PB  j.van.den.boel
// If also in use   	B	j.van.den.boel2
// 	                    BP	j.van.den.boel2
// 	                    P	j.van.den.boel2
// 	                    PB  j.van.den.boel2
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
        nameFormatted = firstName.substring(0, 1) + '.';
    } else {
        nameFormatted = firstName.substring(0, 1) + '.';
        suffix = Iteration;
    }

    let maxAttributeLength = (20 - suffix.toString().length);

    switch (convention) {
        case "P":
        case "PB":
        case "B":
        case "BP":
        default:
            if (typeof middleName !== 'undefined' && middleName) {
                //Change whitespaces to dots
                middleName = middleName.replace(/\s+/g, '.')
                nameFormatted = nameFormatted + middleName + '.'
            }
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

    // Remove dubbel dots
    sAMAccountName = sAMAccountName.replace('..', '.')

    // Shorten string to maxAttributeLength minus iteration length
    sAMAccountName = sAMAccountName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    sAMAccountName = sAMAccountName + suffix;

    return sAMAccountName;
}

generateSamAccountName();