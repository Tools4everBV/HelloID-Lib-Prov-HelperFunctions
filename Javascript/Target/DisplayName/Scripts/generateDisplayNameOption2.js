// generateDisplayNameOption2.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/DisplayName/README.md]
//
// Mapping logic to generate the DisplayName according to the following convention.
// B    Boele, Janine van den
// BP	Boele – de Vries, Janine van den
// P	Vries, Janine de
// PB	Vries – van den Boele, Janine de
function generateDisplayName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let maxAttributeLength = 256;

    let nameFormatted = '';
    switch (convention) {
        case "BP":
            nameFormatted = lastName + ' - ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
            nameFormatted = nameFormatted + lastNamePartner + ', ' + firstName;
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
        case "PB":
            nameFormatted = lastNamePartner + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
            nameFormatted = nameFormatted + lastName + ', ' + firstName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            break;
        case "P":
            nameFormatted = nameFormatted + lastNamePartner + ', ' + firstName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            break;
        case "B":
        default:
            nameFormatted = nameFormatted + lastName + ', ' + firstName;
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
    }
    // Trim spaces at start and end
    let displayName = nameFormatted.trim();

    // Shorten string to maxAttributeLength minus iteration length
    displayName = displayName.substring(0, maxAttributeLength);

    return displayName;
}

generateDisplayName();