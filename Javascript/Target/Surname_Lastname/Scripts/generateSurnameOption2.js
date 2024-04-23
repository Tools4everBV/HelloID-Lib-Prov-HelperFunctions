// generateSurnameOption2.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Surname_Lastname/README.md]
//
// Mapping logic to generate the Surname according to the following convention.
// B	Boele, van den
// BP	Boele – De Vries, van den
// P	Vries, de
// PB	Vries – van den Boele, de
function generateSurname() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let surName = '';
    switch (convention) {
        case "BP":
            surName = surName + lastName;

            surName = surName + ' - ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { surName = surName + middleNamePartner + ' ' }
            surName = surName + lastNamePartner;

            if (typeof middleName !== 'undefined' && middleName) { surName = surName + ', ' + middleName }
            break;
        case "PB":
            surName = surName + lastNamePartner;

            surName = surName + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { surName = surName + middleName + ' ' }
            surName = surName + lastName;

            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { surName = surName + ', ' + middleNamePartner }
            break;
        case "P":
            surName = surName + lastNamePartner;

            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { surName = surName + ', ' + middleNamePartner }
            break;
        case "B":
        default:
            surName = surName + lastName;

            if (typeof middleName !== 'undefined' && middleName) { surName = surName + ', ' + middleName }
            break;
    }
    // Trim spaces at start and end
    surName = surName.trim();

    // Shorten string to maxAttributeLength 
    const maxAttributeLength = 64;
    surName = surName.substring(0, maxAttributeLength);

    return surName;
}

generateSurname();