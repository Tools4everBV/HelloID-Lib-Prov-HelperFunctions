// generateProxyAddressesOption4.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/ProxyAddresses/Scripts/generateProxyAddressesOption4.js]
//
// Mapping logic to generate the ProxyAddresses according to the following convention.
// Eerste keuze	            B	jvandenboele@domain.local
// 	                        BP	jvandenboele@domain.local
// 	                        P	jvandenboele@domain.local
// 	                        PB  jvandenboele@domain.local
// Indien in gebruik	    B	javandenboele@domain.local
// 	                        BP	javandenboele@domain.local
// 	                        P	javandenboele@domain.local
// 	                        PB	javandenboele@domain.local
// Indien ook in gebruik	B	janvandenboele@domain.local
// 	                        BP	janvandenboele@domain.local
// 	                        P	janvandenboele@domain.local
// 	                        PB	janvandenboele@domain.local
// etc.
function generateProxyAddresses() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let convention = Person.Name.Convention;

    let mailNickName = nickName.substring(0, (Iteration + 1));

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
    let iterationToUse = Iteration - (nickName.length - 2)
    suffix = Iteration === 0 ? '' : (iterationToUse);
    const domain = 'domain.local';
    const maxAttributeLength = (256 - suffix.toString().length - domain.toString().length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    if (Iteration > (nickName.length - 1)) {
        mailNickName = mailNickName + suffix;
    }

    return [
        'SMTP:' + mailNickName + '@' + domain
    ];
}

generateProxyAddresses();