// Please enter the mapping logic to generate the mailNickname.
// This must result in a unique alias to be used for email addresses for this user.
// This will most likely be equal to the part before the '@' sign of the UserPrincipleName.
// Please make sure that the result is not formatted like an email address.
function generateMailNickname() {
    let initials = Person.Name.Initials;
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    const suffix = Iteration <= (firstName.length - 1) ? '' : (Iteration - (firstName.length - 2));

    //  Eerste keuze	        B	Janine.vandenboele
    // 	                        BP	Janine.vandenboele
    // 	                        P	Janine.devries
    // 	                        PB  Janine.devries
    //  Indien in gebruik	    B	J.h.c.vandenboele
    // 	                        BP	J.h.c.vandenboele
    // 	                        P	J.h.c.devries
    // 	                        PB	J.h.c.devries
    //  Indien ook in gebruik	B	J.vandenboele
    // 	                        BP	J.vandenboele
    // 	                        P	J.devries
    // 	                        PB	J.devries
    //  Indien ook in gebruik	B	Ja.vandenboele
    // 	                        BP	Ja.vandenboele
    // 	                        P	Ja.devries
    // 	                        PB	Ja.devries

    let mailNickname = '';
    if (Iteration === 0) {
        mailNickname = firstName + '.';
    }else if(Iteration === 1) {
        mailNickname = initials.replace(/(.{1})/g,"$1.");
    } else if(Iteration === 2) {
        mailNickname = firstName.charAt(0)+ '.';
    } else {
        mailNickname = firstName.substring(0, (Iteration-1)) + '.';
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
	const nickName = generateMailNickname();
	const domain = 'domein.nl';
	return nickName + '@' + domain;
}

getValue();