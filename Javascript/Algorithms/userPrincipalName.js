function generateUserPrincipalName() {

    const domain = 'yourdomainhere';
    const suffix = Iteration === 0 ? '' : Iteration;
    
    let firstName = Person.Name.NickName.trim();
    let middleName = Person.Name.FamilyNamePrefix.trim();
    let lastName = Person.Name.FamilyName.trim();
    
    let userPrincipalName = [firstName, middleName, lastName]
        // Filter empty values
        .filter(function(x) {return x !== ""})
        // Join values to single string
        .join(' ')
        //Change whitespaces to dots
        .replace(/\s+/g, '.')
        //Convert to lower case
        .toLowerCase();
    
    //Remove diacritical chars
    userPrincipalName = deleteDiacriticalMarks(userPrincipalName);

    //Remove specific chars    
    userPrincipalName = userPrincipalName.replace(/[^0-9a-zA-Z.']/g, '');

    return userPrincipalName + suffix + '@' + domain;
}

generateUserPrincipalName();
