function generateUserPrincipalName() {

    let domain = 'yourdomainhere';
    let suffix = Iteration === 0 ? '' : Iteration;
    
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    
    let userPrincipalName = firstName + '.';
    //Check if the middleName variable contains data
    if (typeof middleName !== 'undefined' && middleName) { userPrincipalName = userPrincipalName + middleName.replace(/\s+/g, '.') + '.' }
    userPrincipalName = userPrincipalName + lastName;
    
    //Remove blank chars
    userPrincipalName = userPrincipalName.replace(/\s/g,'');
    
    //Convert to lower case
    userPrincipalName = userPrincipalName.toLowerCase();
    
    //Remove diacritical chars
    userPrincipalName = deleteDiacriticalMarks(userPrincipalName);

	//Remove specific chars    
    userPrincipalName = userPrincipalName.trim().replace(/[^0-9a-zA-Z.']/g, '');

	userPrincipalName = userPrincipalName + suffix + '@' + domain;
    
    return userPrincipalName;
}

generateUserPrincipalName();