// generateDisplayNameOption1.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/DisplayName/Scripts/generateDisplayNameOption1.js]
//
// Mapping logic to generate the DisplayName according to the following convention.
// B	Janine van den Boele
// BP	Janine van den Boele – de Vries
// P	Janine de Vries
// PB   Janine de Vries – van den Boele
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
            displayName = displayName + nickName + ' ';
            if (typeof middleName !== 'undefined' && middleName) { displayName = displayName + middleName + ' ' }
            displayName = displayName + lastName;

            displayName = displayName + ' - ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { displayName = displayName + middleNamePartner + ' ' }
            displayName = displayName + lastNamePartner;
            break;
        case "PB":
            displayName = displayName + nickName + ' ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { displayName = displayName + middleNamePartner + ' ' }
            displayName = displayName + lastNamePartner;

            displayName = displayName + ' - ';
            if (typeof middleName !== 'undefined' && middleName) { displayName = displayName + middleName + ' ' }
            displayName = displayName + lastName;
            break;
        case "P":
            displayName = displayName + nickName + ' ';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { displayName = displayName + middleNamePartner + ' ' }
            displayName = displayName + lastNamePartner;
            break;
        case "B":
        default:
            displayName = displayName + nickName + ' ';
            if (typeof middleName !== 'undefined' && middleName) { displayName = displayName + middleName + ' ' }
            displayName = displayName + lastName;
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