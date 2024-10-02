// generateSamAccountNameOption3.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/sAMAccountName/Scripts/generateSamAccountNameOption3.js]
//
// Mapping logic to generate the SamAccountName according to the following convention.
// First choice	        B	janine.van.den.boele
// 	                    BP	janine.van.den.boele
// 	                    P	janine.van.den.boele
// 	                    PB  janine.van.den.boele
// If in use	        B	j.van.den.boele
// 	                    BP	j.van.den.boele
// 	                    P	j.van.den.boele
// 	                    PB  j.van.den.boele
// If also in use   	B	j.van.den.boele2
// 	                    BP	j.van.den.boele2
// 	                    P	j.van.den.boele2
// 	                    PB  j.van.den.boele2
// etc.
function generateSamAccountName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let samAccountName = '';
    if (Iteration === 0) {
        samAccountName = nickName + '.';
    } else {
        samAccountName = nickName.substring(0, 1) + '.';
    }

    switch (convention) {
        case "P":
        case "PB":
        case "B":
        case "BP":
        default:
            if (typeof middleName !== 'undefined' && middleName) {
                // Split the string into an array of words
                middleName = middleName.split(" ");
                // Join the words with dots in between
                samAccountName = samAccountName + middleName.join(".");
                samAccountName = samAccountName + '.';
            }
            samAccountName = samAccountName + lastName;
            break;
    }
    // Trim spaces at start and end
    samAccountName = samAccountName.trim();

    // Convert to lower case
    samAccountName = samAccountName.toLowerCase();

    // Remove diacritical chars
    samAccountName = deleteDiacriticalMarks(samAccountName);

    // Remove blank chars and "'"
    samAccountName = samAccountName.replace(/[^0-9a-zA-Z.\-_]/g, '');

    // Shorten string to maxAttributeLength minus iteration length
    let suffix = ''
    let iterationToUse = Iteration <= 1 ? '' : (Iteration)
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const maxAttributeLength = (20 - suffix.toString().length);
    samAccountName = samAccountName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    samAccountName = samAccountName + suffix;

    return samAccountName;
}

generateSamAccountName();
