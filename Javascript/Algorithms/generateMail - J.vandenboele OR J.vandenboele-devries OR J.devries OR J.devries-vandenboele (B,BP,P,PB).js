// Please enter the mapping logic to generate the mailNickname.
// This must result in a unique alias to be used for email addresses for this user.
// This will most likely be equal to the part before the '@' sign of the UserPrincipleName.
// Please make sure that the result is not formatted like an email address.
function generateMailNickname() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let suffix = Iteration <= (2) ? '' : (Iteration - 1);

    //  Eerste keuze	        B	J.vandenboele
    // 	                        BP	J.vandenboele-devries
    // 	                        P	J.devries
    // 	                        PB  J.devries-vandenboele
    //  Indien in gebruik	    B	Ja.vandenboele
    // 	                        BP	Ja.vandenboele-devries
    // 	                        P	Ja.devries
    // 	                        PB  Ja.devries-vandenboele
    //  Indien ook in gebruik	B	Janine.vandenboele
    // 	                        BP	Janine.vandenboele-devries
    // 	                        P	Janine.devries
    // 	                        PB  Janine.devries-vandenboele

    let mailNickname = '';
    if (Iteration === 0) {
        mailNickname = firstName.charAt(0);
    } else if (Iteration === 1) {
        mailNickname = firstName.substring(0, 2);
    } else {
        mailNickname = firstName;
    }

    switch (convention) {
        case "B":
            mailNickname = mailNickname + '.';
            if (typeof middleName !== 'undefined' && middleName) { mailNickname = mailNickname + middleName }
            mailNickname = mailNickname + lastName;
            break;
        case "BP":
            mailNickname = mailNickname + '.';
            if (typeof middleName !== 'undefined' && middleName) { mailNickname = mailNickname + ' ' + middleName }
            mailNickname = mailNickname + ' ' + lastName;

            mailNickname = mailNickname + '-';

            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickname = mailNickname + middleNamePartner + ' ' }
            mailNickname = mailNickname + lastNamePartner;
            break;
        case "P":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickname = mailNickname + middleNamePartner }
            mailNickname = mailNickname + lastNamePartner;
            break;
        case "PB":
            mailNickname = mailNickname + '.';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickname = mailNickname + ' ' + middleNamePartner }
            mailNickname = mailNickname + ' ' + lastNamePartner;

            mailNickname = mailNickname + '-';

            if (typeof middleName !== 'undefined' && middleName) { mailNickname = mailNickname + middleName + ' ' }
            mailNickname = mailNickname + lastName;
            break;
        default:
            mailNickname = mailNickname + '.';
            if (typeof middleName !== 'undefined' && middleName) { mailNickname = mailNickname + middleName }
            mailNickname = mailNickname + lastName;
            break;
    }

    //Convert to lower case
    mailNickname = mailNickname.toLowerCase();

    //Remove diacritical chars
    mailNickname = deleteDiacriticalMarks(mailNickname);

    //Remove blank chars and "'"
    mailNickname = mailNickname.replace(/[^0-9a-zA-Z.-]/g, '');

    // use the iterator if needed
    mailNickname = mailNickname + suffix;   

    return mailNickname;
}

function getValue() {
    let nickName = generateMailNickname();

    let domain = 'enyoi.org';
    return nickName + '@' + domain;
}

getValue();