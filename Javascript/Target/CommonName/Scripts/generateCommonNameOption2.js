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
            commonName = commonName + lastName;

            commonName = commonName + ' - ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { commonName = commonName + middleNamePartner + ' ' }
            commonName = commonName + lastNamePartner;

            commonName = commonName + ', ';
            commonName = commonName + nickName;
            if (typeof middleName !== 'undefined' && middleName) { commonName = commonName + ' ' + middleName }
            break;
        case "PB":
            commonName = commonName + lastNamePartner;

            commonName = commonName + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { commonName = commonName + middleName + ' ' }
            commonName = commonName + lastName;

            commonName = commonName + ', ';
            commonName = commonName + nickName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { commonName = commonName + ' ' + middleNamePartner }
            break;
        case "P":
            commonName = commonName + lastNamePartner;

            commonName = commonName + ', ';
            commonName = commonName + nickName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { commonName = commonName + ' ' + middleNamePartner }
            break;
        case "B":
        default:
            commonName = commonName + lastName;

            commonName = commonName + ', ';
            commonName = commonName + nickName;
            if (typeof middleName !== 'undefined' && middleName) { commonName = commonName + ' ' + middleName }
            break;
    }
    // Trim spaces at start and end
    commonName = commonName.trim();

    // Shorten string to maxAttributeLength minus iteration length
    let suffix = ''
    let iterationToUse = Iteration + 1
    if (iterationToUse.toString().length <= 1) {
        suffix = Iteration === 0 ? '' : (' (0' + iterationToUse + ')');
    }
    else {
        suffix = Iteration === 0 ? '' : (' (' + iterationToUse + ')');
    }
    const maxAttributeLength = (64 - suffix.toString().length);
    commonName = commonName.substring(0, maxAttributeLength);

    // Use the iterator if needed
    commonName = commonName + suffix;

    return commonName;
}

generateCommonName();