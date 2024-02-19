// generateMailOption6.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Mail/README.md]
//
// Mapping logic to generate the Mail according to the following convention.
// First choice	        B	janine.vandenboele@domain.local
// 	                    BP	janine.vandenboele@domain.local
// 	                    P	janine.vandenboele@domain.local
// 	                    PB  janine.vandenboele@domain.local
// If in use	        B	janine_vandenboele@domain.local
// 	                    BP	janine_vandenboele@domain.local
// 	                    P	janine_vandenboele@domain.local
// 	                    PB  janine_vandenboele@domain.local
// If also in use   	B	j.vandenboele@domain.local
// 	                    BP	j.vandenboele@domain.local
// 	                    P	j.vandenboele@domain.local
// 	                    PB  j.vandenboele@domain.local
// If also in use   	B	j.vandenboele1@domain.local
// 	                    BP	j.vandenboele1@domain.local
// 	                    P	j.vandenboele1@domain.local
// 	                    PB  j.vandenboele1@domain.local
function generateMail() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    const domain = 'domain.local';

    let suffix = '';
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

    let maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);

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
    let mailNickName = nameFormatted.trim();

    // Convert to lower case
    mailNickName = mailNickName.toLowerCase();

    // Remove diacritical chars
    mailNickName = deleteDiacriticalMarks(mailNickName);

    // Remove blank chars and "'"
    mailNickName = mailNickName.replace(/[^0-9a-zA-Z.-_]/g, '');

    // Shorten string to maxAttributeLength minus iteration length
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    mailNickName = mailNickName + suffix;

    return mailNickName + '@' + domain;
}

generateMail();