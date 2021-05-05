// Please enter the mapping logic to generate the primaryMailAddress.
function generateMailAddress(firstName, middleName, lastName) {
    const suffix = Iteration === 0 ? '' : Iteration;
    
    let mailAddress = [firstName, middleName, lastName]
        // Filter empty values
        .filter(function(x) {return x !== ""})
        // Join values to single string
        .join(' ')
        //Change whitespaces to dots
        .replace(/\s+/g, '.')
        //Convert to lower case
        .toLowerCase();

    //Remove diacritical chars
    mailAddress = deleteDiacriticalMarks(mailAddress);
    
    //Remove all but specified chars   
    mailAddress = mailAddress.replace(/[^0-9a-zA-Z.']/g, '');

    return mailAddress + suffix;
}

function getValue() {
    const domain = 'yourdomainhere';
    
    const familyNameMailAddress = generateMailAddress(
        Person.Name.NickName,
        Person.Name.FamilyNamePrefix,
        Person.Name.FamilyName
    );
    
    if (["P", "PB"].indexOf(Person.Name.Convention) >= 0) {
        const partnerNameMailAddress = generateMailAddress(
            Person.Name.NickName,
            Person.Name.FamilyNamePartnerPrefix,
            Person.Name.FamilyNamePartner
        );
        
        return [
            'SMTP:' + partnerNameMailAddress + '@' + domain,
            'smtp:' + familyNameMailAddress + '@' + domain
        ]
    }

    return [
        'SMTP:' + familyNameMailAddress + '@' + domain
    ]
}

getValue();
