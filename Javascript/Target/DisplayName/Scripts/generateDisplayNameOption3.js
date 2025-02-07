// Template: generateDisplayNameOption3.js [https://github.com/Tools4everBV/HelloID-Lib-Prov-HelperFunctions/blob/master/Javascript/Target/DisplayName/Scripts/generateDisplayNameOption3.js]
// Note: there are no comma's used
// Mapping logic to generate the DisplayName according to the following convention.
// B	Boele H.C. van den (Janine)
// BP	Boele–de Vries H.C. van den (Janine)
// P	Vries H.C. de (Janine)
// PB  Vries–van den Boele H.C. de (Janine)

function generateDisplayName() {
    let initials = Person.Name.Initials;
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

            displayName = displayName + '-';
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { displayName = displayName + middleNamePartner + ' ' }
            displayName = displayName + lastNamePartner;

            displayName = displayName + ' ';
            displayName = displayName + initials;
            if (typeof middleName !== 'undefined' && middleName) { displayName = displayName + ' ' + middleName }

            displayName = displayName + ' (' + nickName + ')';

            break;
        case "PB":
            displayName = displayName + lastNamePartner;

            displayName = displayName + '-';
            if (typeof middleName !== 'undefined' && middleName) { displayName = displayName + middleName + ' ' }
            displayName = displayName + lastName;

            displayName = displayName + ' ';
            displayName = displayName + initials;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { displayName = displayName + ' ' + middleNamePartner }

            displayName = displayName + ' (' + nickName + ')';

            break;
        case "P":
            displayName = displayName + lastNamePartner;

            displayName = displayName + ' ';
            displayName = displayName + initials;
            if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { displayName = displayName + ' ' + middleNamePartner }

            displayName = displayName + ' (' + nickName + ')';

            break;
        case "B":
        default:
            displayName = displayName + lastName;

            displayName = displayName + ' ';
            displayName = displayName + initials;
            if (typeof middleName !== 'undefined' && middleName) { displayName = displayName + ' ' + middleName }

            displayName = displayName + ' (' + nickName + ')';

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