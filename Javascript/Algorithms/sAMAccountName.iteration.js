function generateSamAccountName() {
    const suffix = Iteration === 0 ? '' : Iteration;
    let maxAttributeLength = 20 - suffix.toString().length;
    
    let firstNameChar = Person.Name.NickName.substring(0, 1);
    let firstName = Person.Name.NickName;
    let middleName = Person.Name.FamilyNamePrefix;
    let lastName = Person.Name.FamilyName;
    
    let sAMAccountName = "";
    
    if (Iteration == 0)
    {
        sAMAccountName = firstName + '.';
        //Check if the middleName variable contains data
        if (typeof middleName !== 'undefined' && middleName) { sAMAccountName = sAMAccountName + middleName.replace(/\s+/g, '.') + '.' }
        sAMAccountName = sAMAccountName + lastName;
        
        sAMAccountName = sAMAccountName.trim().substring(0, 20);
    }
    
    if (Iteration == 1)
    {
        sAMAccountName = firstNameChar + '.';
        //Check if the middleName variable contains data
        if (typeof middleName !== 'undefined' && middleName) { sAMAccountName = sAMAccountName + middleName.replace(/\s+/g, '.') + '.' }
        sAMAccountName = sAMAccountName + lastName;
        
        sAMAccountName = sAMAccountName.trim().substring(0, 20);
    }
    
    if (Iteration >= 2)
    {
        sAMAccountName = firstNameChar + '.';
        //Check if the middleName variable contains data
        if (typeof middleName !== 'undefined' && middleName) { sAMAccountName = sAMAccountName + middleName.replace(/\s+/g, '.') + '.' }
        sAMAccountName = sAMAccountName + lastName;
        
        sAMAccountName = sAMAccountName.trim().substring(0, maxAttributeLength) + suffix;
    }
    
    //Remove tailing ...
    sAMAccountName = sAMAccountName.replace(/\.+$/, "");

    //Remove leading ...
    sAMAccountName = sAMAccountName.replace(/^\.+/, "");

    //Convert to lower case
    sAMAccountName = sAMAccountName.toLowerCase();

    //Remove diacritical chars
    sAMAccountName = deleteDiacriticalMarks(sAMAccountName);

    //Remove specific chars    
    sAMAccountName = sAMAccountName.replace(/[^0-9a-zA-Z.']/g, '');

  return sAMAccountName;
}

generateSamAccountName();