// Please enter the mapping logic to generate the commonName based on name convention.
function generatecommonName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    const suffix = Iteration === 0 ? '' : ' 0' + (Iteration);

    // B	    Janine van den Boele
    // BP	    Janine van den Boele - de Vries
    // P	    Janine de Vries
    // PB	    Janine de Vries - van den Boele

    switch (convention) {
        case "B":
            nameFormatted = firstName;
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            nameFormatted = nameFormatted + ' ' + lastName;
            break;
        case "BP":
            nameFormatted = firstName;
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            nameFormatted = nameFormatted + ' ' + lastName;

            nameFormatted = nameFormatted + ' - ';

            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
            nameFormatted = nameFormatted + lastNamePartner;
            break;
        case "P":
            nameFormatted = firstName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            nameFormatted = nameFormatted + ' ' + lastNamePartner;
            break;
        case "PB":
            nameFormatted = firstName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            nameFormatted = nameFormatted + ' ' + lastNamePartner;

            nameFormatted = nameFormatted + ' - ';

            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
            nameFormatted = nameFormatted + lastName;
            break;
        default:
            nameFormatted = firstName;
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            nameFormatted = nameFormatted + ' ' + lastName;
            break;
    }
    const commonName = nameFormatted.trim();

    commonName = commonName + suffix;

    return commonName;
}

generatecommonName();