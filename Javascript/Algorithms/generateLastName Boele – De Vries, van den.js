// Please enter the mapping logic to generate the lastName based on name convention.
function generateLastName() {
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;
 
    // B	Boele, van den
    // BP	Boele – De Vries, van den
    // P	Vries, de
    // PB	Vries – van den Boele, de

    switch (convention) {
        case "B":
            nameFormatted = lastName + ',';
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
        case "BP":
            nameFormatted = lastName;

            nameFormatted = nameFormatted + ' - ';

            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
            nameFormatted = nameFormatted + lastNamePartner + ',';

            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
        case "P":
            nameFormatted = lastNamePartner + ',';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            break;
        case "PB":
            nameFormatted = lastNamePartner;

            nameFormatted = nameFormatted + ' - ';

            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
            nameFormatted = nameFormatted + lastName + ',';

            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            break;
        default:
            nameFormatted = lastName + ',';
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
    }
    const lastNameFormatted = nameFormatted.trim();

    return lastNameFormatted;
}
 
generateLastName();