// generateCommonNameOption2.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/CommonName/README.md]
//
// Mapping logic to generate the CommonName according to the following convention.
// First choice	        B	Boele, Janine van den
// 	                    BP	Boele – de Vries, Janine van den
// 	                    P	Vries, Janine de
// 	                    PB  Vries – van den Boele, Janine de
// If in use	        B	Boele, Janine van den (02)
// 	                    BP	Boele – de Vries, Janine van den (02)
// 	                    P	Vries, Janine de (02)
// 	                    PB  Vries – van den Boele, Janine de (02)
// If also in use   	B	Boele, Janine van den (03)
// 	                    BP	Boele – de Vries, Janine van den (03)
// 	                    P	Vries, Janine de (03)
// 	                    PB  Vries – van den Boele, Janine de (03)
function generateCommonName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let suffix = '';
    if (Iteration === 0) {
        suffix = '';
    } else if (Iteration < 9) {
        suffix = ' (0' + (Iteration + 1) + ')';
    } else {
        suffix = ' (' + (Iteration + 1) + ')';
    }

    let maxAttributeLength = (64 - suffix.toString().length);

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
            nameFormatted = lastNamePartner + ', ' + firstName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
            break;
        case "B":
        default:
            nameFormatted = lastName + ', ' + firstName;
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
            break;
    }
    // Trim spaces at start and end
    let commonName = nameFormatted.trim();

    // Shorten string to maxAttributeLength minus iteration length
    commonName = commonName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    commonName = commonName + suffix;

    return commonName;
}

generateCommonName();