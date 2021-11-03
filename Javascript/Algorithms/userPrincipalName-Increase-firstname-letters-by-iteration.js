// This function generates names like:
// r.jongbloed@domain.com
// ri.jongbloed@domain.com
// ric.jongbloed@domain.com
// rick.jongbloed@domain.com
// r.jongbloed2@domain.com
// r.jongbloed3@domain.com
// r.jongbloed4@domain.com
// etc

function generateUserPrincipalName() {
	
    const domain = 'domain.com';
       
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    
    if (Iteration < firstName.length) {
        let userPrincipalName = firstName.substring(0,Iteration+1) + '.';
        suffix = ''
    } else {
        let userPrincipalName = firstName.substring(0,1) + '.';
        const suffix = Iteration - firstName.length + 2;
    }
    
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
    userPrincipalName = userPrincipalName.replace(/[^0-9a-zA-Z.']/g, '');

	userPrincipalName = userPrincipalName + suffix + '@' + domain;
    
    return userPrincipalName;
}

generateUserPrincipalName();