// Please enter the mapping logic to generate the sAMAccountName.
function generateSamAccountName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let suffix = Iteration <= (firstName.length - 1) ? '' : (Iteration - (firstName.length - 2));
    let maxAttributeLength = (20 - suffix.toString().length);

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

    let samAccountName = '';
    if (Iteration === 0) {
        samAccountName = firstName.charAt(0);
    } else {
        samAccountName = firstName.substring(0, (Iteration + 1));
    }

    switch (convention) {
        case "B":
        case "BP":
            if (typeof middleName !== 'undefined' && middleName) { samAccountName = samAccountName + middleName }
            samAccountName = samAccountName + lastName;
            break;
        case "P":
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { samAccountName = samAccountName + middleNamePartner }
            samAccountName = samAccountName + lastNamePartner;
            break;
        default:
            if (typeof middleName !== 'undefined' && middleName) { samAccountName = samAccountName + middleName }
            samAccountName = samAccountName + lastName;
            break;
    }

    //Convert to lower case
    samAccountName = samAccountName.toLowerCase();

    //Remove diacritical chars
    samAccountName = deleteDiacriticalMarks(samAccountName);

    //Remove blank chars and "'"
    samAccountName = samAccountName.replace(/[^0-9a-zA-Z.-]/g, '');

    //Shorten string to maxAttributeLength minus iteration length
    samAccountName = samAccountName.trim().substring(0, maxAttributeLength)

    // use the iterator if needed
    samAccountName = samAccountName + suffix;

    return samAccountName;
}

function getValue() {
    let samAccountName = generateSamAccountName();
    return samAccountName;
}

getValue();