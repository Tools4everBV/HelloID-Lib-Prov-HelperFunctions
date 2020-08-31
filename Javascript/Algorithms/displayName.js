function generatedisplayName() {
 
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
     
    switch(Person.Name.Convention) {
    case "B":
        nameFormatted = firstName;
        if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
        nameFormatted = nameFormatted + ' ' + lastName;
        break;
    case "P":
        nameFormatted = firstName;
        if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
        nameFormatted = nameFormatted + ' ' + lastNamePartner;
        break;
    case "BP":
        nameFormatted = firstName;
        if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
        nameFormatted = nameFormatted + ' ' + lastName + ' - ';
        if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner + ' ' }
        nameFormatted = nameFormatted + lastNamePartner;
        break;
    case "PB":
        nameFormatted = firstName;
        if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + ' ' + middleNamePartner }
        nameFormatted = nameFormatted + ' ' + lastNamePartner + ' - ';
        if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName + ' ' }
        nameFormatted = nameFormatted + lastName;
        break;
    default:
        nameFormatted = firstName;
        if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + ' ' + middleName }
        nameFormatted = nameFormatted + ' ' + lastName;
        break;
    }
    const displayName = nameFormatted.trim();
 
return displayName;
}
 
generatedisplayName();