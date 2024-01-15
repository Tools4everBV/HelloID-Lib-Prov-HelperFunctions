// Please enter the mapping logic to generate the sAMAccountName.
function generateSamAccountName() {
    let givenName = Person.Name.GivenName;
    let firstName = givenName.split(" ")[0]
    let secondName = givenName.split(" ")[1]
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    let maxAttributeLength = 20;

    //  Eerste keuze	        B	boja
    // 	                        BP	boja
    // 	                        P	boja
    // 	                        PB  boja
    //  Indien in gebruik	    B	bojc
    // 	                        BP	bojc
    // 	                        P	bojc
    // 	                        PB	bojc
    //  Indien ook in gebruik	B	bojz
    // 	                        BP	bojz
    // 	                        P	bojz
    // 	                        PB	bojz

    let samAccountName = lastName.substring(0, 2);
    if (Iteration === 0) {
        samAccountName = samAccountName + firstName.substring(0, 2);
    } else if (Iteration === 1) {
        samAccountName = samAccountName + firstName.substring(0, 1) + secondName.substring(0, 1);
    } else {
        samAccountName = samAccountName + firstName.substring(0, 1) + alphabet.charAt(26 - (Iteration - 1));
    }

    //Convert to lower case
    samAccountName = samAccountName.toLowerCase();

    //Remove diacritical chars
    samAccountName = deleteDiacriticalMarks(samAccountName);

    //Remove blank chars and "'"
    samAccountName = samAccountName.replace(/[^0-9a-zA-Z.-]/g, '');

    //Shorten string to maxAttributeLength minus iteration length
    samAccountName = samAccountName.trim().substring(0, maxAttributeLength)

    if (Iteration === 28) {
        throw '28 iterations reached, we ran out of letters of the alphabet'
    }

    return samAccountName;
}

function getValue() {
    let samAccountName = generateSamAccountName();
    return samAccountName;
}

getValue();