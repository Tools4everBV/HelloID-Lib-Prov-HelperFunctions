// generateMailOption7.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Mail/Scripts/generateMailOption7.js]
//
// Mapping logic to generate the Mail according to the following convention.
// First choice	        B	janine.van.denboele@domain.local
// 	                    BP	janine.van.denboele@domain.local
// 	                    P	janine.van.denboele@domain.local
// 	                    PB  janine.van.denboele@domain.local
// If in use	        B	janine.van.denboele02@domain.local
// 	                    BP	janine.van.denboele02@domain.local
// 	                    P	janine.van.denboele02@domain.local
// 	                    PB  janine.van.denboele02@domain.local
// If also in use   	B	janine.van.denboele03@domain.local
// 	                    BP	janine.van.denboele03@domain.local
// 	                    P	janine.van.denboele03@domain.local
// 	                    PB  janine.van.denboele03@domain.local
// etc.
function generateMail() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let mailNickName = nickName + '.';

    switch (convention) {
        case "P":
        case "PB":
        case "B":
        case "BP":
        default:
            if (typeof middleName !== 'undefined' && middleName) { mailNickName = mailNickName + middleName.replace(/ /g, '.') + '.' }
            mailNickName = mailNickName + lastName;
            break;
    }
    // Trim spaces at start and end
    mailNickName = mailNickName.trim();

    // Convert to lower case
    mailNickName = mailNickName.toLowerCase();

    // Remove diacritical chars
    mailNickName = deleteDiacriticalMarks(mailNickName);

    // Remove blank chars and "'"
    mailNickName = mailNickName.replace(/[^0-9a-zA-Z.\-_]/g, '');

    // Shorten string to maxAttributeLength minus iteration length
    let suffix = ''
    let iterationToUse = Iteration + 1
    if (iterationToUse.toString().length <= 1) {
        suffix = Iteration === 0 ? '' : ('0' + iterationToUse);
    }
    else {
        suffix = Iteration === 0 ? '' : ('' + iterationToUse);
    }
    const domain = 'domain.local';
    const maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    mailNickName = mailNickName + suffix;

    return mailNickName + '@' + domain;
}

generateMail();