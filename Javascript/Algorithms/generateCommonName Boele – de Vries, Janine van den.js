// Please enter the mapping logic to generate the sAMAccountName.
function generatecommonName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    const suffix = Iteration === 0 ? '' : ' (0' + (Iteration + 1) + ')';

    // B	    Boele, Janine van den
    // BP	    Boele – de Vries, Janine van den
    // P	    Vries, Janine de
    // PB	    Vries – van den Boele, Janine de

    switch (convention) {
        case "B":
            nameFormatted = lastName + ',';
            nameFormatted = nameFormatted + ' ' + firstName;
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
        case "BP":
            nameFormatted = lastName;

            nameFormatted = nameFormatted + ' - ';

            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
            nameFormatted = nameFormatted + lastNamePartner + ',';

            nameFormatted = nameFormatted + ' ' + firstName;
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
        case "P":
            nameFormatted = lastNamePartner + ',';
            nameFormatted = nameFormatted + ' ' + firstName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            break;
        case "PB":
            nameFormatted = lastNamePartner;

            nameFormatted = nameFormatted + ' - ';

            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
            nameFormatted = nameFormatted + lastName + ',';

            nameFormatted = nameFormatted + ' ' + firstName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            break;
        default:
            nameFormatted = lastName + ',';
            nameFormatted = nameFormatted + ' ' + firstName;
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
    }
    const commonName = nameFormatted.trim();

    commonName = commonName + suffix;

    return commonName;
}

generatecommonName();