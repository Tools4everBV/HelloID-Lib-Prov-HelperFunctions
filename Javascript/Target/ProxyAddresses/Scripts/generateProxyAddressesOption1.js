// generateProxyAddressesOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/ProxyAddresses/Scripts/generateProxyAddressesOption1.js]
//
// Mapping logic to generate the ProxyAddresses according to the following convention.
// First Choice	            B	SMTP:janine.vandenboele@domain.local
// If in use	            B	SMTP:j.vandenboele@domain.local
// If also in use	        B	SMTP:ja.vandenboele@domain.local
// If also in use       	B	SMTP:jan.vandenboele@domain.local
// If also in use       	B	SMTP:jani.vandenboele@domain.local
// If also in use       	B	SMTP:janin.vandenboele@domain.local
// If also in use       	B	SMTP:janine.vandenboele2@domain.local

function generateProxyAddresses() {
    const maxChars = 254 // The maximum length for an Entra ID mail is 254 characters (While the attribute length is 256 characters, a valid SMTP email address within this field can be up to 254 characters to account for the < and > characters)
    const domain = 'schoutenenzn.nl';

    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;

    let mailNickName = '';

    if (Iteration === 0) {
        mailNickName = nickName + '.';
    } else if (Iteration === 1) {
        mailNickName = nickName.substring(0, 1) + '.';
    } else if (Iteration < (nickName.length)) {
        mailNickName = nickName.substring(0, (Iteration)) + '.';
    } else {
        mailNickName = nickName + '.';
    }

    if (typeof middleName !== 'undefined' && middleName) { mailNickName = mailNickName + middleName.replace(/ /g, '') }
    mailNickName = mailNickName + lastName;

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
    const maxAttributeLength = (maxChars - suffix.toString().length - domain.toString().length);
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