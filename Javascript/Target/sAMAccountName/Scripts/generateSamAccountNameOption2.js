// generateSamAccountNameOption2.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/sAMAccountName/Scripts/generateSamAccountNameOption2.js]
//
// Mapping logic to generate the SamAccountName according to the following convention.
// First choice	        B	janine.van.den.boele
// 	                    BP	janine.van.den.boele
// 	                    P	janine.van.den.boele
// 	                    PB  janine.van.den.boele
// If in use	        B	janine.van.den.boel2 (20 char long)
// 	                    BP	janine.van.den.boel2
// 	                    P	janine.van.den.boel2
// 	                    PB  janine.van.den.boel2
// If also in use   	B	janine.van.den.boel3
// 	                    BP	janine.van.den.boel3
// 	                    P	janine.van.den.boel3
// 	                    PB  janine.van.den.boel3
// etc.
function generateSamAccountName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let samAccountName = nickName + '.';

    switch (convention) {
        case "P":
        case "PB":
        case "B":
        case "BP":
        default:
            if (typeof middleName !== 'undefined' && middleName) { samAccountName = samAccountName + middleName.replace(/ /g, '') }
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
    let iterationToUse = Iteration + 1 <= 1 ? '' : (Iteration + 1)
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const maxAttributeLength = (20 - suffix.toString().length);
    samAccountName = samAccountName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    samAccountName = samAccountName + suffix;

    return samAccountName;
}

generateSamAccountName();