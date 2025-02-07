// generateSamAccountNameOption8.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/sAMAccountName/Scripts/generateSamAccountNameOption8.js]
//
// Mapping logic to generate the SamAccountName according to the following convention.
// First choice	        B	hboel
// 	                    BP	hboel
// 	                    P	hboel
// 	                    PB  hboel
// If in use	        B	hboel2
// 	                    BP	hboel2
// 	                    P	hboel2
// 	                    PB  hboel2
// If also in use   	B	hboel3
// 	                    BP	hboel3
// 	                    P	hboel3
// 	                    PB  hboel3
// etc.
function generateSamAccountName() {
    let initials = Person.Name.Initials;
    let lastName = Person.Name.FamilyName.padEnd(4, '0');

    let samAccountName = initials.substring(0, 1);

    let iterationToUse = Iteration + 1

    if (Iteration === 0) {
        samAccountName = samAccountName + lastName.substring(0, 4);
    } else {
        samAccountName = samAccountName + lastName.substring(0, (4 - iterationToUse.toString().length));
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
    let suffix = Iteration === 0 ? '' : (iterationToUse);
    const maxAttributeLength = (20 - suffix.toString().length);
    samAccountName = samAccountName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    samAccountName = samAccountName + suffix;

    return samAccountName;
}

generateSamAccountName();