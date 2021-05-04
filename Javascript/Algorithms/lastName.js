function generateLastName() {

    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
    
    let birthName = [middleName, lastName].join(' ').trim();
    let partnerName = [middleNamePartner, lastNamePartner].join(' ').trim();
    
    switch(Person.Name.Convention) {
        case "B":
            return birthName;

        case "P":
            return partnerName;

        case "BP":
            return [birthName, partnerName]
                .filter(function(x) {return x !== ""})
                .join(' - ');

        case "PB":
            return [partnerName, birthName]
                .filter(function(x) {return x !== ""})
                .join(' - ');

        default:
            return birthName;
    }
}
 
generateLastName();
