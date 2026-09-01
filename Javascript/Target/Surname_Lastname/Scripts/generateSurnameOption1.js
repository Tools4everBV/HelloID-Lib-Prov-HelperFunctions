// generateSurnameOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/Surname_Lastname/Scripts/generateSurnameOption1.js]
//
// Mapping logic to generate the Surname according to the following convention.
// B	van den Boele
// BP	van den Boele – de Vries
// P	de Vries
// PB   de Vries – van den Boele
function generateSurname() {
    let nickName = (Person.Name.NickName || '').trim();
    let middleName = (Person.Name.FamilyNamePrefix || '').trim();
    let lastName = (Person.Name.FamilyName || '').trim();
    let middleNamePartner = (Person.Name.FamilyNamePartnerPrefix || '').trim();
    let lastNamePartner = (Person.Name.FamilyNamePartner || '').trim();
    let convention = (Person.Name.Convention || '').trim();

    let surName = '';
    switch (convention) {
        case "BP":
            if (typeof middleName !== 'undefined' && middleName) { surName = surName + middleName + ' ' }
            surName = surName + lastName;

            surName = surName + ' - ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { surName = surName + middleNamePartner + ' ' }
            surName = surName + lastNamePartner;
            break;
        case "PB":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { surName = surName + middleNamePartner + ' ' }
            surName = surName + lastNamePartner;

            surName = surName + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { surName = surName + middleName + ' ' }
            surName = surName + lastName;
            break;
        case "P":
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { surName = surName + middleNamePartner + ' ' }
            surName = surName + lastNamePartner;
            break;
        case "B":
        default:
            if (typeof middleName !== 'undefined' && middleName) { surName = surName + middleName + ' ' }
            surName = surName + lastName;
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