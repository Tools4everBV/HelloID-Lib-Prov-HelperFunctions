// Please enter the mapping logic to generate the surName based on the preferred name convention.
function generateLastName() {
 
 
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
 
    let nameFormatted = "";
 
    switch(Person.Name.Convention) {
    case "B":
        if (typeof middleName !== 'undefined' && middleName) { nameFormatted = middleName + ' ' }
        nameFormatted = nameFormatted + lastName;
        break;
    case "P":
        if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = middleNamePartner + ' ' }
        nameFormatted = nameFormatted + lastNamePartner;
        break;
    case "BP":
        //if (typeof middleName !== 'undefined' && middleName) { nameFormatted = middleName + ' ' }
        nameFormatted = nameFormatted + lastName + ' - ';
        if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = nameFormatted + middleNamePartner + ' ' }
        nameFormatted = nameFormatted + lastNamePartner;
        break;
    case "PB":
        if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { nameFormatted = middleNamePartner + ' ' }
        nameFormatted = nameFormatted + lastNamePartner + ' - ';
        if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
        nameFormatted = nameFormatted + lastName;
        break;
    default:
        if (typeof middleName !== 'undefined' && middleName) { nameFormatted = nameFormatted + middleName + ' ' }
        nameFormatted = nameFormatted + lastName;
        break;
    }
    const lastName = nameFormatted.trim();
 
return lastName;
}
 
generateLastName();