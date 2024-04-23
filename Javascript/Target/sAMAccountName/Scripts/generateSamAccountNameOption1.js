// generateSamAccountNameOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/sAMAccountName/Scripts/generateSamAccountNameOption1.js]
//
// Mapping logic to generate the SamAccountName according to the following convention.
// First choice	            B	jvandenboele
// 	                        BP	jvandenboele
// 	                        P	jvandenboele
// 	                        PB  jvandenboele
// If in use	            B	javandenboele
// 	                        BP	javandenboele
// 	                        P	javandenboele
// 	                        PB	javandenboele
// If also in use	        B	janvandenboele
// 	                        BP	janvandenboele
// 	                        P	janvandenboele
// 	                        PB	janvandenboele
// etc.
// If full name used, use iterator  	B	janine.vandenboele2
// 	                                    BP	janine.vandenboele2
// 	                                    P	janine.vandenboele2
// 	                                    PB  janine.vandenboele2
// etc.
function generateSamAccountName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let samAccountName = nickName.substring(0, (Iteration + 1)) + '.';

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
    let iterationToUse = Iteration - (nickName.length - 2) <= 1 ? '' : (Iteration - (nickName.length - 2))
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const maxAttributeLength = (20 - suffix.toString().length);
    samAccountName = samAccountName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    samAccountName = samAccountName + suffix;

    return samAccountName;
}

generateSamAccountName();