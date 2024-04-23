// generateCommonNameOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/CommonName/Scripts/generateCommonNameOption1.js]
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
// etc.
function generateCommonName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let commonName = '';
    switch (convention) {
        case "BP":
            commonName = commonName + nickName + ' ';
            if (typeof middleName !== 'undefined' && middleName) { commonName = commonName + middleName + ' ' }
            commonName = commonName + lastName;

            commonName = commonName + ' - ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { commonName = commonName + middleNamePartner + ' ' }
            commonName = commonName + lastNamePartner;
            break;
        case "PB":
            commonName = commonName + nickName + ' ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { commonName = commonName + middleNamePartner + ' ' }
            commonName = commonName + lastNamePartner;

            commonName = commonName + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { commonName = commonName + middleName + ' ' }
            commonName = commonName + lastName;
            break;
        case "P":
            commonName = commonName + nickName + ' ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { commonName = commonName + middleNamePartner + ' ' }
            commonName = commonName + lastNamePartner;
            break;
        case "B":
        default:
            commonName = commonName + nickName + ' ';
            if (typeof middleName !== 'undefined' && middleName) { commonName = commonName + middleName + ' ' }
            commonName = commonName + lastName;
            break;
    }
    // Trim spaces at start and end
    commonName = commonName.trim();

    // Shorten string to maxAttributeLength minus iteration length
    let suffix = ''
    let iterationToUse = Iteration + 1
    if (iterationToUse.toString().length <= 1) {
        suffix = Iteration === 0 ? '' : (' 0' + iterationToUse);
    }
    else {
        suffix = Iteration === 0 ? '' : (' ' + iterationToUse);
    }
    const maxAttributeLength = (64 - suffix.toString().length);
    commonName = commonName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    commonName = commonName + suffix;

    return commonName;
}

generateCommonName();