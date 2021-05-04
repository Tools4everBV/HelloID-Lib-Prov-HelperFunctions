function generateSamAccountName() {

    const suffix = Iteration === 0 ? '' : Iteration;
    let maxAttributeLength = 20 - suffix.toString().length;
    
    let firstName = Person.Name.NickName.trim();
    let middleName = Person.Name.FamilyNamePrefix.trim();
    let lastName = Person.Name.FamilyName.trim();

    let sAMAccountName = [firstName, middleName, lastName]
        // Filter empty values
        .filter(function(x) {return x !== ""})
        // Join values to single string
        .join(' ')
        //Change whitespaces to dots
        .replace(/\s+/g, '.')
        //Convert to lower case
        .toLowerCase();

    //Remove diacritical chars
    sAMAccountName = deleteDiacriticalMarks(sAMAccountName);
    
    //Remove specific chars    
    sAMAccountName = sAMAccountName.replace(/[^0-9a-zA-Z.']/g, '');

    //Shorten string to maxAttributeLength minus iteration length
    return sAMAccountName.substring(0, maxAttributeLength) + suffix;
}

generateSamAccountName();
