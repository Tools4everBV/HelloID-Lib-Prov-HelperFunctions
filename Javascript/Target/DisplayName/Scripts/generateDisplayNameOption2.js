// generateDisplayNameOption2.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/DisplayName/Scripts/generateDisplayNameOption2.js]
//
// Mapping logic to generate the DisplayName according to the following convention.
// B    Boele, Janine van den
// BP	Boele – de Vries, Janine van den
// P	Vries, Janine de
// PB	Vries – van den Boele, Janine de
function generateDisplayName() {
    let nickName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    let convention = Person.Name.Convention;

    let displayName = '';
    switch (convention) {
        case "BP":
            displayName = displayName + lastName;

            displayName = displayName + ' - ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { displayName = displayName + middleNamePartner + ' ' }
            displayName = displayName + lastNamePartner;

            displayName = displayName + ', ';
            displayName = displayName + nickName;
            if (typeof middleName !== 'undefined' && middleName) { displayName = displayName + ' ' + middleName }
            break;
        case "PB":
            displayName = displayName + lastNamePartner;

            displayName = displayName + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { displayName = displayName + middleName + ' ' }
            displayName = displayName + lastName;

            displayName = displayName + ', ';
            displayName = displayName + nickName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { displayName = displayName + ' ' + middleNamePartner }
            break;
        case "P":
            displayName = displayName + lastNamePartner;

            displayName = displayName + ', ';
            displayName = displayName + nickName;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { displayName = displayName + ' ' + middleNamePartner }
            break;
        case "B":
        default:
            displayName = displayName + lastName;

            displayName = displayName + ', ';
            displayName = displayName + nickName;
            if (typeof middleName !== 'undefined' && middleName) { displayName = displayName + ' ' + middleName }
            break;
    }
    // Trim spaces at start and end
    displayName = displayName.trim();

    // Shorten string to maxAttributeLength 
    const maxAttributeLength = 256;
    displayName = displayName.substring(0, maxAttributeLength);

    return displayName;
}

generateDisplayName();
