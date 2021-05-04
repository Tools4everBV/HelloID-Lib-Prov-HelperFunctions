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
       
    let firstName = Person.Name.NickName.trim();
    let middleName = Person.Name.FamilyNamePrefix.trim();
    let lastName = Person.Name.FamilyName.trim();

    if (Iteration < firstName.length) {
        let firstNameLetters = firstName.substring(0, Iteration + 1);
        const suffix = '';
    } else {
        let firstNameLetters = firstName.substring(0, 1);
        const suffix = Iteration - firstName.length + 2;
    }

    let userPrincipalName = [firstNameLetters, middleName, lastName]
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

    userPrincipalName = userPrincipalName + suffix + '@' + domain;

    return userPrincipalName;
}

generateUserPrincipalName();
