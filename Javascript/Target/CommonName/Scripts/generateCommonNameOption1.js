// generateCommonNameOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/CommonName/README.md]
//
// Mapping logic to generate the CommonName according to the following convention.
// First choice	        B	Janine van den Boele
// 	                    BP	Janine van den Boele – de Vries
// 	                    P	Janine de Vries
// 	                    PB  Janine de Vries – van den Boele
// If in use	        B	Janine van den Boele 02
// 	                    BP	Janine van den Boele – de Vries 02
// 	                    P	Janine de Vries 02 
// 	                    PB  Janine de Vries – van den Boele 02
// If also in use   	B	Janine van den Boele 03
// 	                    BP	Janine van den Boele – de Vries 03
// 	                    P	Janine de Vries 03
// 	                    PB  Janine de Vries – van den Boele 03
function generateCommonName() {
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let suffix = '';
    let nameFormatted = '';

    if (Iteration === 0) {
        suffix = '';
    } else if (Iteration < 9) {
        suffix = ' 0' + (Iteration + 1);
    } else {
        suffix = ' ' + (Iteration + 1);
    }

    let maxAttributeLength = (64 - suffix.toString().length);

    nameFormatted = nameFormatted + firstName + ' ';
    switch (convention) {
        case "BP":
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
            nameFormatted = nameFormatted + lastName;
            nameFormatted = nameFormatted + ' - ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
            nameFormatted = nameFormatted + lastNamePartner;
            break;
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
            nameFormatted = nameFormatted + lastNamePartner;
            nameFormatted = nameFormatted + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
            nameFormatted = nameFormatted + lastName;
            break;
        case "P":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
            nameFormatted = nameFormatted + lastNamePartner;
            break;
        case "B":
        default:
            if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
            nameFormatted = nameFormatted + lastName;
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