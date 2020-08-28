// Please enter the mapping logic to generate the primaryMailAddress.
function generatePrimaryMailAddress() {
    const suffix = Iteration === 0 ? '' : Iteration;
 
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    let middleNamePartner = Person.Name.FamilyNamePartnerPrefix;
    let lastNamePartner = Person.Name.FamilyNamePartner;
 
 
    switch(Person.Name.Convention) {
    case "B":
    case "BP":
    default:
        mailAddress = firstName + '.';
        if (typeof middleName !== 'undefined' && middleName) { mailAddress = mailAddress + ', ' + middleName }
        mailAddress = mailAddress + lastName;
        break;
    case "P":
    case "PB":
        mailAddress = firstName + '.';
        if (typeof middleNamePartner !== 'undefined' && middleNamePartner) { mailAddress = mailAddress + ', ' + middleNamePartner }
        mailAddress = mailAddress + lastNamePartner;
        break;
    }
     
    const primaryMailAddress = mailAddress;
                     
    //Remove blank chars
    primaryMailAddress = primaryMailAddress.replace(/\s/g,'');
 
    //Convert to lower case
    primaryMailAddress = primaryMailAddress.toLowerCase();
 
    //Remove diacritical chars
    primaryMailAddress = deleteDiacriticalMarks(primaryMailAddress);
     
    //Remove all but specified chars  
    primaryMailAddress = primaryMailAddress.replace(/[^0-9a-zA-Z.]/g, '');
 
    primaryMailAddress = primaryMailAddress + suffix;
     
    return primaryMailAddress;
}
 
// Please enter the mapping logic to generate the adittionalMailAlias.
function generateMailAlias() {
    const suffix = Iteration === 0 ? '' : Iteration;
 
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
 
    let mailAlias = firstName + '.';
    //Check if the middleName variable contains data
    if (typeof middleName !== 'undefined' && middleName) { mailAlias = mailAlias + middleName.replace(/\s+/g, '.') + '.' }
    mailAlias = mailAlias + lastName;
                     
    //Remove blank chars
    mailAlias = mailAlias.replace(/\s/g,'');
 
    //Convert to lower case
    mailAlias = mailAlias.toLowerCase();
 
    //Remove diacritical chars
    mailAlias = deleteDiacriticalMarks(mailAlias);
     
    //Remove all but specified chars  
    mailAlias = mailAlias.replace(/[^0-9a-zA-Z.]/g, '');
 
    mailAlias = mailAlias + suffix;
 
    return mailAlias;
}
 
function getValue() {
    const domain = 'yourdomainhere';
    const primaryMailAddress = generatePrimaryMailAddress();
     
    if((Person.Name.Convention != "B") && (Person.Name.Convention != "BP"))
    {
        const mailAlias = generateMailAlias();
         
        return [
        'SMTP:' + primaryMailAddress + '@' + domain,
        'smtp:' + mailAlias + '@' + domain
        ]
    }
    else
    {
        return [
        'SMTP:' + primaryMailAddress + '@' + domain
        ]
    }
     
}
 
getValue();