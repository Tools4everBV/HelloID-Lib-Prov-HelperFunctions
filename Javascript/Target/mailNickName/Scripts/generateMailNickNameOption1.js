// generateMailNickNameOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/mailNickName/Scripts/generateMailNickNameOption1.js]
//
// Mapping logic to generate the MailNickName according to the following convention.
// First Choice            B   janine.vandenboele
// If in use               B   j.vandenboele
// If also in use          B   ja.vandenboele
// If also in use          B   jan.vandenboele
// If also in use          B   jani.vandenboele
// If also in use          B   janin.vandenboele
// If also in use          B   janine.vandenboele2

function generateMailNickName() {
    const maxChars = 64 // The maximum length for an Entra ID mailNickname is 64 characters

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
    const maxAttributeLength = (maxChars - suffix.toString().length);
    mailNickName = mailNickName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    if (Iteration > (nickName.length - 1)) {
        mailNickName = mailNickName + suffix;
    }

    return mailNickName;
}

generateMailNickName();
