// generateSurnameOption2.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Surname_Lastname/README.md]
//
// Mapping logic to generate the Surname according to the following convention.
// B	Boele, van den
// BP	Boele – De Vries, van den
// P	Vries, de
// PB	Vries – van den Boele, de
function generateSurname() {
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let maxAttributeLength = 64;

    let nameFormatted = '';
    switch (convention) {
        case "BP":
            nameFormatted = lastName + ' - ';;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
            nameFormatted = nameFormatted + lastNamePartner + ',';
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
            nameFormatted = nameFormatted + lastNamePartner + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
            nameFormatted = nameFormatted + lastName;
            break;
        case "P":
            nameFormatted = lastNamePartner + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
            nameFormatted = nameFormatted + lastName + ',';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            break;
        case "B":
        default:
            nameFormatted = lastName + ',';
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
    }
    // Trim spaces at start and end
    let surname = nameFormatted.trim();

    // Shorten string to maxAttributeLength minus iteration length
    surname = surname.substring(0, maxAttributeLength);

    return surname;
}

generateSurname();