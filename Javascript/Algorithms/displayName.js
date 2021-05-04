function generateDisplayName() {

    let firstName = Person.Name.NickName;
    
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    
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
