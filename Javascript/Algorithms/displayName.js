function generateDisplayName() {

    let firstName = Person.Name.NickName.trim();

    let middleName = Person.Name.FamilyNamePrefix.trim();
    let lastName = Person.Name.FamilyName.trim();

    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix.trim();
    let lastNamePartner = Person.Name.FamilyNamePartner.trim();

    let birthName = [middleName, lastName].join(' ').trim();
    let partnerName = [middleNamePartner, lastNamePartner].join(' ').trim();

    switch(Person.Name.Convention) {
        case 'B':
            return firstName + ' ' + birthName;

        case 'BP':
            return firstName + ' ' + [birthName, partnerName]
                .filter(function(x) {return x !== ""})
                .join(' - ');

        case 'P':
            return firstName + ' ' + partnerName;

        case 'PB':
            return firstName + ' ' + [partnerName, birthName]
                .filter(function(x) {return x !== ""})
                .join(' - ');

        default:
            return firstName + ' ' + birthName;
    }
}

generateDisplayName();
