// generateSamAccountNameOption7.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/sAMAccountName/Scripts/generateSamAccountNameOption7.js]
//
// Mapping logic to generate the SamAccountName according to the following convention.
// Eerste keuze	            B	j.vandenboele
// 	                        BP	j.vandenboele
// 	                        P	j.vandenboele
// 	                        PB  j.vandenboele
// Indien in gebruik	    B	janine.vandenboele
// 	                        BP	janine.vandenboele
// 	                        P	janine.vandenboele
// 	                        PB	janine.vandenboele
// Indien ook in gebruik	B	ja.vandenboele
// 	                        BP	ja.vandenboele
// 	                        P	ja.vandenboele
// 	                        PB	ja.vandenboele
// etc.
function generateSamAccountName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let samAccountName = '';

    if (Iteration === 0) {
        samAccountName = nickName.substring(0, 1) + '.';
    } else if (Iteration === 1) {
        samAccountName = nickName + '.';
    } else if (Iteration < (nickName.length)) {
        samAccountName = nickName.substring(0, (Iteration)) + '.';
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
    let iterationToUse = Iteration - (nickName.length - 2) <= 1 ? '' : (Iteration - (nickName.length - 2))
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const maxAttributeLength = (20 - suffix.toString().length);
    samAccountName = samAccountName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    samAccountName = samAccountName + suffix;

    return samAccountName;
}

generateSamAccountName();
