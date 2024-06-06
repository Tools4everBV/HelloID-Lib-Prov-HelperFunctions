// generateSamAccountNameOption6.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Mail/Scripts/generateSamAccountNameOption6.js]
//
// Mapping logic to generate the Mail according to the following convention.
// First choice	        B	jvandenboele
// 	                    BP	jvandenboele
// 	                    P	jvandenboele
// 	                    PB  jvandenboele
// If in use	        B	jvandenboele1
// 	                    BP	jvandenboele1
// 	                    P	jvandenboele1
// 	                    PB  jvandenboele1
// If also in use   	B	jvandenboele2
// 	                    BP	jvandenboele2
// 	                    P	jvandenboele2
// 	                    PB  jvandenboele2
// etc.
function generateSamAccountName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let samAccountName = nickName.substring(0, 1);

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
    let suffix = Iteration === 0 ? '' : Iteration;
    const maxAttributeLength = (20 - suffix.toString().length);
    samAccountName = samAccountName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    samAccountName = samAccountName + suffix;

    return samAccountName;
}

generateSamAccountName();