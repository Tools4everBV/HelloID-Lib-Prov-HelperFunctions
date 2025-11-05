// generateProxyAddressesOption7.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/ProxyAddresses/Scripts/generateProxyAddressesOption7.js]
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
// If also in use   	B	j.vandenboele@domain.local
// 	                    BP	j.vandenboele@domain.local
// 	                    P	j.vandenboele@domain.local
// 	                    PB  j.vandenboele@domain.local
// If also in use   	B	j.vandenboele2@domain.local
// 	                    BP	j.vandenboele2@domain.local
// 	                    P	j.vandenboele2@domain.local
// 	                    PB  j.vandenboele2@domain.local
// etc.
function generateProxyAddresses() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let mailNickName = '';
    if (Iteration === 0) {
        mailNickName = nickName + '.';
    } else if (Iteration === 1) {
        mailNickName = nickName + '_';
    } else if (Iteration === 2) {
        mailNickName = nickName.substring(0, 1) + '.';
    } else {
        mailNickName = nickName.substring(0, 1) + '.';
    }

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
    let iterationToUse = Iteration - 1
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const domain = 'domain.local';
    const maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    mailNickName = mailNickName + suffix;

    return [
        'SMTP:' + mailNickName + '@' + domain
    ];
}

generateProxyAddresses();