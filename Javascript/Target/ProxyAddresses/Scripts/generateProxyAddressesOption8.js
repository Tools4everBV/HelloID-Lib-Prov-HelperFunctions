// generateProxyAddressesOption8.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/ProxyAddresses/Scripts/generateProxyAddressesOption8.js]
//
// Mapping logic to generate the ProxyAddresses according to the following convention.
// First choice	        B	janine.vandenboele@domain.local
// 	                    BP	janine.vandenboele@domain.local
// 	                    P	janine.vandenboele@domain.local
// 	                    PB  janine.vandenboele@domain.local
// If in use	        B	janine_vandenboele@domain.local
// 	                    BP	janine_vandenboele@domain.local
// 	                    P	janine_vandenboele@domain.local
// 	                    PB  janine_vandenboele@domain.local
// If also in use   	B	janine.vandenboele02@domain.local
// 	                    BP	janine.vandenboele02@domain.local
// 	                    P	janine.vandenboele02@domain.local
// 	                    PB  janine.vandenboele02@domain.local
// If also in use   	B	janine.vandenboele03@domain.local
// 	                    BP	janine.vandenboele03@domain.local
// 	                    P	janine.vandenboele03@domain.local
// 	                    PB  janine.vandenboele03@domain.local
// etc.
function generateProxyAddresses() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let mailNickName = nickName + (Iteration === 1 ? '_' : '.');

    switch (convention) {
        case "P":
        case "PB":
        case "B":
        case "BP":
        default:
            if (typeof middleName !== 'undefined' && middleName) { mailNickName = mailNickName + middleName.replace(/ /g, '') }
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
    let iterationToUse = Iteration
    if (iterationToUse.toString().length <= 1) {
        suffix = Iteration < 2 ? '' : ('0' + iterationToUse);
    }
    else {
        suffix = Iteration < 2 ? '' : ('' + iterationToUse);
    }
    const domain = 'domain.local';
    const maxAttributeLength = (256 - suffix.toString().length - domain.toString().length - 1);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    mailNickName = mailNickName + suffix;

    return [
        'SMTP:' + mailNickName + '@' + domain
    ];
}

generateProxyAddresses();