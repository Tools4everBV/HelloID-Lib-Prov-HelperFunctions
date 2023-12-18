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

    let suffix = Iteration <= (firstName.length - 1) ? '' : (Iteration - (firstName.length - 2));

    //  Eerste keuze	        B	Jvandenboele
    // 	                        BP	Jvandenboele
    // 	                        P	Jdevies
    // 	                        PB  Jdevies
    //  Indien in gebruik	    B	Javandenboele
    // 	                        BP	Javandenboele
    // 	                        P	Jadevies
    // 	                        PB	Jadevies
    //  Indien ook in gebruik	B	Janvandenboele
    // 	                        BP	Janvandenboele
    // 	                        P	Jandevies
    // 	                        PB	Jandevies

    let mailNickname = '';
    if (Iteration === 0) {
        mailNickname = firstName.charAt(0);
    } else {
        mailNickname = firstName.substring(0, (Iteration + 1));
    }

    switch (convention) {
        case "B":
        case "BP":
            if (typeof middleName !== 'undefined' && middleName) { mailNickname = mailNickname + middleName }
            mailNickname = mailNickname + lastName;
            break;
        case "P":
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailNickname = mailNickname + middleNamePartner }
            mailNickname = mailNickname + lastNamePartner;
            break;
        default:
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