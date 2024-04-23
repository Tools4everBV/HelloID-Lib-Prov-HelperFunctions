// generateSamAccountNameOption4.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/sAMAccountName/Scripts/generateSamAccountNameOption4.js]
//
// Mapping logic to generate the SamAccountName according to the following convention.
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
// If also in use   	B	j.vandenboele2
// 	                    BP	j.vandenboele2
// 	                    P	j.vandenboele2
// 	                    PB  j.vandenboele2
// etc.
function generateSamAccountName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let samAccountName = '';
    if (Iteration === 0) {
        samAccountName = nickName + '.';
    } else if (Iteration === 1) {
        samAccountName = nickName + '_';
    } else {
        samAccountName = nickName.substring(0, 1) + '.';
    }

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
    let iterationToUse = Iteration - 1 <= 1 ? '' : (Iteration - 1)
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const maxAttributeLength = (20 - suffix.toString().length);
    samAccountName = samAccountName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    samAccountName = samAccountName + suffix;

    return samAccountName;
}

generateSamAccountName();