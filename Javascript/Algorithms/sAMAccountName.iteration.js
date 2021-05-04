function generateSamAccountName() {

    const suffix = Iteration === 0 ? '' : Iteration;
    let maxAttributeLength = 20 - suffix.toString().length;

    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
        
    if (Iteration == 0) {
        let sAMAccountName = [firstName, middleName, lastName]
            // Filter empty values
            .filter(function(x) {return x !== ""})
            // Join values to single string
            .join(' ')
            // Change whitespaces to dots
            .replace(/\s+/g, '.')
            // Take the first twenty characters
            .substring(0, 20);
    }
    
    else if (Iteration == 1) {
        let sAMAccountName = [firstName.substring(0, 1), middleName, lastName]
            // Filter empty values
            .filter(function(x) {return x !== ""})
            // Join values to single string
            .join(' ')
            // Change whitespaces to dots
            .replace(/\s+/g, '.')
            // Take the first twenty characters
            .substring(0, 20);
    }
    
    else {
        let sAMAccountName = [firstName.substring(0, 1), middleName, lastName]
            // Filter empty values
            .filter(function(x) {return x !== ""})
            // Join values to single string
            .join(' ')
            // Change whitespaces to dots
            .replace(/\s+/g, '.')
            // Take the first twenty characters
            .substring(0, maxAttributeLength);

        sAMAccountName = sAMAccountName + suffix;
    }

    //Convert to lower case
    sAMAccountName = sAMAccountName.toLowerCase();

    //Remove diacritical chars
    sAMAccountName = deleteDiacriticalMarks(sAMAccountName);

    //Remove specific chars    
    return sAMAccountName.replace(/[^0-9a-zA-Z.']/g, '');
}

generateSamAccountName();
